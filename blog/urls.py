from django.urls import path
from . import views

app_name = 'blog'

urlpatterns = [
    path('view/schedule', views.view_chedule, name='view_schedule'),
    path('get_events/', views.get_events, name='get_events'),
    path('drag_event/', views.drag_event, name='drag_event'),
]