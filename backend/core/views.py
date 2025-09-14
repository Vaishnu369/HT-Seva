from rest_framework import viewsets
from .models import *
from .serializers import *


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer


class RegistrationViewSet(viewsets.ModelViewSet):
    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializer


class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer

class AttendanceViewSet(viewsets.ModelViewSet):
    queryset = Attendance.objects.all()
    serializer_class = AttendanceSerializer

class DonationViewSet(viewsets.ModelViewSet):
    queryset = Donation.objects.all()
    serializer_class = DonationSerializer

class BookSaleViewSet(viewsets.ModelViewSet):
    queryset = BookSale.objects.all()
    serializer_class = BookSaleSerializer

class GoodieSaleViewSet(viewsets.ModelViewSet):
    queryset = GoodieSale.objects.all()
    serializer_class = GoodieSaleSerializer

class EngagementLogViewSet(viewsets.ModelViewSet):
    queryset = EngagementLog.objects.all()
    serializer_class = EngagementLogSerializer

class LoginActivityViewSet(viewsets.ModelViewSet):
    queryset = LoginActivity.objects.all()
    serializer_class = LoginActivitySerializer

class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all()
    serializer_class = NotificationSerializer