'use strict';

//hago una funcion para añadir el div y la llamo.

function addClock() {
  const newDiv = document.querySelector('body');
  const d = document.createElement('div');
  newDiv.appendChild(d);
}
addClock();

const div = document.querySelector('div');

//hago una funcion para obetner las horas, minutos y segundos y la añado al div que acabo de crear.

function updateClock() {
  const now = new Date();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getUTCSeconds();
  div.textContent = `${formatTime(hour)}:${formatTime(minutes)}:${formatTime(
    seconds
  )}`;
}

// llamo a la funcion y hago un setInterval para que se actualice cada segundo.

updateClock();
setInterval(updateClock, 1000);

// por último, hago otra funcion para formatear y mantener el doble digito cuando sea 0.
function formatTime(numberToFormat) {
  return numberToFormat > 9 ? `${numberToFormat}` : `0${numberToFormat}`;
}
