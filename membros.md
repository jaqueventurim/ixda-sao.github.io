---
layout: page
title: Membros
permalink: /membros/
---

## Slack

<ul class="membros">
  {% for membro in site.data.membros %}
    <li data-faceid="{{ membro.facebookid }}">{{ membro.nome }}</li>
  {% endfor %}
</ul>

{% include_relative  scripts/membros.js %}
