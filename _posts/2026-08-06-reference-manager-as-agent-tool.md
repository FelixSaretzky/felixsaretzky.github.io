---
layout: post
title: Your reference manager as an agent tool
date: 2026-08-06
description: Indexing a paper library for semantic search turns "I read this somewhere" into a lookup, and lets one session move from what a paper claims to what its code does.
tags: [tooling, workflow, literature]
categories: method
related_posts: true
---

_Status: supported · Confidence: high · Last checked: 2026-08-06_

**TL;DR.** I exposed my reference library to a terminal agent over MCP. The gain is not faster search. It is that reading a paper and checking its code now happen in the same session.

## Context

A literature-heavy project does not fail at finding papers. It fails at finding the one you already read. You remember the claim, not the title, and not the words the abstract used. Keyword search needs the words. You have the claim.

## What I did

Ran a local MCP server against my reference manager and built a semantic index over the attached full texts. It reads the local database, so nothing leaves the machine. A few hundred entries become a few thousand indexed passages, so a match lands inside a paper rather than on its title.

## Result

Queries now work as descriptions. Asking how synthetic pretraining distributions are designed surfaced the paper I had in mind, whose title shares no word with the query.

The larger effect was unplanned. The agent read a paper's full text, then its released repository, and reported that the two disagreed. A reference manager cannot do that. Neither can a chat window with no access to the disk.

## What follows

Ranking is useful, similarity scores are not. Scanned PDFs without OCR return nothing. Full texts are expensive in context, so search is for locating, not for reading.

Open: whether indexing what I already collected quietly narrows what I look for next.

---

**Sources.** [Model Context Protocol](https://modelcontextprotocol.io)
