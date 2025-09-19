from ssl import Purpose
import uuid
from django.db import models
from django.contrib.auth.models import AbstractUser



class User(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    contact_no = models.CharField(max_length=15, blank=True, null=True)
    role = models.CharField(
        max_length=50,
        choices=[
            ('Khoji', 'Khoji'),
            ('Tej Sevak', 'Tej Sevak'),
            ('Admin', 'Admin')
        ],
        default='Khoji'
    )
    language = models.CharField(max_length=50, blank=True)
    country = models.CharField(max_length=100, blank=True)
    state = models.CharField(max_length=100, blank=True)
    city = models.CharField(max_length=100, blank=True)
    tejasthan = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}".strip() or self.username


class Event(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    start_date = models.DateField()
    end_date = models.DateField()
    organization = models.CharField(max_length=100, choices=[('WOW','WOW'),('TGGF','TGGF')], default='WOW')
    event_type = models.CharField(max_length=50, choices=[('online','Online'),('inperson','In-Person')])
    location = models.CharField(max_length=255, blank=True)  
    capacity = models.IntegerField(default=0)  
    price = models.DecimalField(max_digits=8, decimal_places=2, default=0)  
    created_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='created_events')

    def __str__(self):
        return f"{self.title} ({self.event_type})"


class Registration(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    registration_status = models.CharField(
        max_length=20,
        choices=[('pending','Pending'),('registered','Registered'),('cancelled','Cancelled'), ('waitlisted','Waitlisted')],
        default='pending'
    )

    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name} -> {self.event.title}"


class Payment(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    registration = models.OneToOneField(Registration, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=8, decimal_places=2)
    payment_date = models.DateTimeField(auto_now_add=True)
    payment_method = models.CharField(
        max_length=50,
        choices=[('UPI','UPI'),('Card','Card'),('Cash','Cash')]
    )
    payment_status = models.CharField(
        max_length=20,
        choices=[('pending','Pending'),('completed','Completed')],
        default='pending'
    )
    transaction_id = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f"Payment {self.id} - {self.user.first_name} {self.user.last_name} - {self.payment_status}"


class Attendance(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    attendance_date = models.DateTimeField(auto_now_add=True)
    attendance_status = models.CharField(
        max_length=20,
        choices=[('present','Present'),('absent','Absent')],
        default='present'
    )

    def __str__(self):
        return f"Attendance {self.id} - {self.event.title} - {self.user.first_name} {self.user.last_name}"

class Donation(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=8, decimal_places=2)
    donation_date = models.DateTimeField(auto_now_add=True)
    payment_method = models.CharField(
        max_length=50,
        choices=[('UPI','UPI'),('Card','Card'),('Cash','Cash')]
    )
    purpose = models.CharField(max_length=500)
    transaction_id = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f"Donation {self.id} - {self.user.first_name} {self.user.last_name} - {self.payment_method}"

class BookSale(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    book_title = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    quantity = models.IntegerField(default=1)
    payment_method = models.CharField(
        max_length=50,
        choices=[('UPI','UPI'),('Card','Card'),('Cash','Cash')]
    )
    purchase_date = models.DateTimeField(auto_now_add=True)
    transaction_id = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f"Book Sale {self.id} - {self.user.first_name} {self.user.last_name} - {self.book_title}"


class GoodieSale(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE) 
    itemname = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=8, decimal_places=2)
    quantity = models.IntegerField(default=1)
    payment_method = models.CharField(
        max_length=50,
        choices=[('UPI','UPI'),('Card','Card'),('Cash','Cash')]
    )
    purchase_date = models.DateTimeField(auto_now_add=True)
    transaction_id = models.CharField(max_length=255, blank=True)

    def __str__(self):
        return f"Goodie Sale {self.id} - {self.user.first_name} {self.user.last_name} - {self.itemname}"        

class EngagementLog(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.SET_NULL, null=True, blank=True)
    engagement_type = models.CharField(
        max_length=50,
        choices=[
            ('registration', 'Registration'),
            ('attendance', 'Attendance'),
            ('donation', 'Donation'),
            ('book_sale', 'Book Sale'),
            ('goodie_sale', 'Goodie Sale'),
            ('residential_booking', 'Residential Booking'),
        ]
    )
    engagement_date = models.DateTimeField(auto_now_add=True)
    metadata = models.JSONField(default=dict, blank=True)

    def __str__(self):
        return f"{self.user.first_name} {self.user.last_name} - {self.engagement_type} - {self.engagement_date}"


class LoginActivity(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    login_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.email} - {self.login_time}"

class Notification(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="notifications")
    message = models.TextField()
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return f"{self.user.username} - {self.message[:30]}"