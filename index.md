---
layout: default
title: "index"
---


<div style="display: flex; gap: 20px;">
  <div style="flex: 1;">

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

  </div>

  <div style="flex: 1;">
    # 📰 Latest Posts

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      <small>({{ post.date | date: "%Y-%m-%d" }})</small>
    </li>
  {% endfor %}
</ul>
  </div>
</div>


















