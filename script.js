// elementos del DOM
const btnNumbers = document.querySelectorAll('.number');
const btnOperators = document.querySelectorAll('.operator');
const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const btnIgual = document.getElementById('btn-igual');

// variables para el cálulo
let valorActual = '';
let valorAnterior = '';
let operacion = '';

// funciones que realizan las operaciones básicas
function add(a, b) { return parseFloat(a) + parseFloat(b) };
function subtract(a, b) { return parseFloat(a) - parseFloat(b) };
function multiply(a, b) { return parseFloat(a) * parseFloat(b) };
function divide(a, b) {
    if (b === 0 && b < a) {
        return 'Error div 0';
    } else {
        return parseFloat(a) / parseFloat(b);
    }
};


// función que en base al operador pasado por argumento, aplica la función correspondiente
function operate(a, operator, b) {
    if (operator === '+') {
        return add(parseFloat(a), parseFloat(b))
    }
    if (operator === '-') {
        return subtract(parseFloat(a), parseFloat(b));
    }
    if (operator === '*') {
        return multiply(parseFloat(a), parseFloat(b));
    }
    if (operator === '/') {
        return divide(parseFloat(a), parseFloat(b));
    }
}






// función que imprime por pantalla los números
function display(e) {
    if (displayValorActual.textContent.length < 9) { // comprobando que no supere 8 a menos que sea un operador y no haya otro antes.
        if (e.target.className === 'number' || e.target.className === 'number col-2') {
            if (e.target.value === '.') {
                if (valorActual.includes('.')) {
                    return;
                } else {
                    valorActual += e.target.value;
                    displayValorActual.textContent = valorActual;
                    console.log('es un punto');
                }
            } else {
                valorActual += e.target.value;
                displayValorActual.textContent = valorActual;
                console.log('es un número');
            }

        } else {
            if (e.target.className === 'operator' && displayValorAnterior.textContent !== '' && displayValorActual.textContent !== '') {
                displayValorAnterior.textContent = operate(valorAnterior, e.target.value, valorActual) + e.target.value;
                displayValorActual.textContent = '';
                valorAnterior = operate(valorAnterior, e.target.value, valorActual);
                valorActual = '';
                operacion = e.target.value;// <------------------------- ahora estoy acá
                // no consigo que cuando toque un operador y ya haya hecho una cuenta, se sigan resolviendo como acá
                // https://mrbuddh4.github.io/calculator/
            } else {
                if (e.target.className === 'operator' && displayValorAnterior.textContent === '') {
                    operacion = e.target.value;
                    valorAnterior = displayValorActual.textContent;
                    displayValorAnterior.textContent = displayValorActual.textContent + operacion;
                    displayValorActual.textContent = '';
                    valorActual = '';
                } else {
                    operacion = e.target.value;
                    valorAnterior = valorActual;
                    displayValorActual.textContent = ''
                    displayValorAnterior.textContent = valorAnterior + operacion;
                    valorActual = '';
                    console.log('es un operador');
                }
            }
        }
    } else {
        if (e.target.className === 'operator' && incluyeOperador(displayValorActual.textContent) === false) {
            operacion = e.target.value;
            valorAnterior = displayValorActual.textContent;
            displayValorAnterior.textContent = valorAnterior + operacion;
            displayValorActual.textContent = '';
            valorActual = '';
            console.log('supera el limite pero es un operador');
        } else {
            if (e.target.className === 'operator' && incluyeOperador(displayValorActual.textContent) === true) {

                console.log('ya supera todos los limites');
            }
        }
    }
}

function incluyeOperador(displayActual) {
    if (displayValorActual.textContent.includes('+') || displayValorActual.textContent.includes('-') || displayValorActual.textContent.includes('*') || displayValorActual.textContent.includes('/')) {
        return true;
    } else {
        return false;
    }
}

/* *************************** desp de calcular el total de la cuenta, setear todos los valores a '' */

// accion del botón igual, realiza el calculo
btnIgual.addEventListener('click', () => {
    displayValorActual.textContent = operate(valorAnterior, operacion, valorActual);
    displayValorAnterior.textContent = '';
    valorAnterior = '';
    valorActual = '';
    operacion = '';

})

// botón clear
const btnClear = document.getElementById('btn-clear');
btnClear.addEventListener('click', () => { displayValorActual.innerHTML = ''; valorActual = ''; displayValorAnterior.innerHTML = ''; valorAnterior = ''; });

// bontón delete <- borra de a un elemento
const btnDel = document.getElementById('btn-del');
btnDel.addEventListener('click', () => {
    if (valorActual === '') {
        return;
    } else {
        displayValorActual.innerHTML = valorActual.slice(0, -1);
        valorActual = displayValorActual.innerHTML;
    }
})

// agrego evento de click a todos los botones para aparecer en pantalla
btnNumbers.forEach(button => {
    button.addEventListener('click', display)
})

btnOperators.forEach(button => {
    button.addEventListener('click', display)
})


