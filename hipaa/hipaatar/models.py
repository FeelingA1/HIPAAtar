from django.db import models
from django.contrib.auth.models import User

#Access Log is used to monitor each time sensitive data has been created, updated, destroyed, or viewed
class AccessLog(models.Model):
    dateCreated = models.DateTimeField

#Represents a single instance where data was accessed
class AccessInstance(models.Model):
    user = User
    log = AccessLog
    dateAccessed = models.DateTimeField()

#Model for surveys which may be created by users with the proper permissions
class Survey(models.Model):
    creator = User
    response_user = User
    published = models.BooleanField()
    title = models.CharField(max_length=30)
    desc = models.TextField()

#Model for questions, each of which belong to a survey
class Question(models.Model):
    answerer = User
    creator = User
    parent_survey = Survey

#Subclass for Question, indicating the question is T/F
class BoolQuestion(Question):
    question_text = models.TextField()
    response_value = models.BooleanField()

#Subclass for Question, indicating the question is multiple choice
class MultipleChoiceQuestion(Question):
    question_text = models.TextField()

#Belongs to a multiple choice question
class MultipleChoiceAnswer(models.Model):
    text_value = models.TextField()
    question = MultipleChoiceQuestion

#A TipGroup is used to organize tips by subject
class TipGroup(models.Model):
    title = models.CharField(max_length=50)
    descrip = models.TextField()

#A Tip contains text data representing the tip and belongs to a TipGroup of related tips
class Tip(models.Model):
    group = TipGroup
    text = models.TextField()

#Goals represent a users goals. Private by default, but may be shared if a user wants to.
class Goal(models.Model):
    user = User
    hidden = models.BooleanField()
    goalMet = models.BooleanField()

#Subclass of goal for goals related to weight loss
class WeightGoal(Goal):
    startWeight = models.IntegerField()
    goalWeight = models.IntegerField()

#Sublass of goals related to Bloop Pressure
class BPGoal(Goal):
    startSysBP = models.IntegerField()
    goalSysBP = models.IntegerField()
    startDiaBP = models.IntegerField()
    goalDiaBP = models.IntegerField()









