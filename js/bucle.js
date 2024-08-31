// let mascotas = ['perro', 'gato','elefante'];

// mascotas.forEach(mascota => console.log(mascota));


let numeros = [1, 2, 3, 4, 5, 6, 7];


// let resultado = numeros.map (function (numero) {
//     return numero * 2;
// }) 
// console.log(resultado);


function triple(num) {
    return num * 3;
    
}

let resultado2 = numeros.map (numero => triple(numero));
console.log(resultado2);

let numeropar = numeros.filter(numero => numero % 2 !== 0);
console.log(numeropar);

let resta = function (a,b){
    return a +b;
} 


function sumarNumeros() {
    let suma = 0;
    for (let i = 0; i <= 100; i++) {
        suma += i;
    }
    return suma;
}

console.log(sumarNumeros()); // Esto imprimirá 5050



let bolas = ['perro', 'gato', 'elefante', 'foto', 'per', 'dinosaurio'];

let resultadobolas = bolas.map(bola => bola.lenght > 5)
    console.log( resultadobolas);
