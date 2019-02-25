from django.http import HttpResponse
from django.template import Template, Context
from datetime import datetime
#from django.template.loader import get_template
from django.shortcuts import render

def mi_funcion (request):
    html = "Hola! Mi primera URL!!"

    return HttpResponse(html)

def mi_producto(request, parametro):
    numero = int(parametro)
    html = "Acceso a producto: %i" % numero;
    return HttpResponse(html)

PLANTILLA = """
<!DOCTYPE html>
<html lang="s" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

    <p>Bienvenido a mi tienda, {{user}}</p>

  </body>
</html>
"""

def saludo(request):

    t = Template(PLANTILLA)

    c = Context({'user':'Bartolo'})

    html = t.render(c)
    return HttpResponse(html)

def index(request):
    now = datetime.now()
    return render(request, 'test.html', {'user': 'Hugo', 'hora': now})

def hora_actual(request):
    now = datetime.now()
    fp = open('/home/alumnos/hbravod/github/2018-19-LTAW-practicas/Practica-2/mi_tienda/mi_tienda/hora.html')
    t = Template(fp.read())
    fp.close()
    c = Context({'hora':  now})
    html = t.render(c)
    return HttpResponse(html)

def cv(request):
    fp = open('/home/alumnos/hbravod/github/2018-19-LTAW-practicas/Practica-2/mi_tienda/mi_tienda/CV.html')
    t = Template(fp.read())
    fp.close()
    c = Context({' '})
    html = t.render(c)
    return HttpResponse(html)

def cv_render(request):
    return render(request, 'CV.html', {'user': 'Hugo'})
