# Generated by Django 3.2.12 on 2022-08-05 02:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0007_pointlog_teacher'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userinfo',
            name='acc_point',
            field=models.IntegerField(default=0, null=True),
        ),
    ]
