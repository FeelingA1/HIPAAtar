# Generated by Django 4.0.2 on 2022-02-21 02:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('hipaatar', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='MultipleChoiceAnswer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text_value', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='Survey',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('published', models.BooleanField()),
                ('title', models.CharField(max_length=30)),
                ('desc', models.TextField()),
            ],
        ),
        migrations.DeleteModel(
            name='User',
        ),
        migrations.CreateModel(
            name='BoolQuestion',
            fields=[
                ('question_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='hipaatar.question')),
                ('question_text', models.TextField()),
                ('response_value', models.BooleanField()),
            ],
            bases=('hipaatar.question',),
        ),
        migrations.CreateModel(
            name='MultipleChoiceQuestion',
            fields=[
                ('question_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='hipaatar.question')),
                ('question_text', models.TextField()),
            ],
            bases=('hipaatar.question',),
        ),
    ]
