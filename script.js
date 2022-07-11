let firstNum= 0;
let result= 0;
let currentNum = 0;
let operatorKey = "";
let displayText = "";
const displayWindow = document.getElementById('display');
const buttons = document.querySelectorAll(".btnnum");
const equal = document.querySelector(".equal");
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiplication = document.getElementById('multiplication');
const division = document.getElementById('division');
const clear = document.getElementById("clear");

//buttons.addEventListener('click', function() {display(buttons.textContent)}, false);
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        displayText = displayText + button.textContent;
        display(displayText);
    })
});

//perform operation when equal is clicked
equal.addEventListener('click', () => {
    currentNum = Number(displayText);
    operate(operatorKey, firstNum, currentNum);
    displayText = result;
    display(result);
});


//clear display and variables when clear is hit
clear.addEventListener('click', () => {
    firstNum = 0;
    result = 0;
    currentNum = 0;
    displayText = "";
    display("");
});

//put displayText number into firstNum and change operator upon clicking on an operator
plus.addEventListener('click', () => {
        firstNum = Number(displayText);
        displayText = "";
        display("+");
        operatorKey = "+";     
   }
);

minus.addEventListener('click', () => {
    firstNum = Number(displayText);
    displayText = "";
    display("-");
    operatorKey = "-";     
}
);

multiplication.addEventListener('click', () => {
    firstNum = Number(displayText);
    displayText = "";
    display("X");
    operatorKey = "X";     
}
);

division.addEventListener('click', () => {
    firstNum = Number(displayText);
    displayText = "";
    display("/");
    operatorKey = "/";     
}
);






function add(x, y) {
    result = (x + y);
    return x + y;
}

function subtract(x, y) {
    result = (x - y);
    return x - y;
}

function multiply(x, y) {
    result = (x * y);
    return x * y;
}

function divide(x, y) {
    result = (x / y);
    return x / y;
}

function clearNum() {
    result = 0;
    display("");
}

function operate(operator, a, b) {
        if (operator === "+") {
            result = add(a, b);
        }
        else if(operator === "-") {
            result = subtract(a, b);
        }
        else if(operator === "X") {
            result = multiply(a, b);
        }
        else if(operator === "/") {
            result = divide(a, b);
        }
        else {
            result = firstNum;
        }


    };


function display(text) {
    displayWindow.textContent = `${text}`;
}



