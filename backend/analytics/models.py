from django.db import models
from django_pgviews.view import View

class MonthlyRegistrations(View):
    sql = """
        SELECT Date(DATE_TRUNC('month', date_joined)) AS month,
            COUNT(*) As total_registrations
        FROM core_user
        GROUP BY month
        ORDER BY month;
        """
    month = models.DateField(primary_key = True)
    total_registrations = models.IntegerField()

    materialized = True

    class Meta:
        db_table = "monthly_registrations"
        managed = False


class DailyRegistrations(View):
    sql = """
        SELECT Date(date_joined) AS day,
               COUNT(*) AS total
        FROM core_user
        GROUP BY day
        ORDER BY day
    """
    day = models.DateField(primary_key = True)
    total = models.IntegerField()

    materialized = True

    class Meta:
        db_table = "daily_registrations"
        managed = False


class EventOccupancy(View):
    sql = """
        SELECT e.id AS event_id,
               e.title AS event_title,
               e.capacity,
               COUNT(r.id) AS registered_count,
               ROUND(COUNT(r.id)::decimal / NULLIF(e.capacity,0) * 100, 2) AS occupancy_percent
        FROM core_event e
        LEFT JOIN core_registration r ON r.event_id = e.id AND r.registration_status = 'registered'
        GROUP BY e.id, e.title, e.capacity
        ORDER BY e.title
    """
    event_id = models.UUIDField(primary_key = True)
    event_title = models.CharField(max_length=255)
    capacity = models.IntegerField()
    registered_count = models.IntegerField()
    occupancy_percent = models.DecimalField(max_digits=5, decimal_places=2)

    materialized = True

    class Meta:
        db_table = "event_occupancy"
        managed = False
        


class SessionsAttendance(View):
    sql = """
        SELECT a.event_id,
               e.title AS event_title,
               COUNT(a.id) AS total_attendance,
               ROUND(SUM(CASE WHEN a.attendance_status = 'present' THEN 1 ELSE 0 END)::decimal / NULLIF(COUNT(a.id),0) * 100,2) AS attendance_rate
        FROM core_attendance a
        JOIN core_event e ON e.id = a.event_id
        GROUP BY a.event_id, e.title
        ORDER BY e.title
    """
    event_id = models.UUIDField(primary_key = True)
    event_title = models.CharField(max_length=255)
    total_attendance = models.IntegerField()
    attendance_rate = models.DecimalField(max_digits=5, decimal_places=2)

    materialized = True

    class Meta:
        db_table = "sessions_attendance"
        managed = False


class UserNotificationStats(View):
    sql = """
        SELECT user_id,
               COUNT(*) AS unread_count
        FROM core_notification
        WHERE is_read = FALSE
        GROUP BY user_id
    """
    user_id = models.UUIDField(primary_key = True)
    unread_count = models.IntegerField()
    materialized = True
    class Meta:
        db_table = "user_notification_stats"
        managed = False
        