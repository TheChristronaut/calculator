let numOne;
let numTwo;
let operator;
let displayValue;

/* const numberOne = document.querySelector("#onebtn");
const numberTwo = document.querySelector("#twobtn");
const numberThree = document.querySelector("#threebtn");
const numberFour = document.querySelector("#fourbtn");
const numberFive = document.querySelector("#fivebtn");
const numberSix = document.querySelector("#sixbtn");
const numberSeven = document.querySelector("#sevenbtn");
const numberEight = document.querySelector("#eightbtn");
const numberNine = document.querySelector("#ninebtn");
const numberZero = document.querySelector("#zerobtn"); */

const numberButtons = document.querySelectorAll(".numberbtn");

let display = document.querySelector("#display");

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        let displayInput = button.textContent;
        display.textContent += displayInput;
        let displayValue = display.textContent;
        console.log(displayValue);
    });
});

/* numberTwo.addEventListener("click", () => {
    let displayInput = 2;
    display.textContent += displayInput;
    let displayValue = display.textContent;
    console.log(displayValue);
});

numberThree.addEventListener("click", () => {
    let displayInput = 2;
    display.textContent += displayInput;
    let displayValue = display.textContent;
    console.log(displayValue);
});

numberFour.addEventListener("click", () => {
    let displayInput = 2;
    display.textContent += displayInput;
    let displayValue = display.textContent;
    console.log(displayValue);
});

numberFive.addEventListener("click", () => {
    let displayInput = 2;
    display.textContent += displayInput;
    let displayValue = display.textContent;
    console.log(displayValue);
});

numberSix.addEventListener("click", () => {
    let displayInput = 2;
    display.textContent += displayInput;
    let displayValue = display.textContent;
    console.log(displayValue);
});

numberSeven.addEventListener("click", () => {
    let displayInput = 2;
    display.textContent += displayInput;
    let displayValue = display.textContent;
    console.log(displayValue);
});

numberEight.addEventListener("click", () => {
    let displayInput = 2;
    display.textContent += displayInput;
    let displayValue = display.textContent;
    console.log(displayValue);
});

numberNine.addEventListener("click", () => {
    let displayInput = 2;
    display.textContent += displayInput;
    let displayValue = display.textContent;
    console.log(displayValue);
});

numberZero.addEventListener("click", () => {
    let displayInput = 2;
    display.textContent += displayInput;
    let displayValue = display.textContent;
    console.log(displayValue);
}); */

function addition(numOne, numTwo) {
    sum = numOne + numTwo;
    console.log(sum);
}

function subtraction(numOne, numTwo) {
    difference = numOne - numTwo;
    console.log(difference);
}

function multiplication(numOne, numTwo) {
    product = numOne * numTwo;
    console.log(product);
}

function division(numOne, numTwo) {
    quotient = numOne / numTwo;
    console.log(quotient);
}

function operate(numOne, operator, numTwo){
    if (operator == "add") {
        addition(numOne,numTwo)
    }
    if (operator == "subtract") {
        subtraction(numOne,numTwo)
    }
    if (operator == "multiply") {
        multiplication(numOne,numTwo)
    }
    if (operator == "divide") {
        division(numOne,numTwo)
    }
}

operate(2, "add", 3);
operate(2, "subtract", 3);
operate(2, "multiply", 3);
operate(2, "divide", 3);