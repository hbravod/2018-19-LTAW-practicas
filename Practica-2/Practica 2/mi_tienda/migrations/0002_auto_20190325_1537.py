# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2019-03-25 15:37
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mi_tienda', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='fantasia',
            name='image',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AddField(
            model_name='misterio',
            name='image',
            field=models.CharField(default='', max_length=200),
        ),
        migrations.AddField(
            model_name='negra',
            name='image',
            field=models.CharField(default='', max_length=200),
        ),
    ]
