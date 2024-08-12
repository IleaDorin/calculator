let operator = '';
let op = {
    left: '',
    right: ''
};
let result = 0;
let clear = true;
let acc = 0;

let display = document.querySelector('#display');

function setOperation(op) {
    operator = op;
}

function clearDisplay() {
    clear = true;
    display.value = '';
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
    operator = oper;
    clear = false;
    display.textContent += oper;
}


