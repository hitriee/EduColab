# Generated by Django 3.2.12 on 2022-08-02 07:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('homework', '0005_auto_20220802_1531'),
    ]

    operations = [
        migrations.AddField(
            model_name='studenthomework',
            name='check_flag',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='teacherhomework',
            name='check_flag',
            field=models.BooleanField(default=False),
        ),
    ]
