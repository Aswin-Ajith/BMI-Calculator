const userAge = document.querySelector('#age');
const userWeight = document.querySelector('#weight')
const userHeight = document.querySelector('#height')
const result = document.querySelector('#result')
const error = document.querySelector('#ageError');
const message = document.querySelector('#message')
const weightError1 = document.querySelector('#weightError')
const heightError1 = document.querySelector('#heightError')


function checkBMI() {
    if(userAge.value==""|| userHeight=="" || userWeight==""){
        alert("Please fill all the input fields")
    }
    if(userWeight.value<2 || isNaN(userWeight.value)){
        weightError1.textContent="Enter a valid weight value";
    }
    if(userHeight.value<10 || isNaN(userHeight.value)){
        heightError1.textContent= "Enter a valid height value";
    }
    
    if(userAge.value>2&&userAge.value<110){
    heightInMeter= userHeight.value/100;
    result.value= (userWeight.value/(heightInMeter**2)).toFixed(2);
    error.textContent= " ";
    if(result.value<18.5){
        message.style.color="purple";
        message.textContent="You are underweight"
    }
    else if(result.value>=18.5&&result.value<=24.9){
        message.style.color="green";
        message.textContent="You are healthy"
    }
    else if(result.value>24.9&&result.value<=30){
        message.style.color="orange";
        message.textContent="You are overweight"
    }
    else if(result.value>30){
        message.style.color="red";
        message.textContent="You are obese"
    }
    }
    else{ 
        error.textContent= "Enter age of range 2 - 110";
    }
    
}