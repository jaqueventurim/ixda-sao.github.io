---
layout: page
title: "membros"
date: 2015-06-24 02:42
---

# Membros

A IxDA SP é composta por membros colaboradores voluntários, que dedicam parte de seu tempo e de seu talento para a visibilidade da área.

<ul class="membros">
  {% for membro in site.data.membros %}
    <li class="membro">
      <a href="{{ site.url }}/membro/{{ membro.twitter }}.html" title="{{ membro.nome }}">
    	  <img src="{{ membro.email | to_gravatar }}" alt="{{ membro.name }}" class="thumbnail" />
    	  <h2 class="nome">{{ membro.nome }}</h2>
      </a>
    </li>
  {% endfor %}
</ul>

<p class="call-to-action-centered-block">Você também pode colaborar com IxDA SP. Venha criar conosco! <a class="btn-one" href="./participe" title="Veja como participar">PARTICIPE</a></p>
