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
{% assign categories = all_pages | map: "path" | split: "/" | map: "second" | uniq | sort %}

{% for category in categories %}
## 📁 {{ category | capitalize }}

<ul style="padding-left:20px; list-style-type:none;">
  {% assign category_pages = all_pages | where_exp: "p", "p.path contains category" | sort: "title" %}
  {% for page in category_pages %}
    {% unless page.path contains '/index.md' %}
      <li>• <a href="{{ page.url }}">{{ page.title | default: page.name }}</a></li>
    {% endunless %}
  {% endfor %}
</ul>
{% endfor %}










