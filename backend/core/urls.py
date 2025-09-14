from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'events', EventViewSet)
router.register(r'registrations', RegistrationViewSet)
router.register(r'payments', PaymentViewSet)
router.register(r'attendance', AttendanceViewSet)
router.register(r'donation', DonationViewSet)
router.register(r'book_sale', BookSaleViewSet)
router.register(r'goodie_sale', GoodieSaleViewSet)
router.register(r'engagement_log', EngagementLogViewSet)
router.register(r'login_activity', LoginActivityViewSet)
router.register(r'notifications', NotificationViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
