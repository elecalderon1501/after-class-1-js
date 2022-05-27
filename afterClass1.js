//CONDICIONALES

// if (condición) {
//     código a ejecutar si la condición es verdadera
//   } else {
//     ejecuta este otro código si la condición es falsa
//   }
//----------------------------------------------------------------
//Pide la edad y si es mayor de 18 años indica que ya puede conducir.

// let edad = parseInt(prompt('Introduce tu edad'))

// if(edad>=18) alert ('Puedes conducir')
//     else alert('Aun no puedes conducir')



//----------------------------------------------------------------------
//Podemos hacerlo con operador ternario
// var edad = parseInt(prompt('Introduce tu edad'))

// edad > 18? alert('Puedes conducir') : alert('No puedes conducir aun')

//--------------------------------------------------------------------

//CONDICIONALES ANIDADOS

// let eleccion = prompt(
//   'Ingrese como esta el cielo: soleado, lluvioso, nevando o nublado'
// )
// if (eleccion === 'soleado') {
//   alert ('El día esta agradable y soleado hoy. ¡Use pantalones cortos!')
// } else if (eleccion === 'lluvioso') {
//   alert ('Está lloviendo, tome un abrigo para lluvia y un paraguas.')
// } else if (eleccion === 'nevando') {
//   alert ('Está nevando ─ ¡está congelando! Lo mejor es quedarse en casa.')
// } else if (eleccion === 'nublado') {
//   alert ('No está lloviendo, pero el cielo está gris y nublado.')
// } else {
//   alert ('Ingrese una opcion valida')
// }

//-----------------------------------------------------------------------

//CONDICIONALES Y OPERADORES LOGICOS

// let eleccion = prompt(
//   'Ingrese como esta el cielo: soleado, lluvioso, nevando o nublado'
// )
// eleccion = eleccion.toLowerCase();
// let temperatura = parseInt(prompt('Ingrese la temperatura:'))

// if (eleccion === 'soleado' && temperatura < 10) {
//   alert('Está a ' + temperatura + ' grados afuera — Soleado, pero frio.')
// } else if (
//   eleccion === 'soleado' &&
//   temperatura < 25 &&
//   temperatura >= 10
// ) {
//   alert('Está a ' + temperatura + ' grados afuera — agradable y soleado.')
// } else if (eleccion === 'soleado' && temperatura >= 25) {
//   alert('Está a ' + temperatura + ' grados afuera — ¡QUÉ CALOR! ')
// }else if (
//     (eleccion === 'lluvioso' ||
//       eleccion === 'nevando' ||
//       eleccion === 'nublado') &&
//     (temperatura>25 )
//   ) {
//     alert(`Está a ${temperatura} grados afuera — Cielo: ${eleccion}. Caluroso`)
//   } else if (
//   (eleccion === 'lluvioso' ||
//     eleccion === 'nevando' ||
//     eleccion === 'nublado') &&
//   (temperatura <= 25 && temperatura > 10)
// ) {
//   alert(`Está a ${temperatura} grados afuera — Cielo: ${eleccion}`)
// } else if (
//     (eleccion === 'lluvioso' ||
//       eleccion === 'nevando' ||
//       eleccion === 'nublado') &&
//     temperatura <= 10
//   ) {
//     alert('Está a ' + temperatura + ' grados afuera — Muy frio. Cielo ' + eleccion)
//   }else alert('Ingrese datos correctos')

//-------------------------------------------------------------------------

//SWITCH

// let expr = parseInt(prompt(
//   'Ingrese la opcion: 1-Naranjas, 2-Manzanas, 3-Platanos, 4-Cerezas, 5-Mangos, 6-Papayas'
// ));
// switch (expr) {
//   case 1:
//     alert('El kilogramo de naranjas cuesta $0.59.')
//     break
//   case 2:
//     alert('El kilogramo de manzanas cuesta $0.32.')
//     break
//   case 3:
//     alert('El kilogramo de platanos cuesta $0.48.')
//     break
//   case 4:
//     alert('El kilogramo de cerezas cuesta $3.00.')
//     break
//   case 5:
//     alert('El kilogramo de mangos cuesta $3.00.')
//   case 6:
//     alert('El kilogramo de mangos y papayas cuesta $2.79.')
//     break
//   default:
//     alert('Lo lamentamos, por el momento no disponemos de ' + expr + '.')
// }

//-----------------------------------------------------------------------------

//FOR

//for ([expresion-inicial]; [condicion]; [expresion-final])sentencia
//----------------------------

//Mostrar los numeros del 0 al 10 inclusive

// for (var i = 0; i <= 10; i++) {
//     alert(i)
//  }

//-------------------------------------------------------

//Mostrar los numeros del 0 al 10 inclusive

// for (var i = 10; i >= 0; i--) {
//     alert(i)
//  }

//------------------------------------------

//Mostrar los numeros pares del 0 al 10 inclusive

// for (var i = 0; i <= 10; i+=2) {
//     alert(i)
//  }

//------------------------------------------
//WHILE
// while (condicion)
//   sentencia
//--------------
// n = 0;
// x = 0;
// while (n < 3) {
//   n ++;
//   x += n;
// }


//-------------------------------------------------

//DO WHILE

// do
//    sentencia
// while (condición);

//Mostrar los numeros del 1 al 4.

// let resultado = '';
// let i = 0;

// do {
//   i = i + 1;
//   resultado = resultado + i;
// } while (i < 5);

// alert(resultado);

//-------------------------------------------------------
