// Get elements from the DOM

// Display elements
const displayNumberOne = document.querySelector(".display-number-one");
const displayNumberTwo = document.querySelector(".display-number-two");
const displayOperator = document.querySelector(".display-operator");

// Buttons
// Operators
const btnAc = document.getElementById("ac");
const btnDel = document.getElementById("del");
const btnPercent = document.getElementById("%");
const btnSplit = document.getElementById("/");
const btnMultiply = document.getElementById("*");
const btnLess = document.getElementById("-");
const btnPlus = document.getElementById("+");
const btnEqual = document.getElementById("=");
const btnDot = document.getElementById(".");
// Numbers
const btnZero = document.getElementById("0");
const btnOne = document.getElementById("1");
const btnTwo = document.getElementById("2");
const btnThree = document.getElementById("3");
const btnFour = document.getElementById("4");
const btnFive = document.getElementById("5");
const btnSix = document.getElementById("6");
const btnSeven = document.getElementById("7");
const btnEight = document.getElementById("8");
const btnNine = document.getElementById("9");

// Variables
let numberOne;
let numberTwo;
let operator = "";

// Add event listener
btnZero.addEventListener("click", () => { manejadorClickNumeros("0") })
btnOne.addEventListener("click", () => { manejadorClickNumeros("1") })
btnTwo.addEventListener("click", () => { manejadorClickNumeros("2") })
btnThree.addEventListener("click", () => { manejadorClickNumeros("3") })
btnFour.addEventListener("click", () => { manejadorClickNumeros("4") })
btnFive.addEventListener("click", () => { manejadorClickNumeros("5") })
btnSix.addEventListener("click", () => { manejadorClickNumeros("6") })
btnSeven.addEventListener("click", () => { manejadorClickNumeros("7") })
btnEight.addEventListener("click", () => { manejadorClickNumeros("8") })
btnNine.addEventListener("click", () => { manejadorClickNumeros("9") })
btnAc.addEventListener("click", deleteAll)
// btnDel.addEventListener("click",manejadorClickOperadores("del"))
btnPercent.addEventListener("click", () => { manejadorClickOperadores("%") })
btnSplit.addEventListener("click", () => { manejadorClickOperadores("/") })
btnMultiply.addEventListener("click", () => { manejadorClickOperadores("*") })
btnLess.addEventListener("click", () => { manejadorClickOperadores("-") })
btnPlus.addEventListener("click", () => { manejadorClickOperadores("+") })
// btnDot.addEventListener("click",manejadorClickOperadores("."))
btnEqual.addEventListener("click", result)





// funcion para realizar la operacion
function result() {
    if (operator === "+") {
        displayNumberOne.textContent = "";
        displayOperator.textContent = "";
        displayNumberTwo.textContent = numberOne + numberTwo;
        numberOne = null;
        numberTwo = null;
        operator = "";
    } else {
        if (operator === "-") {
            displayNumberOne.textContent = "";
            displayOperator.textContent = "";
            displayNumberTwo.textContent = numberOne - numberTwo;
            numberOne = null;
            numberTwo = null;
            operator = "";
        } else {
            if (operator === "*") {
                displayNumberOne.textContent = "";
                displayOperator.textContent = "";
                displayNumberTwo.textContent = numberOne * numberTwo;
                numberOne = null;
                numberTwo = null;
                operator = "";
            } else {
                if (operator === "/") {
                    displayNumberOne.textContent = "";
                    displayOperator.textContent = "";
                    displayNumberTwo.textContent = numberOne / numberTwo;
                    numberOne = null;
                    numberTwo = null;
                    operator = "";
                } else {
                    displayNumberOne.textContent = "";
                    displayOperator.textContent = "";
                    displayNumberTwo.textContent = (numberOne * numberTwo) / 100;
                    numberOne = null;
                    numberTwo = null;
                    operator = "";
                }
            }
        }
    }
}

// manejador de click
function manejadorClickNumeros(btn) {
    pressNumber(btn);
}
function manejadorClickOperadores(btn) {
    pressOperator(btn);
}

//  funcion que reinicia la calculadora
function deleteAll() {
    numberOne = null;
    numberTwo = null;
    displayNumberOne.textContent = "";
    displayNumberTwo.textContent = "";
    displayOperator.textContent = "";
    operator = "";
}

// funcion para dibujar los numeros presionados
function pressNumber(value) {
    if (displayNumberOne.textContent === "" && displayOperator.textContent === "" && displayNumberTwo.textContent != "") {
        displayNumberTwo.textContent = "";
        displayNumberOne.textContent = displayNumberOne.textContent + value;
        numberOne = parseInt(displayNumberOne.textContent);
        console.log(`el numero que se va formando en la primer pantalla es: ${numberOne}`);
    } else {
        if (displayLimit(displayNumberOne) && operator === "") {
            displayNumberOne.textContent = displayNumberOne.textContent + value;
            numberOne = parseInt(displayNumberOne.textContent);
            console.log(`el numero que se va formando en la primer pantalla es: ${numberOne}`);
        } else {
            if (operator != "" && displayLimit(displayNumberTwo)) {
                displayNumberTwo.textContent = displayNumberTwo.textContent + value;
                numberTwo = parseInt(displayNumberTwo.textContent);
                console.log(`el numero que se va formando en la segunda pantalla es: ${numberTwo}`);
            } else {
                // nada por ahora
            }
        }
    }
}

// funcion para dibujar el operador presionado
function pressOperator(value) {
    if (displayNumberOne.textContent != "") {
        displayOperator.textContent = value;
        operator = value;
        console.log(`El operador seleccionado es: ${operator}`);
    } else {
        // no hago nada
    }
}

// funcion para limitar la cantidad de numeros en pantalla
function displayLimit(display) {
    if (display.textContent.length < 10) {
        return true;
    } else {
        return false;
    }
}


