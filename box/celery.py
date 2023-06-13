import os
from celery import Celery
from celery.schedules import crontab

# set the default Django settings module for the 'celery' program.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'box.settings')

app = Celery('box')

# Using a string here means the worker doesn't have to serialize
# the configuration object to child processes.
# - namespace='CELERY' means all celery-related configuration keys
#   should have a `CELERY_` prefix.

app.config_from_object('django.conf:settings', namespace='CELERY')

# Load task modules from all registered Django app configs.
app.autodiscover_tasks()

# For linux you can embed beat in worker process i.e celery -A rikolto_workspace worker -B -l INFO
# celery -A clask beat -l INFO
# celery -A clask worker -l INFO

# RabitMQ Commands
# systemctl enable rabbitmq-server
# systemctl status rabbitmq-server
