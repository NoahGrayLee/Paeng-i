from django.shortcuts import render
from notifications.models import Notification
from notifications.serializers import NotificationSerializer
from rest_framework import generics

class NotificationListCreate(generics.ListCreateAPIView):
  queryset = Notification.objects.all()
  serializer_class = NotificationSerializer