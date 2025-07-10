---
layout: default
title: "index"
---

# 🏦 CEXes

- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item

# 📰 Latest Posts

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <small>({{ post.date | date: "%Y-%m-%d" }})</small>
    </li>
  {% endfor %}
</ul>













