---
layout: default
title: Home
---

# Welcome to My Crypto Blog

Educational insights on cryptocurrency, Web3, and blockchain technology.

---

## 📰 Latest Posts

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <small>({{ post.date | date: "%Y-%m-%d" }})</small>
    </li>
  {% endfor %}
</ul>

---

## 📄 About Me

[Learn more about me and this blog](about)
