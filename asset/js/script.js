// Add event listener when the page load
//add event listener when button is clicked

document.addEventListener("DOMContentLoaded", function(){

    let buttons = document.getElementsByTagName('button');

    for( let button of buttons){
        button.addEventListener('click', function(){

            if(button.getAttribute('data-type') === "submit"){
                checkAnswer();
            }
            else{
                let gameType = button.getAttribute('data-type');
                runGame(gameType);
            }
        })
        
    }

    document.getElementById('answer-box').addEventListener('keydown',function(event){

        if(event.key === 'Enter'){
            checkAnswer();
        }
    })
    runGame('addition');
})



function runGame(gameType) {

    document.getElementById('answer-box').value = "";
    document.getElementById('answer-box').focus();

    // generate 2 random numbers
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if(gameType === 'addition'){
        displayAdditionQuestion(num1, num2);
    }
    else if(gameType === 'multiply'){
        displayMultiplyQuestion(num1, num2);
    }
    else if(gameType === 'subtract'){
        displaySubtractQuestion(num1, num2);
    }
    else if(gameType === 'division'){
        displayDivisionQuestion(num1, num2);
    }
    else{
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType} Aborting!`;
    }

}

function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    console.log(calculatedAnswer);
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {

        incrementScore();
        alert("Hey! You got it right!");
    } else {

        incrementWrongAnswer();
        alert(`Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
    }

    runGame(calculatedAnswer[1]);

}

function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if(operator === "+"){

        return[operand1 + operand2 , "addition"] ;
    }
    else if(operator === 'x'){

        return[operand1 * operand2, "multiply"];
    }
    else if(operator === '-'){

        return [operand1 - operand2, "subtract"];
    }
    else if(operator === '/'){
        
        return [Math.floor(operand1 /  operand2), "division"];
    }
    else{

        alert(`Unimplemented operator: ${operator}`);
        throw `Unimplemented operator: ${operator} aborting!`;
    }
}

function incrementScore() {

    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}

function incrementWrongAnswer() {

    let incorrect = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++incorrect;
}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById('operand1').innerText = operand1;
    document.getElementById('operand2').innerText = operand2;
    document.getElementById('operator').innerText = "+";

}

function displaySubtractQuestion(operand1, operand2) {

    document.getElementById('operand1').innerText = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').innerText = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').innerText = "-";

}

function displayMultiplyQuestion(operand1, operand2) {
    
    document.getElementById('operand1').innerText = operand1;
    document.getElementById('operand2').innerText = operand2;
    document.getElementById('operator').innerText = "x";

}

function displayDivisionQuestion(operand1, operand2) {

    document.getElementById('operand1').innerText = operand1 * operand2;
    document.getElementById('operand2').innerText = operand2;
    document.getElementById('operator').innerText = "/";
    
}