# Generated by Django 3.2.12 on 2022-07-29 04:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notice', '0002_auto_20220729_1341'),
    ]

    operations = [
        migrations.AddField(
            model_name='files',
            name='atch_file_name',
            field=models.CharField(default='', max_length=45),
        ),
    ]