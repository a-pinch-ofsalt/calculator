const display = document.querySelector('#display');
const buttons = {
    numpad: document.querySelectorAll('#numpad button'),
    operator: document.querySelectorAll('#operators button'),
    clear: document.querySelector('#clearButton'),
    equals: document.querySelector('#equalsButton')
}

let num1 = '';
let num2 = '';
let operator = '';
let thereIsExpression = false;

const operations = {
    '+': (num1, num2) => {return num1 + num2},
    '-': (num1, num2) => {return num1 - num2},
    '×': (num1, num2) => {return num1 * num2},
    '÷': (num1, num2) => {return num1 / num2}
}

const calculate = () => {
    num1 = operations[operator](Number(num1), Number(num2));
    display.textContent = num1;
    num2 = '';
}

const clearCalculator = () => {
    thereIsExpression = false;
    operator = '';
    num1 = '';
    num2 = '';
    display.textContent = '';
}

const typeIn = (text) => {
    display.textContent += text;
}

for (const button of buttons.numpad) {
    button.addEventListener('click', () => {
        if (thereIsExpression) {
            num2 += button.textContent;
        } else {
            num1 += button.textContent;
        }
        typeIn(button.textContent)
    });
}

for (const button of buttons.operator) {
    button.addEventListener('click', () => {
        if (thereIsExpression) {
            calculate();
        } else {
            thereIsExpression = true;
        }
        operator = button.textContent;
        typeIn(button.textContent);
    });
}

buttons.equals.addEventListener('click', () => {
    calculate();
    thereIsExpression = false;
});

buttons.clear.addEventListener('click', () => {
    clearCalculator();
});

