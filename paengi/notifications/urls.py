from django.urls import path
from . import views

urlpatterns = [
  path('api/notification', views.NotificationListCreate.as_view())
]