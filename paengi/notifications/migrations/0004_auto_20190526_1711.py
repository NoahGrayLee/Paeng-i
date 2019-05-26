# Generated by Django 2.2.1 on 2019-05-26 08:11

from django.db import migrations, models
import notifications.models


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0003_auto_20190526_1709'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notification',
            name='created_date',
            field=models.DateTimeField(default=notifications.models.current_time),
        ),
        migrations.AlterField(
            model_name='notification',
            name='last_update',
            field=models.DateTimeField(default=notifications.models.current_time, null=True),
        ),
    ]