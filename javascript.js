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
    '+': (num1, num2) => {
        alert(`${num1} + ${num2}`);
        return num1 + num2
    },
    '-': (num1, num2) => {
        alert(`${num1} - ${num2}`);
        return num1 - num2
    },
    '×': (num1, num2) => {
        alert(`${num1} * ${num2}`);
        return num1 * num2
    },
    '÷': (num1, num2) => {
        alert(`${num1} / ${num2}`);
        return num1 / num2
    },
}

for (const button of buttons.numpad) {
    button.addEventListener('click', () => {
        if (thereIsExpression) {
            num2 += button.textContent;
        } else {
            num1 += button.textContent;
        }
        display.textContent += button.textContent;
    });
}

for (const button of buttons.operator) {
    button.addEventListener('click', () => {
        if (thereIsExpression) {
            num1 = operations[operator](Number(num1), Number(num2));
            display.textContent = num1;
            num2 = '';
        } else {
            thereIsExpression = true;
        }
        operator = button.textContent;
        display.textContent += button.textContent;
    });
}

buttons.equals.addEventListener('click', () => {
    num1 = operations[operator](Number(num1), Number(num2));
    display.textContent = num1;
    num2 = '';
    thereIsExpression = false;
});

buttons.clear.addEventListener('click', () => {
    thereIsExpression = false;
    operator = '';
    num1 = '';
    num2 = '';
    display.textContent = '';
});

