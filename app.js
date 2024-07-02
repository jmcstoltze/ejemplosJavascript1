
/* Requerimiento 1 */
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

/* Requerimiento 2 */
function botonClicadoConsole() {
    console.log('El botón fue clicado');
}

/* Requerimiento 3 */
function botonClicadoPrompt() {
    let ciudad = prompt('Ingrese nombre de una ciudad de Brasil');
    alert(`Estuve en ${ciudad} y me acordé de tí`);
}

/* Requerimiento 4 */
function botonClicadoAlert() {
    alert('Yo amo JS');
}

function botonClicSuma() {
    let num1 = parseInt(prompt('Ingrese un número'));
    let num2 = parseInt(prompt('Ingrese otro'));

    let suma = num1 + num2;
    alert(`La suma de los número es ${suma}`);
}
