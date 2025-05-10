const weight = document.querySelector('.weight');
const height = document.querySelector('.height');
const calc = document.querySelector('.calc');
const screen = document.querySelector('.screen');

screen.textContent = "Calcutale your BMI here"

calc.addEventListener('click', calcFn);


  

function calcFn() {


    value = weight.value * 10000/height.value ** 2;
    const result = value.toString().substring(0,4);

    if (result < 18.5) {
        screen.textContent = "BMI = " + result + " Underweight";
        screen.style.color = "red";
    } else if (result < 25) {
        screen.textContent = "BMI = " + result + " Normal";
        screen.style.color = "green";
    } else if (result < 30) {
        screen.textContent = "BMI = " + result + " Overweight";
        screen.style.color = "orange";
    } else if (result > 30) {
        screen.textContent = "BMI = " + result + " Obesity";
        screen.style.color = "red";
    } else {
        screen.textContent = "Enter a valid input";
        screen.style.color = "";
    }
}