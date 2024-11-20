from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    category_display = serializers.SerializerMethodField()
    
    class Meta:
        model = Product
        fields = '__all__'
        
    def get_category_display(self, obj):
        return obj.get_category_display()