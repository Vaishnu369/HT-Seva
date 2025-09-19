from rest_framework import generics
from .models import (
    MonthlyRegistrations,
    DailyRegistrations,
    EventOccupancy,
    SessionsAttendance,
    UserNotificationStats
)
from .serializers import (
    MonthlyRegistrationsSerializer,
    DailyRegistrationsSerializer,
    EventOccupancySerializer,
    SessionsAttendanceSerializer,
    UserNotificationStatsSerializer
)

# List APIs
class MonthlyRegistrationsView(generics.ListAPIView):
    queryset = MonthlyRegistrations.objects.all()
    serializer_class = MonthlyRegistrationsSerializer


class DailyRegistrationsView(generics.ListAPIView):
    queryset = DailyRegistrations.objects.all()
    serializer_class = DailyRegistrationsSerializer


class EventOccupancyView(generics.ListAPIView):
    queryset = EventOccupancy.objects.all()
    serializer_class = EventOccupancySerializer


class SessionsAttendanceView(generics.ListAPIView):
    queryset = SessionsAttendance.objects.all()
    serializer_class = SessionsAttendanceSerializer


class UserNotificationStatsView(generics.ListAPIView):
    queryset = UserNotificationStats.objects.all()
    serializer_class = UserNotificationStatsSerializer
