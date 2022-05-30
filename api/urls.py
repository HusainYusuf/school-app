from django.urls import paths
from . import views

urlpattern = [
       path('', views.getRoutes, name = "routes"),
]