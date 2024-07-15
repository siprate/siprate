from rest_framework import serializers
from .models import Software


class SoftwaresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Software
        fields = '__all__'
