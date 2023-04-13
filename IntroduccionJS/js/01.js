var miPrimera = 'hi world';

var laCucaracha = 5,
    theLeon = 'El leon',
    nutria = 'Nutria';

console.log(miPrimera, laCucaracha);

console.log(nutria);



// Tipos de datos

for (let i = 0; i < 1000; i++) {
  console.log('sorry babu');
}



const producto = 'El producto';

// cuantas palabras es el string
console.log(producto.length);


// indexof (en qué posicion está lo que se busca, 0+ existe -1 no existe)
console.log(producto.indexOf('1'));

// Includes (lo mismo de arriba pero muestra true or false)
console.log(producto.includes('producto'))

let numero;

numero = Math.random();
numero = Math.round(Math.random() * 50);
numero = Math.abs(-2.7);
numero = Math.pow(12, 3);
numero = Math.sign(-2);
numero = Math.trunc(127.24);

console.log(numero);



const nombre = 'Luis';
const correo = 'soto@gmail.com';

// Concatenacion
console.log("Nombre Cliente: " + nombre + " Email: " + correo);

// Template Strings - String Literals
console.log(`Nombre Cliente: ${nombre} Email: ${correo}`);

const objeto = {
  primervalor : 'Luis',
  segundovalor : 30,
  año : 2000 
}

const objeto2 = {
  metro : '1m',
  pulgada : '1pulg'
}

console.log(objeto);

console.log(objeto.año);

const {primervalor} = objeto;
const {año} = objeto;

console.log(primervalor)
console.log(año)

const nuevoObjeto = { ...objeto, ...objeto2}

console.log(nuevoObjeto);









