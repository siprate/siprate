from rest_framework import serializers
from .models import Software, Faq


class SoftwaresSerializer(serializers.ModelSerializer):
    class Meta:
        model = Software
        fields = '__all__'


class FaqsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Faq
        fields = '__all__'
