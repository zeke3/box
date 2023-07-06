from django.urls import path
from . import views

app_name = 'ohif'

urlpatterns = [
    path('view/dicom/', views.view_dicom_image, name='view_dicom_image' ),
]