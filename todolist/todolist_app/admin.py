from django.contrib import admin

# Register your models here.

from .models import User, Entry, Person

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    pass

@admin.register(Entry)
class Entry(admin.ModelAdmin):
    pass

class PersonAdmin(admin.ModelAdmin):
    list_display = ['id','name','age','time']

admin.site.register(Person,PersonAdmin)
