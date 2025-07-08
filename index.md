---
layout: default
title: ""
---

{% if site.maintenance_mode %}
  {% include maintenance.html %}
{% else %}

  # 📰 Latest Posts

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

---

{% include socials.html %}

{% endif %}



