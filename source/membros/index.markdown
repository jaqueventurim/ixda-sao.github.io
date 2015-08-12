---
layout: page
title: "membros"
date: 2015-06-24 02:42
---

# Membros

Atual diretoria (2013 - 2015)

<ul class="membros">
  {% for membro in site.data.membros %}
    <li class="membro">
      <a href="./membro/{{ membro.twitter }}.html" title="{{ membro.nome }}">
    	  <img src="{{ membro.email | to_gravatar }}" alt="{{ membro.name }}" class="thumbnail" />
    	  <h2 class="nome">{{ membro.nome }}</h2>
      </a>
    </li>
  {% endfor %}
</ul>
