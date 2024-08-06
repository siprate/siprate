from django.contrib import admin
from django.urls import path, include

from . import views

urlpatterns = [
    path('softwares', views.Views.getSoftwares),
    path('softwares/<int:id>', views.Views.getSoftware),
    path('software/', views.Views.addSoftwares),
    path('software/<int:id>', views.Views.putAndDeleteSoftware),
]
