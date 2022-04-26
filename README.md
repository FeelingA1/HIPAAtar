# HIPAAtar
Repo for our HIPAAtar Capstone Project

This project is a web application with a Django Back End and a React Front End.
It is made up of several components such as Messaging, Quizzes, Nav Bar, Avatar Generation, etc.
There are transition documents for each component to describe how they are structured as well as what still needs to be done.
This project uses Python on the backend along with HTML, JavaScript, TypeScript, and CSS on the front end.
In order to run the project locally, you must first install python3, django, djangorestframework and django-rest-knox.
In addition, run npm install from the web-app directory to install npm.
After everything is installed, run "python manage.py runserver" in the django-react/hipaa directory. 
This will give you an IP address to enter in your browser and debug with your current code.
If you get any weird errors while trying to run, delete the node_modules directory and run npm install from the web-app directory to reinstall npm.
App.js runs the home page for the application
The pages directory holds the code for all the other pages
The components directory holds the code for all the associated components.
