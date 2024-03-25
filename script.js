let numOne;
let numTwo;
let operator;

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