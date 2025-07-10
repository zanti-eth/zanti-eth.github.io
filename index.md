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

{% comment %} First collect all category pages {% endcomment %}
{% assign all_pages = site.pages | where_exp: "p", "p.path contains 'category/'" | sort: "title" %}

{% comment %} Extract unique main categories {% endcomment %}
{% assign main_categories = "" | split: "" %}
{% for page in all_pages %}
  {% assign parts = page.path | split: '/' %}
  {% assign main_cat = parts[1] %}
  {% unless main_categories contains main_cat %}
    {% assign main_categories = main_categories | push: main_cat %}
  {% endunless %}
{% endfor %}
{% assign main_categories = main_categories | sort %}

{% comment %} Display each main category {% endcomment %}
{% for main_cat in main_categories %}
## 📁 {{ main_cat | capitalize }}

<ul style="padding-left:20px; list-style-type:none;">
  {% comment %} Get pages in this main category {% endcomment %}
  {% assign cat_pages = all_pages | where_exp: "p", "p.path contains main_cat" %}
  
  {% comment %} Extract unique subcategories {% endcomment %}
  {% assign subcategories = "" | split: "" %}
  {% for page in cat_pages %}
    {% assign parts = page.path | split: '/' %}
    {% if parts.size > 2 %}
      {% assign subcat = parts[2] %}
      {% unless subcategories contains subcat %}
        {% assign subcategories = subcategories | push: subcat %}
      {% endunless %}
    {% endif %}
  {% endfor %}
  {% assign subcategories = subcategories | sort %}
  
  {% comment %} Display subcategories {% endcomment %}
  {% for subcat in subcategories %}
    <li><strong>📂 {{ subcat | capitalize }}</strong>
      <ul style="padding-left:20px; list-style-type:none;">
        {% for page in cat_pages %}
          {% assign parts = page.path | split: '/' %}
          {% if parts.size > 2 and parts[2] == subcat and page.name != "index.md" %}
            <li>• <a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
          {% endif %}
        {% endfor %}
      </ul>
    </li>
  {% endfor %}
  
  {% comment %} Display root-level pages in this category {% endcomment %}
  {% for page in cat_pages %}
    {% assign parts = page.path | split: '/' %}
    {% if parts.size == 2 and page.name != "index.md" %}
      <li>• <a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
{% endfor %}










