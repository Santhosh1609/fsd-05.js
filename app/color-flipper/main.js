/*
    1.Trigger event when user clicks  on the button
    2.Write a function to generate random color
    3.Apply the generated random color to body tag

*/

//1.Trigger event when user clicks on the button
let myButton = document.getElementById('color-generator');
//console.log(document);
//console.log(document.getElementById);
//console.log(myButton);

myButton.addEventListener('click',function(){
    let randomColor = generateRandomColor(),
        bodyTag = document.getElementById('body-tag'),
        h1Tag = document.getElementById('color');

    bodyTag.style.backgroundColor = randomColor;
    h1Tag.innerHTML = randomColor;
});


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//2. write a function to generate random color
function generateRandomColor(){

    //rgb(0-255,0-255,0-255)
    let red, green ,blue,style,
    head = 'rgb(',
    seperator = ' ',
    tail = ')';
    
    red = getRandomInt(0,255);
    green = getRandomInt(0,255);
    blue = getRandomInt(0,255);
    

    style = head + red + seperator + green + seperator + blue + tail

    return style;
}


