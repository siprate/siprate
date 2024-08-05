from django.contrib import admin
from django.urls import path, include

from . import views

urlpatterns = [
    path('softwares', views.getSoftwares),
    path('softwares/<int:id>', views.getSoftware),
    path('software/', views.addSoftwares),
    path('software/<int:id>', views.putAndDeleteSoftware),
]
