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

<h2>🔗 Connect with Me</h2>

<div style="display: flex; flex-wrap: wrap; gap: 1em; padding: 1em 0;">
  <a href="https://x.com/yourhandle" target="_blank" style="text-decoration: none;">
    🐦 <strong>Twitter/X</strong>
  </a>

  <a href="https://github.com/yourhandle" target="_blank" style="text-decoration: none;">
    💻 <strong>GitHub</strong>
  </a>

  <a href="https://t.me/yourhandle" target="_blank" style="text-decoration: none;">
    📢 <strong>Telegram</strong>
  </a>

  <a href="mailto:you@email.com" target="_blank" style="text-decoration: none;">
    ✉️ <strong>Email</strong>
  </a>

  <a href="https://youtube.com/@yourchannel" target="_blank" style="text-decoration: none;">
    ▶️ <strong>YouTube</strong>
  </a>
</div>

