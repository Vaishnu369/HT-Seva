
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from analytics.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('core.urls')), 
    path("api/kpi/", KPISummaryView.as_view()),
    path('api/kpi/events/', EventStatsView.as_view()),
    path('api/kpi/users/', UserStatsView.as_view()),
    path('api/kpi/payments/', RevenueTrendsView.as_view()),
    path('api/kpi/registrations/', RegistrationStatsView.as_view()),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
