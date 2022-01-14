
const numberButtons = document.querySelectorAll(".numberBtn");
const operationButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equal-sign");
const deleteButton = document.querySelector(".delete");
const clearAllButton = document.querySelector(".clear-screen");
const calcScreen = document.querySelector(".calc-screen");

let currentOperand = '';
let previousOperand = '';
let myOperation = undefined;

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText);
        updateScreen();
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        chooseOperation(button.innerText);
        updateScreen()
    })
});

equalsButton.addEventListener('click', button => {
    calculate();
    updateScreen()
});

deleteButton.addEventListener('click', button => {
    deleteInput()
    updateScreen()
})

clearAllButton.addEventListener('click', button => {
    clearScreen()
    updateScreen()
})

function clearScreen() {
    currentOperand = '';
    previousOperand = '';
    myOperation = undefined;
}

function appendNumber(number) {

    //if (number === '.' && currentOperand.includes('.')) return;
    if (previousOperand !== '' && myOperation != null){
        currentOperand = currentOperand.toString() + number.toString();
    }
    else {
        currentOperand = currentOperand.toString() + number.toString();
    }
}
function chooseOperation(operation){
    if (currentOperand === '') return;

    if (previousOperand !== '') {

        calculate();
    }
    myOperation = operation;
    console.log(myOperation)
    console.log(myOperation.type)
    previousOperand = currentOperand;
    currentOperand = '';
}

function updateScreen() {
    calcScreen.value= currentOperand;
    if (myOperation != null) {
        calcScreen.value = `${previousOperand}${myOperation}`;
    }
    if (previousOperand !== '' && myOperation != null){
        calcScreen.value = `${previousOperand}${myOperation}${currentOperand}`;
    }

}

function calculate() {
    console.log(`${previousOperand}${myOperation}${currentOperand}`);
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    console.log(prev + " " + current)
    if (isNaN(prev) || isNaN(current)) return;
    switch (myOperation) {
        case '+':
            computation = add(prev,current);
            break;
        case '-':
            computation = subtract(prev,current);
            break;
        case '×':
            computation = multiply(prev,current);
            break;
        case '÷':
            computation = divide(prev,current);
            break;
        case '%':
            computation = modulo(prev,current);
            break;
        default:
            return
    }
    currentOperand = computation;
    myOperation = undefined;
    previousOperand = ''
}

function deleteInput() {
    currentOperand = currentOperand.toString().slice(0, -1);
}

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function modulo(a, b) {
    return a % b;
}



module.exports.add = add;
module.exports.subtract = subtract;
module.exports.multiply = multiply;
module.exports.divide = divide;
module.exports.modulo = modulo;