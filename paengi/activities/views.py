from django.shortcuts import render
from activities.models import Activity
from activities.serializers import ActivitySerializer
from rest_framework import generics

class ActivityListCreate(generics.ListCreateAPIView):
  queryset = Activity.objects.all()
  serializer_class = ActivitySerializer