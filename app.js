let display = document.querySelector(".screen");
let btn = document.querySelectorAll("button");
let btns = Array.from(btn);

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

function backspace() {

}


const operate = function (operand1, operand2, operator) {
    operand1 = +operand1;
    operand2 = +operand2;
    let calculation;
    switch (operator) {
        case "plus":
            calculation = add(operand1, operand2);
            break;
        case "minus":
            calculation = subtract(operand1, operand2);
            break;
        case "multiplication":
            calculation = multiply(operand1, operand2);
            break;
        case "division":
            calculation = divide(operand1, operand2);
            break;
        case "clear":
            clear();
            break;
        case "change_sign":
            changeSign();
            break;
        case "backspace":
            backspace();
            break;
        default:
            break;
    }
    return calculation;
}


let operand1 = "";
let operand2 = '';
let operator;
let inputLoop = false;
let operatorPressed = false;


for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (e) => {

        if (btn[i].className === "numeric" && (operatorPressed == false)) {
            display.textContent += `${btn[i].value}`;
            operand1 += btns[i].value;
        }

        else if (btn[i].className === "operator" && (operatorPressed == false)) {
            display.textContent = "";
            operator = btns[i].value;
            operatorPressed = true;
        }

        else if (btn[i].className === "numeric" && (operatorPressed == true)) {
            display.textContent += `${btn[i].value}`;
            operand2 += btns[i].value;
        }

        if (btn[i].value === "equals" && operatorPressed == true) {

            display.textContent = operate(operand1, operand2, operator);
            //display.textContent = `${operand1}`
            operatorPressed = false;
            //operand2 = "";
        }
    });
}



