from rest_framework import serializers
from .models import (
    MonthlyRegistrations,
    DailyRegistrations,
    EventOccupancy,
    SessionsAttendance,
    UserNotificationStats
)

class MonthlyRegistrationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = MonthlyRegistrations
        fields = "__all__"

class DailyRegistrationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = DailyRegistrations
        fields = "__all__"

class EventOccupancySerializer(serializers.ModelSerializer):
    class Meta:
        model = EventOccupancy
        fields = "__all__"

class SessionsAttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = SessionsAttendance
        fields = "__all__"

class UserNotificationStatsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserNotificationStats
        fields = "__all__"
