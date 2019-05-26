# Generated by Django 2.2.1 on 2019-05-19 08:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('activities', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activity',
            name='floor',
            field=models.CharField(choices=[('STORYFLOOR', '하늘마루'), ('MUSICFLOOR', '울림마루'), ('THEATERFLOOR', '연극마루'), ('COOKFLOOR', '만나마루'), ('ARTFLOOR', '그림마루'), ('PLAYFLOOR', '놀이마루')], default='STORYFLOOR', max_length=200),
        ),
    ]