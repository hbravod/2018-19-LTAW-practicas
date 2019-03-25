# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class Negra (models.Model):
    name = models.CharField(max_length=200)
    stock = models.IntegerField()
    price = models.FloatField()
    image = models.CharField(max_length=200, default = '')

    def __str__(self):
        return self.name

class Misterio (models.Model):
    name = models.CharField(max_length=200)
    stock = models.IntegerField()
    price = models.FloatField()
    image = models.CharField(max_length=200, default = '')

    def __str__(self):
        return self.name

class Fantasia (models.Model):
    name = models.CharField(max_length=200)
    stock = models.IntegerField()
    price = models.FloatField()
    image = models.CharField(max_length=200, default = '')

    def __str__(self):
        return self.name