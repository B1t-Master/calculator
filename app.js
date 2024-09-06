let display = document.querySelector(".screen");
let btn = document.querySelectorAll("button");
let btns = Array.from(btn);

function testLength(content) {
    let arr = [...content];
    if (arr.length > 12) {
        return false
    }
    return true;
}

function add(operand1, operand2) {
    return operand1 + operand2;
}

function divide(operand1, operand2) {
    if (operand2 != 0) {
        return (operand1 / operand2).toFixed(2);
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
    operand1 = "";
    operand2 = "";
    display.textContent = "";
    operator = "";
    operand1Pressed = false;
}

function changeSign() {

}

function backspace() {

}


const operate = function (operand1, operand2, operator) {
    operand1 = +operand1;
    operand2 = +operand2;
    let result;
    switch (operator) {
        case "plus":
            result = add(operand1, operand2);
            break;
        case "minus":
            result = subtract(operand1, operand2);
            break;
        case "multiplication":
            result = multiply(operand1, operand2);
            break;
        case "division":
            result = divide(operand1, operand2);
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
    return result;
}


let operand1 = "";
let operand2 = "";
let operator;
let inputLoop = false;
let operatorPressed = false;
let operand2Pressed = false;
let operand1Pressed = false;


for (let i = 0; i < btns.length; i++) {
    //let storage = display.textContent;
    btns[i].addEventListener('click', () => {

        if (btns[i].className === "numeric" && (operatorPressed == false) && (operand1Pressed == false)) {
            if (testLength(display.textContent)) {

                display.textContent += `${btn[i].value}`;
                operand1 += btns[i].value;
            }
            else {
                display.textContent += ``;
            }
        }

        if (btns[i].className === "operator" && (operatorPressed == false)) {
            display.textContent = "";
            operator = btns[i].value;
            operatorPressed = true;
        }

        if (btns[i].className === "numeric" && (operatorPressed == true)) {

            if (testLength(display.textContent)) {

                display.textContent += `${btn[i].value}`;
                operand2 += btns[i].value;
            }
            else {
                display.textContent += ``;
            }

            operand2Pressed = true;
            inputLoop = true;
        }

        if ((inputLoop == true) && btns[i].value === "equals") {
            let calculation = operate(operand1, operand2, operator);
            operand1 = calculation;
            display.textContent = `${operand1}`
            operand2Pressed = true;
            operatorPressed = false;
            operand2 = "";
            operand1Pressed = true;
            inputLoop = false;
            //operator = "";
        }

        if (btns[i].value === "clear") {
            clear();
            //display.textContent = `${operand1}`
            //operand2 = "";
        }

    });
}



