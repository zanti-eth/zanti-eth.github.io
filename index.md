---
layout: default
title: "index"
---

# Trading Platforms

## 🏦 CEX

- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item

## 🏦 DEX

# Crypto Gaming

## Browser games

- [Crypto Royale](./articles/crypto-gaming/cryptoroyale.md)

# 📰 Latest Posts

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <small>({{ post.date | date: "%Y-%m-%d" }})</small>
    </li>
  {% endfor %}
</ul>













