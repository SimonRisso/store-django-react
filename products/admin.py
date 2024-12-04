from django.contrib import admin
from .models import Product, Size
from django.core.exceptions import ValidationError

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'price', 'stock', 'created_at')  # Campos visibles en la lista
    list_filter = ('category', 'created_at')  # Filtros laterales
    search_fields = ('name', 'description')  # Campos para la barra de búsqueda
    ordering = ('-created_at',)  # Orden predeterminado (más recientes primero)
    filter_horizontal = ('sizes',)
    
    # def save_model(self, request, obj, form, change):
    #     # Validación al guardar
    #     if obj.category == "t-shirt" and not obj.sizes.exists():
    #         raise ValidationError("Debes seleccionar al menos un talle para productos de categoría 't-shirt'.")
    #     if obj.category != "t-shirt" and obj.sizes.exists():
    #         raise ValidationError("No puedes asignar talles a productos que no sean de la categoría 't-shirt'.")

    #     super().save_model(request, obj, form, change)

# Registrar modelos
admin.site.register(Product, ProductAdmin)
admin.site.register(Size)  # Registrar el modelo Size para administrarlo también
