// Add event listener when the page load
//add event listener when button is clicked

document.addEventListener("DOMContentLoaded", function(){

    let buttons = document.getElementsByTagName('button');

    for( let button of buttons){
        button.addEventListener('click', function(){

            if(button.getAttribute('data-type') === "submit"){
                alert('you clicked Submit');
            }
            else{
                let gameType = button.getAttribute('data-type');
                alert(`You clicked ${gameType}`);
            }
        })
        
    }
})

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}