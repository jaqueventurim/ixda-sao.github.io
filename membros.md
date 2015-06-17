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

<div
  class="fb-like"
  data-share="true"
  data-width="450"
  data-show-faces="true">
</div>

<script type="text/javascript" src="/scripts/membros.js"></script>
