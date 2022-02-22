from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from .models import *
from django.contrib.auth import authenticate, login, logout, get_user

from django.template.loader import get_template
def index(request):
    username = None
    if request.user != None:
        username = request.user.username
    return render(request, 'index.html', context={'username': username})
def signOn(request):
    if request.method == 'GET':
        if get_user(request).is_anonymous == True:
            return render(request, 'sign.html')
        else:
            return render(request, 'index.html', context={'message': 'You are already signed in'})
    elif request.method == 'POST':
        username = request.POST['uName']
        password = request.POST['pwd']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return render(request, 'index.html',
                          context={'message': ('Sign in successful. Welcome, ' + username + '!')})
        else:
            return render(request, 'index.html', context={'message': 'Error, unable to sign in'})
def createUser(request):
    if request.method == "POST":
        username = request.POST['uName']
        if (not User.objects.filter(password=request.POST['pwd']).exists()) and (not User.objects.filter(username=request.POST['uName']).exists()):
            nUser = User.objects.create_user(password=request.POST['pwd'], username=request.POST['uName'])
            nUser.save()
            return render(request, 'index.html', context={'message':('Account Created. Welcome, ' + username + '!'), 'username':username})
        else:
            return HttpResponse("<a>Error: Username or password already exists</a>")
    elif request.method == "GET":
        return render(request, 'create.html')



def logOut(request):
    if request.method == "POST":
        logout(request)
        return render(request, 'index.html')
def createSurvey(request):
    if request.method == "POST":
        placeholder = 1
        #nSurvey = Survey.objects.create(creator=request.POST['user'], title=request.POST['title'], desc=request.POST['desc'])
        #nSurvey.save()
    elif request.method == "GET":
        return render(request, 'createSurvey.html')
