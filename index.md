---
layout: default
title: "index"
---

# :bank: CEXes

  - ![alt text](<Screenshot 2024-02-15 104723-1.png>)

# 📰 Latest Posts

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <small>({{ post.date | date: "%Y-%m-%d" }})</small>
    </li>
  {% endfor %}
</ul>













