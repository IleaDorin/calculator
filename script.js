let operator = '';
let op = {
    left: '',
    right: ''
};
let result = 0;
let clear = true;
let acc = 0;

let display = document.querySelector('h2');


function setOperation(op) {
    operator = op;
}

function clearDisplay() {
    clear = true;
    display.textContent = '';
    op.left = '';
    op.right = '';
    acc = 0;
}

function appendNumber(num) {
    if (clear) {
        // append to the left operand
        op.left += num;
    } else {
        // append to the right operand
        op.right += num;
    }
    display.textContent += num;
}

function setOperation(oper) {
    if (op.left === '') {
        return;
    }
    if (op.right !== '') {
        calculate();
    }
    operator = oper;
    clear = false;
    display.textContent += oper;
}

function calculate() {
    if (op.right === '' || op.left === '') {
        return;
    }
    let left = parseFloat(op.left);
    let right = parseFloat(op.right);
    switch (operator) {
        case '+':
            result = left + right;
            break;
        case '-':
            result = left - right;
            break;
        case '*':
            result = left * right;
            break;
        case '/':
            if (right === 0) {
                display.textContent = 'illegal operation, you go yo jail!';
                return;
            }
            result = left / right;
            break;
    }
    display.textContent = result;
    acc = result;
    op.left = result;
    op.right = '';
    clear = true;
}


