from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.exceptions import PermissionDenied
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend
from .serializer import ProductSerializer
from .models import Product

# Create your views here.
class ProductViewSet(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

    def get_permissions(self):
        if self.action in ["list", "retrieve"]:  # Listar o ver detalles
            return [AllowAny()]  # Permitir acceso público
        elif self.action in ["create", "update", "partial_update", "destroy"]:
            if self.request.user.is_superuser:
                return [IsAuthenticated()]  # Solo superusuarios autenticados
        else:
            raise PermissionDenied(
                "Acceso restringido solo para superusuarios.")
        return super().get_permissions()

    # Filtros
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["category"]
