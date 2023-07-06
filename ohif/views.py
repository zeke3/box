from django.shortcuts import render

def view_dicom_image(request):
    context = {}
    template_name = 'ohif_viewer.html'
    return render(request, template_name, context)