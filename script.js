let zero = document.getElementById('0');
let one = document.getElementById('1');
let two = document.getElementById('2');
let three = document.getElementById('3');
let four = document.getElementById('4');
let five = document.getElementById('5');
let six = document.getElementById('6');
let seven = document.getElementById('7');
let eight = document.getElementById('8');
let nine = document.getElementById('9');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let mult = document.getElementById('mult');
let div = document.getElementById('div');
let clear = document.getElementById('AC');
let equals = document.getElementById('equals');
let equation = document.getElementById('equation-text');
let equationArray = [];
let valueArray = [zero, one, two, three, four, five, six, seven, eight, nine, plus, minus, mult, div, equals];
let num1, num2, sign;

function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

function operate(operation, a, b) {
    switch(operation) {
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
    }
}

function displayValues() {
    zero.onclick = () => {
        equationArray.push(zero.innerText);
        equation.innerText = equationArray.join('');
    }

    one.onclick = () => {
        equationArray.push(one.innerText);
        equation.innerText = equationArray.join('');
        num1 = 1;
    }
    
    two.onclick = () => {
        equationArray.push(two.innerText);
        equation.innerText = equationArray.join('');
        num2 = 2;
    }

    three.onclick = () => {
        equationArray.push(three.innerText);
        equation.innerText = equationArray.join('');
    }

    four.onclick = () => {
        equationArray.push(four.innerText);
        equation.innerText = equationArray.join('');
    }

    five.onclick = () => {
        equationArray.push(five.innerText);
        equation.innerText = equationArray.join('');
    }

    six.onclick = () => {
        equationArray.push(six.innerText);
        equation.innerText = equationArray.join('');
    }

    seven.onclick = () => {
        equationArray.push(seven.innerText);
        equation.innerText = equationArray.join('');
    }

    eight.onclick = () => {
        equationArray.push(eight.innerText);
        equation.innerText = equationArray.join('');
    }

    nine.onclick = () => {
        equationArray.push(nine.innerText);
        equation.innerText = equationArray.join('');
    }

    plus.onclick = () => {
        equationArray.push(plus.innerText);
        equation.innerText = equationArray.join('');
    }

    minus.onclick = () => {
        equationArray.push(minus.innerText);
        equation.innerText = equationArray.join('');
    }

    mult.onclick = () => {
        equationArray.push(mult.innerText);
        equation.innerText = equationArray.join('');
    }

    div.onclick = () => {
        equationArray.push(div.innerText);
        equation.innerText = equationArray.join('');
    }
    
    equals.onclick = () => {
        equationArray.push(equals.innerText);
        equationArray.push(num1 + num2);
        equation.innerText = equationArray.join('');
    }

    clear.onclick = () => {
        equationArray = [];
        equation.innerText = equationArray.join('');
    }
}

displayValues();