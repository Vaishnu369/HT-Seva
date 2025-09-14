
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from analytics.views import *   

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('core.urls')), 
    path("api/admin/khojis/summary/", KPISummaryView.as_view()),
    path("api/admin/registrations/new/", RegistrationStatsView.as_view()),
    path("api/admin/sessions/", EventStatsView.as_view()),
    path("api/admin/revenue/", RevenueTrendsView.as_view()),    


    

]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
