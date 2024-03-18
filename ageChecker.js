/*
this program check the category of the user's age.
Take input from users: username
Take input from user: age
check the age by category
Display the message with the username and their age category.

*/

// input section
let candidateName = prompt("This program classifies you by age category\nType in your name:");
let candidateAge = prompt("Type in your age:");
candidateAge = Number(candidateAge);

// processing section
let message;

if (candidateAge < 13) {
    message = candidateName + ", you are an adolescent."
} else if (candidateAge < 18)   {
    message = candidateName + ", you are a teenager."
} else {
    message = candidateName + ", you are an adult."
}

// output section
alert(message)