let operand1, operand2 = 0;
let operator;

function add(operand1, operand2) {
    return operand1 + operand2;
}

function divide(operand1, operand2) {
    if (operand2 != 0) {
        return operand1 / operand2;
    }
    return "nice try 😉";
}


function multiply(operand1, operand2) {
    return operand1 * operand2;

}

function subtract(operand1, operand2) {
    return operand1 - operand2;
}

function clear() {

}

function changeSign() {

}

const operate = function (operand1, operand2, operator) {
    switch (operator) {
        case "+":
            add(operand1, operand2);
            break;
        case "-":
            subtract(operand1, operand2);
            break;
        case "x":
            multiply(operand1, operand2);
            break;
        case "÷":
            divide(operand1, operand2);
            break;
        case "C":
            clear()
            break;
        case "-/+"
            changeSign();
            break;
        default:
            break;
    }

}