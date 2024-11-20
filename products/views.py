from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from .serializer import ProductSerializer
from .models import Product

# Create your views here.
class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()
    filter_backends = [DjangoFilterBackend] 
    filterset_fields = ["category"]
