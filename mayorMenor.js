// Hacer un programa que lea n numeros y calcule el menor, el mayor y la media. 
let numero;
let sumatoria = 0;
let mayor = -Infinity;
let menor = Infinity;
let n = parseInt(prompt('Ingrese cantidad de numeros: '));

for(i=0; i<n; i++){
    numero = parseInt(prompt('Ingrese un numero: '));
    sumatoria += numero;
    if (numero > mayor) mayor = numero;
    if (numero < menor) menor = numero;
}
alert('El promedio de los numeros es: ' + sumatoria/n + '\nEl mayor es: '+ mayor + '\nEl menor es: '+ menor);

