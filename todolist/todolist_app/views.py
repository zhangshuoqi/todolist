from django.shortcuts import render
from django.http import HttpResponse
import json
import uuid

# Create your views here.

#import django_filters
from rest_framework import viewsets, filters

from .models import User, Entry, Person
from .serializer import UserSerializer, EntrySerializer

def index(request):
    return render(request,'index.html',locals())

def write_server(request):
    data = json.loads(request.body)
    data['id'] = uuid.uuid4()
    Person.objects.create(**data)
    res = {
        'success': True
    }
    return HttpResponse(json.dumps(res),content_type = 'application/json')
    

    
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class EntryViewSet(viewsets.ModelViewSet):
    queryset = Entry.objects.all()
    serializer_class = EntrySerializer




