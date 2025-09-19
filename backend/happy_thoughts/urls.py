
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from analytics.views import *   

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('core.urls')), 
    path("registrations/monthly/", MonthlyRegistrationsView.as_view(), name="monthly-registrations"),
    path("registrations/daily/", DailyRegistrationsView.as_view(), name="daily-registrations"),
    path("events/occupancy/", EventOccupancyView.as_view(), name="event-occupancy"),
    path("sessions/attendance/", SessionsAttendanceView.as_view(), name="sessions-attendance"),
    path("notifications/stats/", UserNotificationStatsView.as_view(), name="user-notification-stats"),

]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
