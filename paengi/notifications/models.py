from django.db import models
from taggit.managers import TaggableManager
import datetime

def current_date():
  return datetime.date.today()

def current_time():
  return datetime.now()

NOTI_TO_ALL = 'NOTI1'
NOTI_TO_COMMUNICATOR = 'NOTI2'
NOTI_TO_EDU1 = 'NOTI3'
NOTI_TO_EDU2 = 'NOTI4'

NOTI_TARGETS = [
  (NOTI_TO_ALL, '전체'), 
  (NOTI_TO_COMMUNICATOR, '목자팀'),
  (NOTI_TO_EDU1,'교육1팀'),
  (NOTI_TO_EDU2,'교육2팀')
]

class Notification(models.Model):
  title = models.CharField(max_length=500)
  writer = models.CharField(max_length=300)
  created_date = models.DateTimeField(default=current_time)
  last_update = models.DateTimeField(default=current_time, null=True)
  contents = models.TextField()
  target = models.CharField(max_length=100, choices = NOTI_TARGETS, default=NOTI_TO_ALL)
  tags = TaggableManager()

  def __str__(self):
    return self.title