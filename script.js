const numbers = document.querySelectorAll('[data-number]');
const functions = document.querySelectorAll('[data-function]');
const operators = document.querySelectorAll('[data-operator]');
const equation = document.querySelector('[data-equation]');
const result = document.querySelector('[data-result]');

let previousOperator;
let decimalExists;
let operatorString = '';
let isMaxed = false;

let equationArray = [];

function clearWhenNewInput() {
    if (result.innerText) {
        result.innerText = '';
        equation.innerText = '';
        isMaxed = false;
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b; 
}

function multiply(a, b) {
    return a * b;
}

function prohibitExtraOperators(op) {
    equation.innerText += op;
        previousOperator = true;
        isMaxed = true;
}

function numberClickHandler() {
    numbers.forEach(number => {
        let currentNumber = number.innerText;
        number.addEventListener('click', () => {
            if (currentNumber == '.') {
                clearWhenNewInput();
                if (!decimalExists) {
                    equation.innerText += '.';
                    decimalExists = true;
                }
                previousOperator = false;
            } else {
                for (let i = 0; i < 10; i++) {
                    if (currentNumber == `${i}`) {
                        equation.innerText += `${i}`;
                        previousOperator = false;
                    }
                }
            }
        }); 
    });
}

function functionClickHandler() {
    functions.forEach(fun => { 
        let currentFunction = fun.innerText;

        fun.addEventListener('click', () => {
            if (currentFunction == 'CLEAR') {
                decimalExists = false;
                previousOperator = false;
                isMaxed = false;
                equation.innerText = '';
                result.innerText = '';
            } else if (currentFunction == 'DELETE') {
                result.innerText = '';
                if (equation.innerText.slice(-1) == 'x' || equation.innerText.slice(-1) == '/' || equation.innerText.slice(-1) == '-' || equation.innerText.slice(-1) == '+') {
                    previousOperator = false;
                }
                if (equation.innerText.slice(-1) == '.') {
                    decimalExists = false;
                }
                equation.innerText = equation.innerText.slice(0, -1);
            } else if (currentFunction == '=') {
                if (operatorString == '+') {
                    equationArray = equation.innerText.split('+');
                    result.innerText = add(parseFloat(equationArray[0]), parseFloat(equationArray[1]));
                } else if (operatorString == '-') {
                    equationArray = equation.innerText.split('-');
                    result.innerText = subtract(parseFloat(equationArray[0]), parseFloat(equationArray[1]));
                } else if (operatorString == '/') {
                    equationArray = equation.innerText.split('/');
                    result.innerText = divide(parseFloat(equationArray[0]), parseFloat(equationArray[1]));
                } else if (operatorString == 'x') {
                    equationArray = equation.innerText.split('x');
                    result.innerText = multiply(parseFloat(equationArray[0]), parseFloat(equationArray[1]));
                }
            }
        });
    });
}

function operatorClickHandler() {
    operators.forEach(operator => {
        let currentOperator = operator.innerText;

        operator.addEventListener('click', () => {
            if (currentOperator == '/' && !previousOperator && !isMaxed) {
                operatorString = '/';
                prohibitExtraOperators(currentOperator);
            } else if (currentOperator == 'x' && !previousOperator && !isMaxed) {
                operatorString = 'x';
                prohibitExtraOperators(currentOperator);
            } else if (currentOperator == '-' && !previousOperator && !isMaxed) {
                operatorString = '-';
                prohibitExtraOperators(currentOperator);
            } else if (currentOperator == '+' && !previousOperator && !isMaxed) {
                operatorString = '+';
                prohibitExtraOperators(currentOperator);
            }
        });
    });
}

function main() {
    numberClickHandler();
    operatorClickHandler();
    functionClickHandler();
}

main();