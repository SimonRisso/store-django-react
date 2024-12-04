from django.db import models
from django.core.exceptions import ValidationError

CATEGORY_CHOICES = [
    ('t-shirt', 'Remera'),
    ('accesory', 'Accesorio')
]

SIZE_CHOICES = [
    ('small', 'S'),
    ('medium', 'M'),
    ('large', 'L'),
    ('extra_large', 'XL')
]

# Create your models here.
class Size(models.Model):
    size = models.CharField(max_length=20, choices=SIZE_CHOICES, unique=True) 
    available = models.BooleanField(default=True)
    
    def __str__(self):
        return self.size

class Product(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(blank=True)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField(default=0)
    image = models.ImageField(upload_to='product_images/', blank=True, null=True) 
    sizes = models.ManyToManyField(Size, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def clean(self):
        # Si el producto no tiene ID aún (no ha sido guardado)
        if not self.pk:
            return  # Salir sin validar

        # Validación para categorías y talles
        if self.category == "t-shirt" and not self.sizes.exists():
            raise ValidationError("Debes seleccionar al menos un talle para productos de categoría 't-shirt'.")
        if self.category != "t-shirt" and self.sizes.exists():
            raise ValidationError("No puedes asignar talles a productos que no sean de la categoría 't-shirt'.")
        
    def __str__(self):
        return f"{self.name} - {self.category}"
    
        
