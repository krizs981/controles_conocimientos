'use strict';

// puntuaciones
const puntuaciones = [
  {
    equipo: 'Toros Negros',
    puntos: [1, 3, 4, 2, 10, 8],
  },
  {
    equipo: 'Amanecer Dorado',
    puntos: [8, 5, 2, 4, 7, 5, 3],
  },
  {
    equipo: 'Águilas Plateadas',
    puntos: [5, 8, 3, 2, 5, 3],
  },
  {
    equipo: 'Leones Carmesí',
    puntos: [5, 4, 3, 1, 2, 3, 4],
  },
  {
    equipo: 'Rosas Azules',
    puntos: [2, 1, 3, 1, 4, 3, 4],
  },
  {
    equipo: 'Mantis Verdes',
    puntos: [1, 4, 5, 1, 3],
  },
  {
    equipo: 'Ciervos Celestes',
    puntos: [3, 5, 1, 1],
  },
  {
    equipo: 'Pavos Reales Coral',
    puntos: [2, 3, 2, 1, 4, 3],
  },
  {
    equipo: 'Orcas Moradas',
    puntos: [2, 3, 3, 4],
  },
];

//recorro todos los array y lo compruebo con un console, log.

for (const punto of puntuaciones) {
  console.log('tengo... ', punto);
  let resultado = 0;
  for (let puntuacion of puntuaciones) {
    resultado += puntuacion;
  }
}
let res = puntuaciones.reduce((resultado, punto) => resultado + punto, 0);
console.log(res);

//no consigo salir del object object o de obtener resultados de parametros no definidos
//intentando hacer cosas tipo puntuaciones.puntos o similares
//mi idea era sumar los array 'puntos' y con un .map obtener cada equipo y su total
//y desde ahi, mostrar el mayor y el menor por consola
