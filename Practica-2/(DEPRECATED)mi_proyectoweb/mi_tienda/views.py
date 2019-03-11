# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse

from mi_tienda.models import Misterio
from mi_tienda.models import Fantasia

# Create your views here.
def home_view (request):
    return render(request, "index.html", {})

def libros_misterio (request):
    return render(request, "libros-misterio.html", {})

def libros_fantasia (request):
    return render(request, "libros-fantasia.html", {})

def list(request):
    objects = NovelaNegra.objects.all()
    html = "<p>Listado de Novelas Negras:</p>"
    for elt in objects:
        print(elt.name)
        html += '<p>'+ elt.name + ' ' + str(elt.price) + '€' + ' ' + str(elt.stock) + ' ' + 'en stock' +'<p>'
    return HttpResponse(html)
