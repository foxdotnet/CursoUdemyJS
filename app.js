//Sección 2. Funciones
//"use strict"
var a = 30;
primeraFuncion();

function primeraFuncion() {
    //var a = 20;
    console.log("a:" + a);

};

//Valores de retorno
function imprimir(nombre, apellidos) {
    apellidos = apellidos || "";
    console.log(apellidos);
}


imprimir(false, {
    matricula: "1234AB",
    marca: 'Seat',
    modelo: "León"
});

function imprimirFN(fn) {
    fn();
}

imprimirFN(function() {
    console.log('Imprime func. anónima');
});

var miFuncion = function() {
    console.log('Imprime miFuncion');
}
miFuncion
imprimirFN(miFuncion);


//Valores de retorno

function obtenerAleatorio() {
    return Math.random();
}

function obtenerNombre() {
    return "Domingo";
}
console.log("Aleatorio:" + (obtenerAleatorio() + 10));

console.log("Nombre:" + obtenerNombre() + " Pérez");

function esMayor05() {
    return (obtenerAleatorio() > 0.5);
}

if (esMayor05()) {
    console.log('Es mayor 0.5');
} else {
    console.log('Es menor 0.5');
}

function crearPersona(nombre, apellidos) {
    return {
        nombre: nombre,
        apellido: apellidos
    }
}

console.log(crearPersona("Maria", "Luna"));

function crearFuncion(autor) {
    return function() {
        console.log("Me creó " + autor);
        return Date();
    }
}

var miFn = crearFuncion("Frank");
console.log(miFn());

////Funciones de primera clase

crearPersona.nombre = "Ana";
crearPersona.apply = "Maria";

console.log(crearPersona);

////Métodos y el objeto this
var persona1 = {
    nombre: "Carlos",
    apellidos: "Montero",
    dirPostal: {
        calle: "Av. Lugo, 12",
        piso: "2ª - 1ª",
        poblacion: "La Coruña",
        CP: "15003",
        pais: "España",
    },
    getNombre: function() {
        return this.nombre + " " + this.apellidos;

    },
    getDirPostal: function() {
        console.log(this);
        return `${this.nombre} ${this.apellidos}
    ${this.dirPostal.calle} ${this.dirPostal.piso}
    ${this.dirPostal.CP} ${this.dirPostal.poblacion}`;

    },
}
console.log("Dir. Postal: \n\n" + persona1.getDirPostal());

////Comando new y prototype

function Persona() {
    this.nombre = "Juan";
    this.apellidos = "Martínez";
    this.edad = 15;
    this.imprimirNombre = function() {
        return this.nombre + " " + this.apellidos
    }
}

Persona.prototype.esAdulto = function() {
    return (this.edad >= 18) ? "Adulto" : "Menor";
}

Persona.prototype.imprimirInfo = function() {
    return this.nombre + " " + this.apellidos + " {" + this.esAdulto() + "}"
};
var juan = new Persona();

console.log(juan.imprimirInfo());

////typeof, instanceof

function identifica(parametro) {
    if (parametro instanceof Persona) {
        console.log("identificado: " + parametro.imprimirInfo());
    } else {
        console.log("identificado: " + parametro);
    }
}

identifica(juan);
