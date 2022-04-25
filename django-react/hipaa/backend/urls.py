from rest_framework import routers
from .api import *
from django.urls import path, include
from .api import RegisterAPI
from knox import views as knox_views



router = routers.DefaultRouter()
router.register('api/question', QuestionViewSet, 'question')
router.register('api/quiz', QuizViewSet, 'quiz')
router.register('api/answer', AnswerViewSet, 'answer')
router.register('api/message', MessageViewSet, 'message')
router.register('api/inbox', InboxViewSet, 'inbox')
router.register('api/conversation', ConversationViewSet, 'inbox')
router.register('api/quiz_response', Quiz_ResponseViewset, 'quiz response')
router.register('api/question_response', Question_ResponseViewset, 'question response')
router.register('api/weight_goal', WeightGViewset, 'weight goal')
router.register('api/bp_goal', BPGViewset, 'bp goal')


urlpatterns = router.urls
urlpatterns.append(path('api/auth', include('knox.urls'))
)
urlpatterns.append(path('api/auth/register', RegisterAPI.as_view())
)
urlpatterns.append(path('api/auth/login', LoginAPI.as_view()))

urlpatterns.append(path('api/auth/user', UserAPI.as_view()))

urlpatterns.append(path('api/auth/logout', knox_views.LogoutView.as_view(), name='knox_logout'))




urlpatterns.append(path('api/auth/', UserAPI.as_view()))
