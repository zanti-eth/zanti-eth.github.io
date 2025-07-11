---
layout: default
title: "index"
---


<div style="display: flex; gap: 20px;">
  <div style="flex: 1;">

<h1>Pages</h1>

<h2>Trading Platforms</h2>

<h3>🏦 CEX</h3>

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

<h3>🏦 DEX</h3>

<h2>Crypto Gaming</h2>

<h3>Browser games</h3>

<ul>
  <li><a href="./articles/crypto-gaming/cryptoroyale.md">Crypto Royale</a></li>
</ul>

  </div>

  <div style="flex: 1;">
    <h1> 📰 Latest Posts</h1>

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


















