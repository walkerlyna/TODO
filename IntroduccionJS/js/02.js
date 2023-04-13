

// productos.forEach(function (producto) {
//     console.log(producto)
// })
// // console.log(productos)

// const saber = productos.some(producto => producto.nombre === 'Teclado')
// console.log(saber);

// const sumar = productos.reduce((total, objetos) => total + objetos.precio, 0)
// console.log(sumar);

// const filtrar = productos.filter((producto) => producto.precio > 199)
// console.log(filtrar);

// const learn = trabajo => console.log(`Estoy aprendiendo como generar ${trabajo}`)

// learn('1000$ por segundo');

// const rol = "tanque";

// if ( rol === "ataque") {
//     console.log(`El rol que elegiste es ataque`)
// } else {
//     console.log(`El rol que elegiste fue otro`)
// }

// const productos = [
//     { nombre: 'PC Gamer', precio: 2000 },
//     { nombre: 'Teclado', precio: 50 },
//     { nombre: 'Audifono', precio: 200 },
//     { nombre: 'Mouse', precio: 100 },

// ]

// const numeros = [0,2,4,7,12,27];
// const operacion = numeros.map(n1 => n1 +2);


// console.log(numeros);
// console.log(operacion);


// const arreglo1 = productos.map( product => product.nombre);

// console.log(arreglo1);

// for (let i = 0; i < productos.length; i++) {
//     console.log(productos[i].precio);
    
// }


// for (let i = 0; i <=10; i++ ){
//     if(i % 2 === 0){
//         console.log(`El numero ${i} es PAR`)
//     } else {
//         console.log(`El numero ${i} es IMPAR`)
//     }
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(`El numero ${i} es ${i % 2 === 0 ? 'PAR' : 'IMPAR'}`);
//   }

// for (let i = 0; i < productos.length; i++) {
//     console.log(productos[i].nombre);
    
// }

// function sumar(a, b) {
    //     return a + b;
    //   }
    
    // const guardarvalor = sumar(22, 5);
    
    // console.log(guardarvalor);
    
    
    

// function Constructor(placamadre, procesador, ram, disponible){
//     this.placamadre = placamadre;
//     this.procesador = procesador;
//     this.ram = ram;
//     this.disponible = disponible;
// }

// function Cliente(nombre, apellido, edad){
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
// }

// const primeraPC = new Constructor('AM727', 'i9-14200', '64GB Ram', true);
// const segundaPC = new Constructor('AM29', 'AMD RYZEN 7200', '128TB RAM', false);
// const terceraPC = new Constructor('AM22', 'AMD RYZEN 7200', '128TB RAM', true);

// const Cliente1 = new Cliente('Juan', 'Pérez', 22);
// const Cliente2 = new Cliente('Pedro', 'Fernandez', 24);



// console.log(primeraPC);
// console.log(segundaPC);
// console.log(terceraPC);

// console.log(Cliente1);
// console.log(Cliente2);



// Constructor.prototype.formatearProducto = function () {
//     return `El producto ${this.placamadre} tiene ${this.ram} y se encuentra ${this.disponible} en el mercado`
// }

// Cliente.prototype.mostrarInfo = function () {
//     return `La persona ${this.nombre} con apellido ${this.apellido}, tiene ${this.edad} años`
// }



// console.log(terceraPC.formatearProducto());

// console.log(Cliente2.mostrarInfo());

class Login {
    constructor(nombre, apellido, edad, saldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.saldo = saldo;
    }

    eliminarEdad() {
        return `La persona ${this.nombre} ${this.apellido} tiene $ ${this.saldo} en su cuenta`;
    }

    agregarSaldo(cantidad) {
        this.saldo += cantidad;
        return `Se agregó $ ${cantidad} a la cuenta de ${this.nombre} ${this.apellido}. Saldo actual: $ ${this.saldo}`;
    }

    quitarSaldo(cantidad2) {
        this.saldo -= cantidad2;
        return `Se descontó $${cantidad2} a la cuenta de ${this.nombre} ${this.apellido}. El saldo actual es de: $${this.saldo}`
    }
}

const Persona1 = new Login('Juan', 'Pérez', 25, 2000);
console.log(Persona1.eliminarEdad()); // muestra "La persona Juan Pérez tiene $ 2000 en su cuenta"

const saldoAgregado = Persona1.agregarSaldo(500);
console.log(saldoAgregado); // muestra "Se agregó $ 500 a la cuenta de Juan Pérez. Saldo actual: $ 2500"

console.log(Persona1.eliminarEdad()); // muestra "La persona Juan Pérez tiene $ 2500 en su cuenta"


const saldoDescontado = Persona1.quitarSaldo(800);
console.log(saldoDescontado);






