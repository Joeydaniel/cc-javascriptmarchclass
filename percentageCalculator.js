//input section

let userInput = prompt("Input a number:");
userInput = Number(userInput);
let userInput2 = prompt("input a second number:");
userInput2 = Number(userInput2);

// processing section
function percentage(userInput, userInput2){
    let answer;
    if (userInput < userInput2){
        let answer;
        answer = (userInput / userInput2) * 100;
    } else {
        answer = (userInput / userInput2) * 100;  
}

return answer;
}

alert(percentage(userInput, userInput2) + "%");

