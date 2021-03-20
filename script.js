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

function main() {
    zero.onclick = () => {
        equation.innerHTML = zero.innerText;
    }
}   

main();