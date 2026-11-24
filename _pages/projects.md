---
layout: page
title: projects & more
permalink: /projects/
description: Selected research, engineering and teaching work, plus talks and notes.
nav: true
nav_order: 1
display_categories: [AI for maintenance, Computer vision, Teaching and supervision, Talks and notes, Simulation]
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Table of contents -->
  <nav class="projects-toc" aria-label="Contents">
    <p class="projects-toc-title">Contents</p>
    <ol>
      {% for category in page.display_categories %}
      {% assign category_size = site.projects | where: "category", category | size %}
      <li>
        <a href="#{{ category | slugify }}"><span>{{ category }}</span><span class="toc-leader"></span><span class="toc-count">{{ category_size }}</span></a>
      </li>
      {% endfor %}
    </ol>
  </nav>
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category | slugify }}" class="category-anchor" href="#{{ category | slugify }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
