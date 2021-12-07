'use strict';

//Establecemos el contador igual a 1. Más adelante lo pararemos cuando el valor sea igual a 5
//Lo paramos antes si se acierta el número. Resolvemos ambas condiciones con un if y un else if.
//las diferentes alertas saltarán con el mensaje que corresponda según se acierte, sea mayor
//menor o se llegue al limite de intentos.
//usamos la funcion math.floor con valor 101 para que incluya los valores del 0 al 100 ambos incluidos.

let counter = 1;

function findNumber() {
  const target = Math.floor(Math.random() * 101);
  let n;
  while (true) {
    n = parseInt(prompt('Introduce un número del 0 al 100'));
    if (n === target) alert('Has ganado!  El número era: ' + target);
    else if (counter === 5) break;
    alert(
      n > target ? 'El número buscado es MENOR' : 'El numero buscado es MAYOR'
    );

    counter++;
  }
  alert(
    'Has alcanzado el número máximo de intentos. El número era:  ' + target
  );
}

findNumber();
