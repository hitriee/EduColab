# Generated by Django 3.2.12 on 2022-08-17 16:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0018_auto_20220816_0006'),
    ]

    operations = [
        migrations.AddField(
            model_name='pointlog',
            name='school',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='point_school', to='accounts.schoolinfo'),
        ),
    ]
