from django.db import models
from taggit.managers import TaggableManager
from . import enums
import datetime

def current_year():
  return datetime.date.today().year

class Activity(models.Model):
  # 마당 (ex. 열여섯번 째 마당, 열입곱번 째 마당...)
  chapter = models.IntegerField(verbose_name='마당') 

  # 제목 
  title = models.CharField(verbose_name='활동 제목', max_length=300) 

  # 연도
  year = models.CharField(max_length=4, default=current_year, help_text='활동이 진행된 연도를 입력해주세요. (ex. 2019)')

  # 버전 (업데이트 되는 경우를 대비해서)
  version = models.CharField(verbose_name='Version', max_length=200, choices=enums.VERSION_CHOICES, default=enums.VERSION1)

  # ---------- 마루 (ex. 그림마루, 울림마루...)
  # ! Floor 모델이나 앱을 따로 만들어야 하는지 고민이 됨
  # 다른 사람이 이어받을 경우를 대비하여 약자는 최대한 사용하지 않으려고 함 
  floor = models.CharField(verbose_name='마루', max_length=200, choices=enums.FLOOR_CHOICES, default=enums.STORYFLOOR)

  # ---------- 성경구절 본문 / 참고 본문 ----------
  # 성경 (ex. 창세기, 출애굽기...)--> enum 으로 수정할 것
  bible_name = models.CharField(verbose_name='성경', max_length=200, choices=enums.BIBLE_CHOICES, default=enums.GENESIS) 
  main_verses = models.TextField(verbose_name='중심 본문')
  main_verse_start = models.IntegerField(verbose_name='중심 본문 시작절', help_text='중심 본문은 몇 장 몇 절에서 시작하나요? 예시: 1:1, 10:24')
  main_verse_end = models.IntegerField(verbose_name='중심 본문 끝절', help_text='중심 본문은 몇 장 몇 절 까지 인가요? 예시: 1:1, 10:24')
  ref_verse_start = models.IntegerField(verbose_name='참고 본문 시작절', help_text='참고 본문은 몇 장 몇 절에서 시작하나요? 예시: 1:1, 10:24')
  ref_verse_end = models.IntegerField(verbose_name='참고 본문 시작절', help_text='참고 본문은 몇 장 몇 절에서 시작하나요? 예시: 1:1, 10:24')

  # ---------- 검색키워드 태그 ----------
  tags = TaggableManager()
  # ---------- Writer Info ----------
  team = models.CharField(verbose_name='담당팀', max_length=200, choices=enums.TEAM_CHOICES, default=enums.EDUCATION1)
  pastor = models.CharField(verbose_name='담당 교역자', max_length=200, choices=enums.PASTOR_CHOICES, default='-')
  teacher = models.CharField(verbose_name='담당 교사', max_length=200, default='-')
  # 한 줄 초점 
  subject_summary = models.CharField(verbose_name='한 줄 초점', max_length=500)
  # 활동 요약
  activity_summary = models.CharField(verbose_name='활동 요약', max_length=500)

  # 연령별 고려사항 
  note_by_age = models.TextField(verbose_name='연령별 고려사항')
  # 준비물
  activity_materials = models.TextField(verbose_name='준비물')
  # 본문 해설 
  bible_study = models.TextField(verbose_name='본문 해설')
  # 맞이하기 
  activity_intro = models.TextField(verbose_name='맞이하기')
  # 활동하기 
  activity_body = models.TextField(verbose_name='활동하기')
  # 보내기 
  activity_outro = models.TextField(verbose_name='보내기')
  # 성찰하기 
  reflection = models.TextField(verbose_name='성찰하기')
