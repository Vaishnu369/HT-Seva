import uuid
from django.db import models
from django.contrib.auth.models import AbstractUser


# Simple custom user for demo (not extending AbstractUser yet)
class User(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=50, choices=[
        ('Khoji','Khoji'),
        ('Tej Sevak','Tej Sevak'),
        ('Admin','Admin')
    ])
    language = models.CharField(max_length=50, blank=True)
    country = models.CharField(max_length=100, blank=True)
    state = models.CharField(max_length=100, blank=True)
    city = models.CharField(max_length=100, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name} ({self.role})"


class Event(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    start_date = models.DateField()
    end_date = models.DateField()
    event_type = models.CharField(max_length=50, choices=[('online','Online'),('inperson','In-Person')])
    location = models.CharField(max_length=255, blank=True)  # Tejsthan / city
    capacity = models.IntegerField(default=0)  # Total seats
    price = models.DecimalField(max_digits=8, decimal_places=2, default=0)  # Paid event
    created_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='created_events')

    def __str__(self):
        return f"{self.title} ({self.event_type})"


class Registration(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    payment_status = models.CharField(
        max_length=20,
        choices=[('pending','Pending'),('completed','Completed')],
        default='pending'
    )

    def __str__(self):
        return f"{self.user.name} -> {self.event.title}"


class Payment(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    registration = models.OneToOneField(Registration, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=8, decimal_places=2)
    payment_date = models.DateTimeField(auto_now_add=True)
    payment_method = models.CharField(
        max_length=50,
        choices=[('UPI','UPI'),('Card','Card'),('Cash','Cash')]
    )
    status = models.CharField(
        max_length=20,
        choices=[('pending','Pending'),('completed','Completed')],
        default='pending'
    )

    def __str__(self):
        return f"Payment {self.id} - {self.registration.user.name} - {self.status}"
