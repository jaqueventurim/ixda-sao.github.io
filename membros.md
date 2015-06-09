---
layout: page
title: Membros
permalink: /membros/
---

## Slack

<ul>
  {% for membro in site.data.membros %}
    <li>{{ membro.nome }}</li>
  {% endfor %}
</ul>
