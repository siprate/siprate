# Generated by Django 5.0.7 on 2024-07-15 16:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0002_alter_software_nome'),
    ]

    operations = [
        migrations.AlterField(
            model_name='software',
            name='faq',
            field=models.JSONField(default=list),
        ),
    ]
