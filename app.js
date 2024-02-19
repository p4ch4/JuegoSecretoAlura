
/*
//se optimizo la asignación de textos en para mostrar en el HTML
let titulo = document.querySelector('h1');
titulo.innerHTML ='Juego del número secreto';
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';
*/

//creación de variable para mostrar la fucnión del número aleatorio
let numeroSecreto = 0;
//variable para realizar el conteo
let intentos = 0;
//creación de arreglo para almacenar los intento
let numeroSorteado=[];

let numeroMaximo =10;

//creación de función para manejar los textos desde JS
function asignarTextoHtml(elemento,texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML=texto;
}

//creación de fución para generar numero aleatorio
function generarNumeroAleatorio() {
    //no es necesario crear una variable, el return se asignara con la variable numeroSecreto
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    //si el número generado esta incluido en la lista
 
    if (numeroMaximo==numeroSorteado.length) {
        asignarTextoHtml('p','Ya se sortearon todos los números posibles');    
    } else {
        if (numeroSorteado.includes(numeroGenerado)){
            return generarNumeroAleatorio();
        }else{
            numeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

//creación de función para los intentos del usuario
function validarIntetno(){
    let validarNumero = parseInt(document.getElementById('intentoDeUsuario').value);
     
    if(numeroSecreto===validarNumero){
        asignarTextoHtml('p',`Acertaste el número en ${intentos}${intentos===1 ? ' vez' : ' veces'}`);
        //habilitar bóton de nuevo juego
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (numeroSecreto>validarNumero) {
            //validación del número secreto cuando es mayor
            asignarTextoHtml('p','El número secreto es mayor');
        } else {
            //validación del número secreto cuado es menor
            asignarTextoHtml('p','El número secreto es menor');
        }  
        //incremento del contador
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    let limpiar = document.querySelector('#intentoDeUsuario');
    limpiar.value = '';
//otra manera de poder hacerlo es
//document.querySelector('#intentoDeUsuario').value = '';

}

function condicionesIniciales() {
    //Textos mostrados en en HTML utilizando la fucnión de asignarTextoHtml
    asignarTextoHtml('h1','Juego del número secreto!');
    asignarTextoHtml('p',`Indica un número del 1 al ${numeroMaximo}`)    
    numeroSecreto=generarNumeroAleatorio();
    //console.log('numero secreto ' + numeroSecreto);

    intentos=1;
}

//creación de función reiniciar juego
function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar el número aleatorio nuevamente   
    //inicializar el número de intento
    condicionesIniciales();
    //console.log('nuevo número secreto ' + numeroSecreto);
    //deshabiliar el bóton de nuevo Juegos
    document.getElementById('reiniciar').setAttribute('disabled','true');
 }

//función para validar numero sorteados
function validarNumeroSorteado() {
    
}

condicionesIniciales();