from django.shortcuts import render

# Create your views here.

#import django_filters
from rest_framework import viewsets, filters

from .models import User, Entry
from .serializer import UserSerializer, EntrySerializer

def index(request):
    return render(request,'index.html',locals())
    
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class EntryViewSet(viewsets.ModelViewSet):
    queryset = Entry.objects.all()
    serializer_class = EntrySerializer


