const weight = document.querySelector('.weight');
const height = document.querySelector('.height');
const calc = document.querySelector('.calc');
const screen = document.querySelector('.screen');
const img = document.querySelector('.img');
const cmDisplay = document.querySelector('.height-in-cm');
const lb = document.querySelector('.lb');
const ft = document.querySelector('.ft');
const inch = document.querySelector('.in');
const cnvrt = document.querySelector('.cnvrt');
const range = document.querySelector('.range');
const shareLink = document.querySelector('.shareLink');

img.style.display = "none";

calc.addEventListener('click', calcFn);
cnvrt.addEventListener('click',cmCnvrtr);
shareLink.addEventListener('click',shareLinkFn);

function calcFn() {

    img.style.display = "block";
    range.style.transition = "all 0.25s 1s";
    
    value = weight.value * 10000/height.value ** 2;
    const result = value.toString().substring(0,4);

    if (result < 18.5) {
        screen.textContent = "BMI = " + result + " Underweight";
        screen.style.color = "red";
        img.src = "./img/underweight.jpg";
        range.value = "25";
    } else if (result < 25) {
        screen.textContent = "BMI = " + result + " Normal";
        screen.style.color = "green";
        img.src = "./img/normal.jpg";
        range.value = "55";
    } else if (result < 30) {
        screen.textContent = "BMI = " + result + " Overweight";
        screen.style.color = "orange";
        img.src = "./img/overweight.jpg";
        range.value = "75";
    } else if (result > 30) {
        screen.textContent = "BMI = " + result + " Obesity";
        screen.style.color = "red";
        img.src = "./img/obesity.jpg";
        range.value = "100";
    } else {
        screen.textContent = "Input is empty";
        screen.style.color = "";
        screen.style.color = "orange";
        img.style.display = "none";
    }

    if (weight.value < 0 || height.value < 0) {
        screen.textContent = "Enter a valid number";
        screen.style.color = "red";
        img.style.display = "none";
    }
}

function cmCnvrtr() {

    lbValue = lb.value * 0.453592;
    cnvrtValue = ft.value * 30.48 + inch.value * 2.54;
    
    lbValue = lbValue.toString().substring(0,6);
    cnvrtValue = cnvrtValue.toString().substring(0,6);

    cmDisplay.textContent = lbValue + "kg " + cnvrtValue + "cm"; 
}

function shareLinkFn(e) {
    e.preventDefault();

    const screenDisplay = screen.textContent.trim() +" "+ weight.value.trim() +" "+ height.value.trim();
    if (!screenDisplay || screen.textContent == "Input is empty" || screen.textContent == "Enter a valid number") {
        alert("Please calculate BMI before sharing.");
        return;
    }

    const msg = encodeURIComponent(screenDisplay);
    const num = '917701897049';

    const url = `https://wa.me/${num}?text=${msg}`;
    window.open(url,'_blank');
}