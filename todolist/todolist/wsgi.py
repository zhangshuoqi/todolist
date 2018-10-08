"""
WSGI config for todolist project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.8/howto/deployment/wsgi/
"""

import os
import sys


from django.core.wsgi import get_wsgi_application

sys.path.append('/django/todolist')

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "todolist.settings")

application = get_wsgi_application()



"""
path = '/Django/todolist'

if path not in sys.path:

    sys.path.insert(0, '/Django/todolist')

os.environ['DJANGO_SETTINGS_MODULE'] = 'todolist_app.settings'

#import django.core.handlers.wsgi #old version use
#application = django.core.handlers.wsgi.WSGIHandler()

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
"""


"""

from os.path import join,dirname,abspath

PROJECT_DIR = dirname(dirname(abspath(__file__)))
sys.path.insert(0,PROJECT_DIR)

os.environ["DJANGO_SETTINGS_MODULE"] = "todolist_app.settings"

from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
"""
