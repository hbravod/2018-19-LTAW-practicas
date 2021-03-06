# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse

from mi_tienda.models import Negra
from mi_tienda.models import Misterio
from mi_tienda.models import Fantasia

# Create your views here.
def home_view (request):
    return render(request, "index.html", {})

def libros_negra (request):
    products = Negra.objects.all()
    return render(request, "products.html", {'products': products})

def libros_misterio (request):
    products = Misterio.objects.all()
    return render(request, "products.html", {'products': products})

def libros_fantasia (request):
    products = Fantasia.objects.all()
    return render(request, "products.html", {'products': products})

def list(request):
    objects = Negra.objects.all()
    html = "<p>Listado de Novelas Negras:</p>"
    for elt in objects:
        print(elt.name)
        html += '<p>'+ elt.name + ' ' + str(elt.price) + '€' + ' ' + str(elt.stock) + ' ' + 'en stock' +'<p>'
    return HttpResponse(html)
