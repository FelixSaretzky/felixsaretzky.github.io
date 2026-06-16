#!/usr/bin/env python

import os
import sys
import yaml
import time
import random
from datetime import datetime

# Try to import scholarly, fall back to manual fetching if not available
try:
    from scholarly import scholarly
    SCHOLARLY_AVAILABLE = True
except ImportError:
    SCHOLARLY_AVAILABLE = False
    print("Warning: 'scholarly' library not available. Will try manual fetching.")


def load_scholar_user_id() -> str:
    """Load the Google Scholar user ID from the configuration file."""
    config_file = "_data/socials.yml"
    if not os.path.exists(config_file):
        print(
            f"Configuration file {config_file} not found. Please ensure the file exists and contains your Google Scholar user ID."
        )
        sys.exit(1)
    try:
        with open(config_file, "r") as f:
            config = yaml.safe_load(f)
        scholar_user_id = config.get("scholar_userid")
        if not scholar_user_id:
            print(
                "No 'scholar_userid' found in the configuration file. Please add 'scholar_userid' to _data/socials.yml."
            )
            sys.exit(1)
        return scholar_user_id
    except yaml.YAMLError as e:
        print(
            f"Error parsing YAML file {config_file}: {e}. Please check the file for correct YAML syntax."
        )
        sys.exit(1)


SCHOLAR_USER_ID: str = load_scholar_user_id()
OUTPUT_FILE: str = "_data/citations.yml"


def configure_scholarly():
    """Configure scholarly library with proper headers to avoid blocking."""
    import requests
    from requests.adapters import HTTPAdapter
    from urllib3.util.retry import Retry
    
    # Set user agent to avoid being blocked
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate",
        "Connection": "keep-alive",
    }
    
    # Use session with headers and retries
    session = requests.Session()
    retry = Retry(
        total=5,
        backoff_factor=2,
        status_forcelist=[429, 500, 502, 503, 504],
        raised_connection_errors=False
    )
    adapter = HTTPAdapter(max_retries=retry)
    session.mount("http://", adapter)
    session.mount("https://", adapter)
    session.headers.update(headers)
    
    # Inject session into scholarly
    scholarly._SEARCH_ENGINE = session
    
    # Configure scholarly settings
    scholarly.set_timeout(60)
    scholarly.set_retries(5)
    
    # Add delay between requests to avoid rate limiting
    scholarly.pprint = lambda x: None  # Suppress output


def get_scholar_citations() -> None:
    """Fetch and update Google Scholar citation data."""
    print(f"Fetching citations for Google Scholar ID: {SCHOLAR_USER_ID}")
    today = datetime.now().strftime("%Y-%m-%d")

    # Check if the output file was already updated today
    existing_data = None
    if os.path.exists(OUTPUT_FILE):
        try:
            with open(OUTPUT_FILE, "r") as f:
                existing_data = yaml.safe_load(f)
            if (
                existing_data
                and "metadata" in existing_data
                and "last_updated" in existing_data["metadata"]
            ):
                print(f"Last updated on: {existing_data['metadata']['last_updated']}")
                if existing_data["metadata"]["last_updated"] == today:
                    print("Citations data is already up-to-date. Skipping fetch.")
                    return
        except Exception as e:
            print(
                f"Warning: Could not read existing citation data from {OUTPUT_FILE}: {e}. The file may be missing or corrupted."
            )

    citation_data = {"metadata": {"last_updated": today}, "papers": {}}

    if SCHOLARLY_AVAILABLE:
        try:
            configure_scholarly()
            
            # Add random delay to avoid rate limiting
            time.sleep(random.uniform(1, 3))
            
            print("Searching for author...")
            author = scholarly.search_author_id(SCHOLAR_USER_ID)
            
            if not author:
                print(f"Could not find author with ID '{SCHOLAR_USER_ID}'.")
                sys.exit(1)
            
            print(f"Found author. Filling details...")
            # Fill with retries
            max_retries = 3
            for attempt in range(max_retries):
                try:
                    author_data = scholarly.fill(author)
                    break
                except Exception as e:
                    if attempt == max_retries - 1:
                        raise
                    print(f"Attempt {attempt + 1} failed: {e}. Retrying...")
                    time.sleep(random.uniform(2, 5))
            
            if not author_data:
                print(
                    f"Could not fetch author data for user ID '{SCHOLAR_USER_ID}'. Please verify the Scholar user ID and try again."
                )
                sys.exit(1)

            if "publications" not in author_data:
                print(f"No publications found in author data for user ID '{SCHOLAR_USER_ID}'.")
                sys.exit(1)

            print(f"Found {len(author_data['publications'])} publications. Processing...")
            
            for idx, pub in enumerate(author_data["publications"]):
                try:
                    pub_id = pub.get("pub_id") or pub.get("author_pub_id")
                    if not pub_id:
                        print(
                            f"Warning: No ID found for publication: {pub.get('bib', {}).get('title', 'Unknown')}. This publication will be skipped."
                        )
                        continue

                    title = pub.get("bib", {}).get("title", "Unknown Title")
                    year = pub.get("bib", {}).get("pub_year", "Unknown Year")
                    citations = pub.get("num_citations", 0)

                    print(f"  [{idx+1}/{len(author_data['publications'])}] {title} ({year}) - Citations: {citations}")

                    citation_data["papers"][pub_id] = {
                        "title": title,
                        "year": year,
                        "citations": citations,
                    }
                    
                    # Add small delay between processing publications
                    if (idx + 1) % 5 == 0:
                        time.sleep(random.uniform(0.5, 1.5))
                        
                except Exception as e:
                    print(
                        f"Error processing publication '{pub.get('bib', {}).get('title', 'Unknown')}': {e}. This publication will be skipped."
                    )
        except Exception as e:
            print(
                f"Error fetching author data from Google Scholar for user ID '{SCHOLAR_USER_ID}': {e}. Please check your internet connection and Scholar user ID."
            )
            import traceback
            traceback.print_exc()
            sys.exit(1)
    else:
        print("ERROR: scholarly library is required but not available.")
        sys.exit(1)

    # Compare new data with existing data
    if existing_data and existing_data.get("papers") == citation_data["papers"]:
        print("No changes in citation data. Skipping file update.")
        return

    try:
        with open(OUTPUT_FILE, "w") as f:
            yaml.dump(citation_data, f, width=1000, sort_keys=True)
        print(f"Citation data saved to {OUTPUT_FILE}")
    except Exception as e:
        print(
            f"Error writing citation data to {OUTPUT_FILE}: {e}. Please check file permissions and disk space."
        )
        sys.exit(1)


if __name__ == "__main__":
    try:
        get_scholar_citations()
    except Exception as e:
        print(f"Unexpected error: {e}")
        import traceback
        traceback.print_exc()
        sys.exit(1)
