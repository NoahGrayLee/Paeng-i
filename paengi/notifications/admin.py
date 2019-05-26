from django.contrib import admin
from .models import Notification 

@admin.register(Notification)
class Notification(admin.ModelAdmin):
  list_display = ('title', 'writer', 'target')
  list_filter = ['target', 'writer']
