from django.contrib.auth.models import User
from rest_framework import serializers

class PersonSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only = True, min_length=8,max_length=16,style = {'input_type':'password'})
    class Meta:
        model = User
        fields = ['username','email','password']

    def crate(self, validate_data):
        # User.objects.create = save the password in a plain text
        # User.objects.create_user = automatically hash the password
        user = User.objects.create_user(validate_data['username']
                                        ,validate_data['email'],
                                        validate_data['password'])
        # user = User.objects.create_user(**validate_data)

        return user