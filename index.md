---
layout: default
title: ""
---

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

{% include main_menu.html %}


## 📄 About Me

[Learn more about me and this blog](about)

{% include socials.html %}

