---
layout: default
title: "index"
---


<div style="display: flex; gap: 20px;">
  <div style="flex: 1;">

<h1>Trading Platforms</h1>

<h2>🏦 CEX</h2>

<ul>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item
    <ul>
      <li>Indented item</li>
      <li>Indented item</li>
    </ul>
  </li>
  <li>Fourth item</li>
</ul>

<h2>🏦 DEX</h2>

<h1>Crypto Gaming</h1>

<h2>Browser games</h2>

<ul>
  <li><a href="./articles/crypto-gaming/cryptoroyale.md">Crypto Royale</a></li>
</ul>

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


















