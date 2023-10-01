from django.shortcuts import render,redirect
from django.http import JsonResponse
from django.core import serializers
import json
from .models import *
from .forms import *

def view_chedule(request, **kwarggs):

    if request.method == 'POST':
        form = EventForm(request.POST)   
        if form.is_valid():
            form.save()
            return redirect('blog:view_schedule')
        else:
            print(form.errors)
    else: 
        form = EventForm()       
    
    context ={
        'form': form
    }
    template_name = 'schedule.html'
    return render(request, template_name, context)

def get_events(request):
    start = request.GET.get('start')
    end = request.GET.get('end')    
    # print(f"START: {start}")
    # print(f"END: {end}")
    # events = Event.objects.filter(start_date__icontains=start, end_date__icontains=end)
    filtered_events = []
    events = Event.objects.all()
    print(f"EVENTS: {events}")
    data = serializers.serialize(
                        "json", list(events), use_natural_foreign_keys=True)
    data = json.loads(data) 
    for event in data:
        filtered_events.append(event['fields'])  
    # print(f"DATA: {filtered_events}") 
  
    return JsonResponse(filtered_events, safe=False)

def drag_event(request):
    start = request.GET.get('start')
    end = request.GET.get('end')    


    if request.method == 'POST':
        title = request.POST.get('title', None)
        event = Event.objects.filter(title=title).first()
        if event:
            event.start = request.POST.get('start', None)
            event.end = request.POST.get('start', None)
            event.save()
        # events = Event.objects.filter(start_date__icontains=start, end_date__icontains=end)
        filtered_events = []
        events = Event.objects.all()
        print(f"EVENTS: {events}")
        data = serializers.serialize(
                            "json", list(events), use_natural_foreign_keys=True)
        data = json.loads(data) 
        for event in data:
            filtered_events.append(event['fields'])  
        # print(f"DATA: {filtered_events}") 
    
        return JsonResponse(filtered_events, safe=False)