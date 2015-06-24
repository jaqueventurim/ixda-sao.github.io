---
layout: page
title: "membros"
date: 2015-06-24 02:42
comments: true
sharing: true
footer: true
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
