---
layout: page
title: Membros
permalink: /membros/
---

## Slack

<ul class="membros">
  {% for membro in site.data.membros %}
    <li>
    	<h2>{{ membro.nome }}</h2>
    	<img src="{{ membro.email | to_gravatar }}" alt="{{ membro.name }}" />
    </li>
  {% endfor %}
</ul>


<script type="text/javascript" src="/scripts/membros.js"></script>
