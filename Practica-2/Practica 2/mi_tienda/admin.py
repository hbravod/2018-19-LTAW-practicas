# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib import admin
from .models import Negra
from .models import Misterio
from .models import Fantasia

# Register your models here.
admin.site.register(Negra)
admin.site.register(Misterio)
admin.site.register(Fantasia)