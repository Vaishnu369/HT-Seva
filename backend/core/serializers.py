from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = "__all__"

class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Registration
        fields = "__all__"

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = "__all__"

class AttendanceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attendance
        fields = "__all__"

class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        fields = "__all__"

class BookSaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookSale
        fields = "__all__"

class GoodieSaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = GoodieSale
        fields = "__all__"


class EngagementLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = EngagementLog
        fields = "__all__"


class LoginActivitySerializer(serializers.ModelSerializer):
    class Meta:
        model = LoginActivity
        fields = "__all__"
    


class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = "__all__"

