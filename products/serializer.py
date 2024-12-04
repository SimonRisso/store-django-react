from rest_framework import serializers
from .models import Product, Size

# Convertir los datos en JSON y convertir el JSON recibido en datos válidos para la BD.

class SizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Size
        fields = ['size']
        
class ProductSerializer(serializers.ModelSerializer):
    category_display = serializers.SerializerMethodField()
    sizes = SizeSerializer(many=True)
    
    class Meta:
        model = Product
        fields = '__all__'
        
    def get_category_display(self, obj):
        return obj.get_category_display()