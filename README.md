# Homework03-PasswordGenerator
Repo for Homework 03 - Javascript Password Generator

The application begins with click of "generate password" button.
User is prompted for choice of passowrd length (between 8 and 164 characters long).
User confirms whether they want the following characters included in the generated passwords:
    *lowercase letters
    *uppercase letters
    *special characters
    *numeric characters

As each choice is made, the value (true/false) is passed through to the generate password function. The password starts as an empty variable and each selected character string is added to the pool of available characters to randomly pull from (the console.log prints this pool to the console for verification).

The characters randomly chosen through the Math.random function are then printed on the screen in the "#password" text area through the writePassword function.