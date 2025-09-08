from django.db import connection
from rest_framework.response import Response
from rest_framework.views import APIView

def fetch_all(query):
    with connection.cursor() as cursor:
        cursor.execute(query)
        cols = [col[0] for col in cursor.description]
        rows = cursor.fetchall()
    return [dict(zip(cols, row)) for row in rows]


class KPISummaryView(APIView):
    def get(self, request):
        with connection.cursor() as cursor:
            cursor.execute("SELECT * FROM mv_kpi_summary;")
            row = cursor.fetchone()
            if row:
                columns = [col[0] for col in cursor.description]
                data = dict(zip(columns, row))
                return Response(data)
            return Response({})

class EventStatsView(APIView):
    def get(self, request):
        data = fetch_all("SELECT * FROM mv_event_stats;")
        return Response(data)


class UserStatsView(APIView):
    def get(self, request):
        data = fetch_all("SELECT * FROM mv_user_stats;")
        return Response(data)

class RevenueTrendsView(APIView):
    def get(self, request):
        data = fetch_all("SELECT * FROM mv_revenue_trends;")
        return Response(data)

class RegistrationStatsView(APIView):
    def get(self, request):
        data = fetch_all("SELECT * FROM mv_registration_stats;")
        return Response(data)