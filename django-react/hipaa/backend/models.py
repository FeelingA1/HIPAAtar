from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Quiz(models.Model):
    title = models.CharField(max_length=100)
    published = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, related_name="quizzes", on_delete=models.CASCADE, null=True)
    
class Question(models.Model):
    quiz = models.ForeignKey(Quiz, related_name="questions", on_delete=models.CASCADE, null=True)
    text = models.TextField()
    CHOICES  = (
        ('True/False', 'True/False'),
        ('Multiple Choice', 'Multiple Choice'),
    )
    type = models.CharField(max_length=20, choices = CHOICES)
    
class Answer(models.Model):
    question = models.ForeignKey(Question, related_name="answers", on_delete=models.CASCADE, null=True)
    text = models.TextField()

class Quiz_Response(models.Model):
    quiz = models.ForeignKey(Quiz, related_name="quiz_responses", on_delete=models.CASCADE, null=True)
    owner = models.ForeignKey(User, related_name="quiz_responses", on_delete=models.CASCADE, null=True)

class Question_Response(models.Model):
    response = models.ForeignKey(Quiz_Response, related_name="answer_responses", on_delete=models.CASCADE, null=True)
    answer = models.ForeignKey(Answer, related_name="answer_responses", on_delete=models.CASCADE, null=True)
    question = models.ForeignKey(Answer, related_name="questions_answers", on_delete=models.CASCADE, null=True)

class HealthGoal(models.Model):
    date_started = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(User, related_name="Goals", on_delete=models.CASCADE, null=True)
    published = models.BooleanField()

class HealthData(models.Model):
    user = models.ForeignKey(User, related_name="data", on_delete=models.CASCADE, null=True)
    birthday = models.DateTimeField()
    weight = models.IntegerField()
    height = models.IntegerField()

class BPG(HealthGoal):
    start_systolic = models.IntegerField()
    start_diastolic = models.IntegerField()
    goal_systolic = models.IntegerField()
    goal_diastolic = models.IntegerField()
    current_systolic = models.IntegerField()
    current_distolic = models.IntegerField()


class WeightG(HealthGoal):
    start_weight = models.IntegerField()
    goal_weight = models.IntegerField()
    current_weight = models.IntegerField()

class Inbox(models.Model):
    owner = models.ForeignKey(User, related_name="inbox", on_delete=models.CASCADE)

class Conversation(models.Model):
    inbox1 = models.ForeignKey(Inbox, related_name="conversations", on_delete=models.CASCADE)
    inbox2 = models.ForeignKey(Inbox, related_name="conversation", on_delete=models.CASCADE)
    start = models.DateTimeField(auto_now_add=True)

    
class Message(models.Model):
    conversation = models.ForeignKey(Conversation, related_name="messages", on_delete=models.CASCADE, null=True)
    date = models.DateTimeField(auto_now_add=True)
    body = models.TextField()
    author = models.ForeignKey(User, related_name="message", on_delete=models.CASCADE, null=True)

#Not yet implemented in API
class Access_Log(models.Model):
    #User who is accessing an object. May be null, indicating the user was not authenticated.
    user = models.ForeignKey(User, related_name="answer_responses", on_delete=models.PROTECT, null=True)
    #Access Date
    date = models.DateTimeField(auto_now_add=True)
    
#Not Yet Implemented in API 
class Access_Instance(models.Model):
    #Date of access instance
    date = models.DateTimeField(auto_now_add=True)
    #ip_address of user accessing an resource. Used to identify in case of non authenticated client.
    ip_address = models.TextField()
    ACTION = (
        ('CREATE', 'CREATE'),
        ('READ', 'READ'),
        ('UPDATE', 'UPDATE'),
        ('DESTROY', 'DESTROY'),
    )
    RESOURCE_TYPE = (
        ('USER', 'USER'),
        ('QUIZ', 'QUIZ'),
        ('QUESTION', 'QUESTION'),
        ('ANSWER', 'ANSWER'),
        ('QUIZ_RESPONSE', 'QUIZ_RESPONSE'),
        ('QUESTION_RESPONSE', 'QUESTION_RESPONSE'),
    )