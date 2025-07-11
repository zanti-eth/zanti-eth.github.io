---
layout: default
title: "index"
---


<div style="display: flex; gap: 20px;">
  <div style="flex: 1;">

<h1>📃 All Articles</h1>

<div class="dropdown-section">
  <h2 class="dropdown-header">
    <span class="dropdown-arrow"></span> <!-- Empty container -->
    <strong>💸 Trading Platforms</strong>
  </h2>
  <div class="dropdown-content" markdown="1">

### 🏦 CEX

   - <img src="/assets/images/binance.svg" width="20" height="20" alt="Binance" style="vertical-align:middle; margin-right:5px;" /> [Binance](./articles/cex/binance.md)
   - Coinbase
   - MEXC
   - Gate.io
   - KuCoin
   - Kraken
    
### 🏦 DEX

  - Uniswap
  - PancakeSwap
  - dYdX

### 🏦 DEX Aggregators

  - [CoWSwap](./articles/dex-aggregators/cowswap.md)

  </div>
</div>

<h2>🎮 Crypto Gaming</h2>

<h3>☁️ Browser games</h3>

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


















