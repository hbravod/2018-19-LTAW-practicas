from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.home_view),
    url(r'^list/', views.list),
    url(r'^negra/', views.libros_negra),
    url(r'^misterio/', views.libros_misterio),
    url(r'^fantasia/', views.libros_fantasia)
]
