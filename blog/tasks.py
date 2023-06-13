from celery import shared_task
from .models import *


@shared_task
def retrieve_post_task(*args, **kwargs):
	print("NADAAAA")
	post = Post.objects.first()
	backup_post = BackupPost.objects.create(title=post.title, description=post.description)
	print("Created Successfully")
