# -*- coding: utf-8 -*-
# Generated by Django 1.11.11 on 2019-03-04 11:03
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('stock', models.IntegerField()),
                ('price', models.FloatField()),
            ],
        ),
    ]
