---
layout: default
title: "index"
---

# 📰 Latest Posts

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <small>({{ post.date | date: "%Y-%m-%d" }})</small>
    </li>
  {% endfor %}
</ul>

# 📂 Category Contents

{% assign all_pages = site.pages | where_exp: "p", "p.path contains 'category/'" | sort: "title" %}
{% assign main_categories = "" | split: "" %}

{% comment %} First find all main categories {% endcomment %}
{% for page in all_pages %}
  {% assign parts = page.path | split: '/' %}
  {% assign main_cat = parts[1] %}
  {% unless main_categories contains main_cat %}
    {% assign main_categories = main_categories | push: main_cat %}
  {% endunless %}
{% endfor %}

{% for main_cat in main_categories %}
## 📁 {{ main_cat | capitalize }}

<ul style="padding-left:20px; list-style-type:none;">
  {% comment %} Show root-level pages first {% endcomment %}
  {% for page in all_pages %}
    {% if page.path contains main_cat %}
      {% assign parts = page.path | split: '/' %}
      {% if parts.size == 2 and page.name != "index.md" %}
        <li>• <a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
      {% endif %}
    {% endif %}
  {% endfor %}

  {% comment %} Now show subcategories {% endcomment %}
  {% assign subcategories = "" | split: "" %}
  {% for page in all_pages %}
    {% if page.path contains main_cat %}
      {% assign parts = page.path | split: '/' %}
      {% if parts.size == 3 and parts[2] != "index.md" %}
        {% assign subcat = parts[2] %}
        {% unless subcategories contains subcat %}
          {% assign subcategories = subcategories | push: subcat %}
        {% endunless %}
      {% endif %}
    {% endif %}
  {% endfor %}

  {% for subcat in subcategories %}
    <li><strong>📂 {{ subcat | capitalize }}</strong>
      <ul style="padding-left:20px; list-style-type:none;">
        {% for page in all_pages %}
          {% if page.path contains main_cat and page.path contains subcat %}
            {% assign parts = page.path | split: '/' %}
            {% if parts.size == 4 and page.name != "index.md" %}
              <li>• <a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
            {% endif %}
          {% endif %}
        {% endfor %}
      </ul>
    </li>
  {% endfor %}
</ul>
{% endfor %}










