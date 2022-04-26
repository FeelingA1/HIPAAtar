from datetime import date
from backend.models import Conversation, Quiz, Question, Answer, Message
from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import *

# Register API
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        box = Inbox(owner=user)
        box.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })
# Login API
class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })
# User API
class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer
    def get_object(self):
        return self.request.user


"""
class Question_ResponseAPI(generics.GenericAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = Question_ResponseSerializer
"""
class ConversationAPI(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
        ]
    serializer_class = ConversationSerializer  
    def get_queryset(self):
        id = self.request.user.id
        convo = Conversation.objects.all().filter(sender =id) | Conversation.objects.all().filter(recipient =id)
        convo.order_by('start')
        return convo   
    def perform_create(self, serializer):
        id = self.request.user.id
        recip = self.request.data.get('recipient')
        if (Conversation.objects.all().filter(sender = id, recipient = recip) | Conversation.objects.all().filter(sender = recip, recipient = id)).count == 0:
            serializer.save(sender = id)

class InboxViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
        ]
    serializer_class = InboxSerializer
    def get_queryset(self):
        
        inbox = Inbox.objects.filter(owner=(self.request.user.id))
        
        return inbox


class ConversationViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
        ]
    serializer_class = ConversationSerializer
    def get_queryset(self):
        inbox = Inbox.objects.get(owner=self.request.user.id)
        convos = Conversation.objects.filter(inbox1=inbox.id)
        convos = convos | Conversation.objects.filter(inbox2=inbox.id)
        return convos
   
class MessageViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated,
        ]
    serializer_class = MessageSerializer

    def get(self):
        id = self.request.GET.get("convo")
        if id != None:
            userID = self.request.user.id
            convo = Conversation.objects.get(id=id)
            messages = None
            if convo != None:
                messages = Message.filter(conversation=convo.id)
                return messages
    def perform_create(self, serializer): 
        target =  self.request.data.get("target")
        target = User.objects.get(username=target).id
        id = self.request.user.id
        inbox = Inbox.objects.get(owner=id)
        targBox = Inbox.objects.get(owner=target)
        if targBox != None:
            if Conversation.objects.filter(inbox1=inbox.id, inbox2=targBox.id).count() != 0:
                convo = Conversation.objects.get(inbox1=inbox.id, inbox2=targBox.id)
                serializer.save(conversation=convo, author=self.request.user)
            elif  Conversation.objects.filter(inbox1=targBox.id, inbox2=inbox.id).count() != 0:
                convo = Conversation.objects.get(inbox1=targBox.id, inbox2=inbox.id)
                serializer.save(conversation=convo, author=self.request.user)
            else:
                convo = Conversation(inbox1=inbox, inbox2=targBox)
                convo.save()
                serializer.save(conversation=convo, author=self.request.user)


    def get_queryset(self):
        
        allMes = Message.objects.all()
        id = self.request.user.id
        inbox = Inbox.objects.get(owner=id)
        convos = Conversation.objects.filter(inbox1=inbox)
        convos = convos | Conversation.objects.filter(inbox2=inbox)
        messages = None
        
        for convo in convos:
            if messages == None:
                messages = Message.objects.filter(conversation=convo)
            else:
                messages = messages | Message.objects.filter(conversation=convo)
        
        return messages

class Quiz_ResponseViewset(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = Quiz_ReponseSerializer
    def get_queryset(self):
        #if self.request.GET.get("self") == None:
        return Quiz_Response.objects.all().filter(owner=self.request.user.id)
        #else:
         #   return self.request.user.quiz_responses()
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class Question_ResponseViewset(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = Question_ReponseSerializer
    def get_queryset(self):
        reID = self.request.GET.get("response")
        #if Quiz_Response.objects.get(id=reID).owner == self.request.user.id:
        return Question_Response.objects.filter(response=reID)
    def perform_create(self, serializer):
        answerID = self.request.data.get("answer")
        responseID = self.request.data.get("response")
        questionID = self.request.data.get("question")
        answer = Answer.objects.get(id=answerID)
        if answer != None and answer.question == questionID:
            serializer.save(owner=self.request.user)

#Quiz Viewset
class QuizViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
        ]
    serializer_class = QuizSerializer
    def get_queryset(self):
        if self.request.GET.get("self") == None:
            return Quiz.objects.all().filter(published=True)
        else:
           return Quiz.objects.all().filter(owner=self.request.user.id)
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
    
    

#Question Viewset
class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
        ]
    serializer_class = QuestionSerializer

    def get_queryset(self):
        if(Quiz.objects.filter(pk=self.request.GET.get("quiz")).count() == 1):
            if(Quiz.objects.filter(pk=self.request.GET.get("quiz"))[0].owner == self.request.user):
                return Question.objects.filter(quiz=self.request.GET.get("quiz"))

    def perform_create(self, serializer):
        quizID = self.request.data.get("quiz")
        ownerID = Quiz.objects.filter(pk=quizID)[0].owner.id
        if(ownerID == self.request.user.id):
            serializer.save()
            

#Answer Viewset
class AnswerViewSet(viewsets.ModelViewSet):
    queryset = Answer.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
        ]
    serializer_class = AnswerSerializer
    def get_queryset(self):
        questionID = self.request.GET.get("question")
        quizID = Question.objects.filter(pk=questionID)[0].quiz.id
        ownerID = Quiz.objects.filter(pk=quizID)[0].owner.id
        if(ownerID == self.request.user.id):
            return Answer.objects.filter(question=questionID)
    
    def perform_create(self, serializer):
        questionID = self.request.data.get("question")
        quizID = Question.objects.get(pk=questionID).quiz.id
        ownerID = Quiz.objects.get(pk=quizID).owner.id
        if(ownerID == self.request.user.id):
            serializer.save()

class BPGViewset(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
        ]
    serializer_class = BPGSerializer
    def get_queryset(self):
        if self.request.GET.get("self") == True:
            return BPG.objects.filter(owner=self.request.user.id)
        else:
            return BPG.objects.filter(published=True)
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class WeightGViewset(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
        ]
    serializer_class = WeightGSerializer
    def get_queryset(self):
        if self.request.GET.get("self") == "True":
            return WeightG.objects.filter(owner=self.request.user.id)
        else:
            return WeightG.objects.filter(published=True)
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)