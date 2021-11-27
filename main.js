const btns = document.getElementsByClassName('numb');
const operands = document.getElementsByClassName('operand');
let a;
let operand;
let b;
let hasA = false;
let hasEquals = false;

for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        if (hasEquals){
            changeResult('')
            hasEquals = false;
        }
        if (hasA) {
            changeResult('');
            hasA = false;
        }
        let number = this.innerHTML;
        const noResult = (result.innerText === '0');
        if (noResult) {
            changeResult('');
        }
        const isValidResultLength = (result.innerText.length < 5);
        if (isValidResultLength){
            result.innerText += number;
        }
    }
}

for (var i = 0; i < operands.length; i++) {
    operands[i].onclick = function () {
        a = +result.innerText;
        hasA = true;
        operand = this.innerText;
    };
}

equals.onclick = function () {
    b = +result.innerText;
    let res = String(calc(operand)).slice(0, 6);
    result.innerText = res;
    hasEquals = true;
}

function calc(operand) {
    switch (operand) {
        case '÷':
            return a / b;
            break;
        case '×':
            return a * b;
            break;
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        default:
            return 'error';
    }
}

delet.onclick = function () {
    a = '';
    b = '';
    operand = '';
    changeResult(0);
}

backspace.onclick = function deleteLastSymbol(event) {
    const resultZero = (result.innerText == 0)
    const resultLengthOne =  (result.innerText.length == 1)
    if (resultZero) {
        return;
    } else if (resultLengthOne) {
        changeResult(0) ;
        return;
    }
    result.innerText = result.innerHTML.slice(0, -1);
}

function changeResult(n) {
    result.innerText = n;
}

