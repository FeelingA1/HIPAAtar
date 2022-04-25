from rest_framework import serializers
from backend.models import *
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = '__all__'

class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'
    
class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = '__all__'
class BPGSerializer(serializers.ModelSerializer):
    class Meta:
        model = BPG
        fields = '__all__'

class WeightGSerializer(serializers.ModelSerializer):
    class Meta:
        model = WeightG
        fields = '__all__'

class Quiz_ReponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz_Response
        fields = '__all__'

class Question_ReponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question_Response
        fields = '__all__'

class InboxSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inbox
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = ('__all__')

class ConversationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conversation
        fields = ('__all__')
#Register Serializer
class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], validated_data['email'], validated_data['password'])
        return user
#Login Serializer
class LoginSerializer(serializers.ModelSerializer):
    username = serializers.CharField()
    password = serializers.CharField()
    class Meta:
        model = User
        fields = ('username', 'password')
    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Failed to Authenticate. Username/password does not match existing user.")