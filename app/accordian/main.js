// Create event listener for all buttons

let buttons = document.querySelectorAll('.question-btn');
console.log(buttons);

function printMe(button){
    button.addEventListener('click',function(){
    let currentElement = this,
        questionWrapperElement = currentElement.parentNode.parentNode,
        questionTextElement = questionWrapperElement.querySelector('.question-text');

        console.log(questionTextElement);

        questionTextElement.style.display = 'block';
    });
}

 buttons.forEach(printMe);
