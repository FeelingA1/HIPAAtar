# Generated by Django 4.0.3 on 2022-04-20 17:52

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('backend', '0003_remove_healthgoal_goal_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='healthgoal',
            name='owner',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='Goals', to=settings.AUTH_USER_MODEL),
        ),
    ]
