from django.conf.urls import include, url
from django.contrib import admin
from todolist_app.urls import router as todolist_router

urlpatterns = [
    # Examples:
    # url(r'^$', 'todolist.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^api/', include(todolist_router.urls)),
    
]
