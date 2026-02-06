from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
# router.register('user',views.AccountViewSet, basename = "Users")

urlpatterns = [
    path('',include(router.urls)),
    path('register/',views.AccountViewSet.as_view()),
]
