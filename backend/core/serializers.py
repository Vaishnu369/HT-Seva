from rest_framework import serializers
from .models import *

class UserSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            "id", "username", "full_name", "email",
            "contact_no", "role", "language",
            "country", "state", "city", "tejasthan"
        ]

    def get_full_name(self, obj):
        return f"{obj.first_name} {obj.last_name}".strip() or obj.username


class EventSerializer(serializers.ModelSerializer):
    created_by_name = serializers.CharField(source="created_by.username", read_only=True)

    class Meta:
        model = Event
        fields = [
            "id", "title", "description", "start_date", "end_date",
            "organization", "event_type", "location", "capacity",
            "price", "created_by_name"
        ]


class RegistrationSerializer(serializers.ModelSerializer):
    user_name = serializers.SlugRelatedField(
        slug_field='username',  # use username instead of UUID
        queryset=User.objects.all()
    )
    event_title = serializers.SlugRelatedField(
        slug_field='title',  # use event title instead of UUID
        queryset=Event.objects.all()
    )

    class Meta:
        model = Registration
        fields = ['id', 'user_name', 'event_title', 'registration_status', 'created_at']
        read_only_fields = ['id', 'created_at']

    def create(self, validated_data):
        # Map friendly names back to foreign keys
        user = validated_data.pop('user_name')
        event = validated_data.pop('event_title')
        return Registration.objects.create(user=user, event=event, **validated_data)

class PaymentSerializer(serializers.ModelSerializer):
    user_name = serializers.SerializerMethodField()
    event_title = serializers.CharField(source="registration.event.title", read_only=True)

    class Meta:
        model = Payment
        fields = [
            "id", "user_name", "event_title", "amount",
            "payment_method", "payment_status", "transaction_id",
            "payment_date"
        ]

    def get_user_name(self, obj):
        return f"{obj.user.first_name} {obj.user.last_name}"


class AttendanceSerializer(serializers.ModelSerializer):
    user_name = serializers.SerializerMethodField()
    event_title = serializers.CharField(source="event.title", read_only=True)

    class Meta:
        model = Attendance
        fields = [
            "id", "event_title", "user_name",
            "attendance_status", "attendance_date"
        ]

    def get_user_name(self, obj):
        return f"{obj.user.first_name} {obj.user.last_name}"


class DonationSerializer(serializers.ModelSerializer):
    user_name = serializers.SerializerMethodField()

    class Meta:
        model = Donation
        fields = [
            "id", "user_name", "amount", "purpose",
            "payment_method", "transaction_id", "donation_date"
        ]

    def get_user_name(self, obj):
        return f"{obj.user.first_name} {obj.user.last_name}"


class BookSaleSerializer(serializers.ModelSerializer):
    user_name = serializers.SerializerMethodField()

    class Meta:
        model = BookSale
        fields = [
            "id", "user_name", "book_title",
            "quantity", "price", "payment_method",
            "transaction_id", "purchase_date"
        ]

    def get_user_name(self, obj):
        return f"{obj.user.first_name} {obj.user.last_name}"


class GoodieSaleSerializer(serializers.ModelSerializer):
    user_name = serializers.SerializerMethodField()

    class Meta:
        model = GoodieSale
        fields = [
            "id", "user_name", "itemname",
            "quantity", "price", "payment_method",
            "transaction_id", "purchase_date"
        ]

    def get_user_name(self, obj):
        return f"{obj.user.first_name} {obj.user.last_name}"


class EngagementLogSerializer(serializers.ModelSerializer):
    user_name = serializers.SerializerMethodField()
    event_title = serializers.CharField(source="event.title", read_only=True)

    class Meta:
        model = EngagementLog
        fields = [
            "id", "user_name", "event_title",
            "engagement_type", "engagement_date", "metadata"
        ]

    def get_user_name(self, obj):
        return f"{obj.user.first_name} {obj.user.last_name}"


class LoginActivitySerializer(serializers.ModelSerializer):
    user_name = serializers.SerializerMethodField()

    class Meta:
        model = LoginActivity
        fields = ["id", "user_name", "login_time"]

    def get_user_name(self, obj):
        return f"{obj.user.first_name} {obj.user.last_name}"


class NotificationSerializer(serializers.ModelSerializer):
    user_name = serializers.CharField(source="user.username", read_only=True)

    class Meta:
        model = Notification
        fields = ["id", "user_name", "message", "is_read", "created_at"]

