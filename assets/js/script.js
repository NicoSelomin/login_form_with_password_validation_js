//variable
let myInput = document.getElementById('psw');
let letter = document.getElementById('letter');
let capital = document.getElementById('capital');
let number = document.getElementById('number');
let lenght = document.getElementById('length');

//when focusing on password input
myInput.onfocus = function(){
    document.getElementById('message').style.display = "block";
}

//when out of input

myInput.onblur = function(){
    document.getElementById('message').style.display = "none";
}

//when typing

myInput.onkeyup = function(){
    //lowercase letter validation
    let lowerCaseLetter = /[a-z]/g
    if(myInput.value.match(lowerCaseLetter)){
        letter.classList.remove('invalid');
        letter.classList.add('valid');
    }else{
        letter.classList.remove('valid');
        letter.classList.add('invalid');
    }

    //uppercase letter validation
    let upperCaseLetter = /[A-Z]/g
    if(myInput.value.match(upperCaseLetter)){
        capital.classList.remove('invalid');
        capital.classList.add('valid');
    }else{
        capital.classList.remove('valid');
        capital.classList.add('invalid');
    }

    //number 
    let numbers = /[0-9]/g
    if(myInput.value.match(numbers)){
        number.classList.remove('invalid');
        number.classList.add('valid');
    }else{
        number.classList.remove('valid');
        number.classList.add('invalid');
    }


    //length
    if(myInput.value.length >= 8){
        lenght.classList.remove('invalid');
        lenght.classList.add('valid');
    }else{
        lenght.classList.remove('valid');
        lenght.classList.add('invalid');
    }
}