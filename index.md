---
layout: default
title: "index"
---

{% include menu.html %}

<ul>
  {% for p in site.pages %}
    <li>{{ p.path }}</li>
  {% endfor %}
</ul>

# 📰 Latest Posts

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <small>({{ post.date | date: "%Y-%m-%d" }})</small>
    </li>
  {% endfor %}
</ul>













