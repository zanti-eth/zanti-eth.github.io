---
layout: default
title: Home
---

{% include nav.html %}

# Welcome to the 0BTC Life

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

{% include socials.html %}

