from django.contrib import admin
from .models import Activity

@admin.register(Activity)
class Activity(admin.ModelAdmin):
  pass