let firstInputValue = "";
let operatorValue = "";
let secondInputValue = "";
let isInputtingSecondValue = false;

const numberButtons = document.querySelectorAll(".numberbtn");
const operatorButtons = document.querySelectorAll(".operatorbtn");
const operateButton = document.querySelector("#equalbtn");
const clearButton = document.querySelector("#clearbtn");

let display = document.querySelector("#display");
let displayContent = document.createElement("div");

function updateFirstInputDisplay(button) {
    let displayInput = button.textContent;
    displayContent.textContent += displayInput;
    firstInputValue = displayContent.textContent;
    display.textContent = firstInputValue;
}

function getInputValue() {
    numberButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (!isInputtingSecondValue) {
                updateFirstInputDisplay(button);
                console.log("First Value:", firstInputValue);
            } else {
                updateSecondInputDisplay(button);
                console.log("Second Value:", secondInputValue);
            }
        });
    });
};

function getOperatorValue() {
    operatorButtons.forEach(button => {
        button.addEventListener("click", () => {
            updateFirstInputDisplay(button);
            operatorValue = button.textContent;
            isInputtingSecondValue = true;
            displayContent.textContent = "";
            console.log("Operator Value:", operatorValue);
        });
    });
}

function updateSecondInputDisplay(button) {
    let displayInput = button.textContent;
    displayContent.textContent += displayInput;
    secondInputValue = displayContent.textContent;
    display.textContent = secondInputValue;
}

getInputValue();
getOperatorValue();

function addition(firstInputValue, secondInputValue) {
    isInputtingSecondValue = false;
    displayContent.textContent = "";
    sum = (parseFloat(firstInputValue)) + (parseFloat(secondInputValue));
    console.log(sum);
    displayContent.textContent = sum;
}

function subtraction(firstInputValue, secondInputValue) {
    isInputtingSecondValue = false;
    displayContent.textContent = "";
    difference = (parseFloat(firstInputValue)) - (parseFloat(secondInputValue));
    console.log(difference);
    displayContent.textContent = difference;
}

function multiplication(firstInputValue, secondInputValue) {
    isInputtingSecondValue = false;
    displayContent.textContent = "";
    product = (parseFloat(firstInputValue)) * (parseFloat(secondInputValue));
    console.log(product);
    displayContent.textContent = product;
}

function division(firstInputValue, secondInputValue) {
    isInputtingSecondValue = false;
    displayContent.textContent = "";
    quotient = (parseFloat(firstInputValue)) / (parseFloat(secondInputValue));
    console.log(quotient);
    displayContent.textContent = quotient;
}

function operate(firstInputValue, operatorValue, secondInputValue) {
    if (operatorValue === "+") {
        addition(firstInputValue, secondInputValue)
    }
    if (operatorValue === "-") {
        subtraction(firstInputValue, secondInputValue)
    }
    if (operatorValue === "x") {
        multiplication(firstInputValue, secondInputValue)
    }
    if (operatorValue === "/") {
        division(firstInputValue, secondInputValue)
    }
    display.textContent = displayContent.textContent;
}

function clear() {
    isInputtingSecondValue = false;
    displayContent.textContent = "";
    display.textContent = displayContent.textContent;
}

operateButton.addEventListener("click", () => {
    operate(firstInputValue, operatorValue, secondInputValue)
});

clearButton.addEventListener("click", () => {
    clear()
});