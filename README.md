# chat

## Solo Chat

### Introduction

The main idea behind Solo Chat is to create an application that allows the user
to experience having an SMS-like conversation with a rudimentary AI.

Unlike most similar software, Solo Chat allows the user to choose between a variety
of temperaments that determines the kind of responses they receive from the AI as the
chat develops.

### What

The Solo Chat application's overall design is a html form that takes two main inputs
from the user.

At the top of the form are features such as a radio button that determines the temperament
of the AI, and one that determines the colour of the chat's p elements.

The main body of the form is an input field and a div that contains the chat.
When the input field is filled and submitted a p element with the user's text is
created in the div container. It is then immediately followed by a p element containing
randomly generated text of the chosen AI temperament.

The intention is for it to look and feel like an ongoing SMS conversation, similar
to Skype.

### Project plan

After creating a group repo for the application, the tasks will be broken down into the following:

* HTML/css:
  * Title and introduction paragraph that explains what the app does.
  * Main Div Container
  * HTML form (radio buttons, input field, submit button)
  * CSS styling
* Javascript:
  * Create an object for each temperament type with its message options
as its properties.
  * Attach an Event listener to the submit button that when clicked calls the main function.
  * The main function should: create a p element within the div container with the text the user submitted. It should also
    create a p element with a randomly chosen message property of the temperament object determined by the radio button and the user input text.
* Stretch Goals:
  *  Extended form features such as the option to choose the colour of the text.
  * More temperament options, and a greater variety of response options.
