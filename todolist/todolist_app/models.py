# coding: utf-8
from django.db import models
import uuid
# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=32)
    mail = models.EmailField()
class Entry(models.Model):
    STATUS_DRAFT = "draft"
    STATUS_PUBLIC = "public"
    STATUS_SET = (
            (STATUS_DRAFT, "草稿"),
            (STATUS_PUBLIC, "公开"),
    )
    title = models.CharField(max_length=128)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    status = models.CharField(choices=STATUS_SET, default=STATUS_DRAFT, max_length=8)
    author = models.ForeignKey(User, related_name='entries')
class Person(models.Model):
    id = models.UUIDField(primary_key=True,default=uuid.uuid1,editable=False,null=False)
    name = models.CharField(null=False, max_length=50)
    age = models.IntegerField()
    time = models.DateTimeField(auto_now=True, null=False)


    
