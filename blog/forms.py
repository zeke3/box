from django import forms
from bootstrap_datepicker_plus.widgets import DatePickerInput, TimePickerInput, DateTimePickerInput, MonthPickerInput, YearPickerInput
from .models import *

class EventForm(forms.ModelForm):
    
    class Meta:
        model = Event
        fields = '__all__'
        widgets = {
            "start": DateTimePickerInput(),
            "end": DateTimePickerInput(),
        }