from django.shortcuts import render
from .serializers import PersonSerializer
from rest_framework import generics, mixins, viewsets
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny


# Create your views here.

class AccountViewSet(generics.CreateAPIView):
    queryset  = User.objects.all()
    serializer_class = PersonSerializer
    permission_classes = [AllowAny]
    
