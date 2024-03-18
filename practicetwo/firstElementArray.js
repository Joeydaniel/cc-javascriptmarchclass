// input section
let numbers = []; //Empty array to store numbers
 let userInput; //Collect user input.

 function firstElementArray(array){
    return array[0];
 }

 while (true){
    userInput = prompt("Thhis program collect numbers and returns the first number.\nType in a number");
   
    // exit condition from the infinit loop
    if (userInput == "stop"){
    break;
    }

    // populate the array
    userInput = Number(userInput);
    numbers.push(userInput);
 }

 console.log(numbers)

 firstElementArray[numbers];