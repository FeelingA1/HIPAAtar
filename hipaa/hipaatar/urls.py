from django.urls import path

from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('sign_in', views.signOn, name="sign"),
    path('create', views.createUser, name="create"),
    path('logout', views.logOut, name='logout'),
]