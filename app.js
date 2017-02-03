//"use strict"
///arguments
var arguments = 10;

function miFuncion(a, b, c) {
    var suma = a + b + c;
    if (isNaN(suma)) {
        console.error("miFuncion necesita 3 números");
    } else {
        console.log("Suma = " + suma);
    }
}

miFuncion(7, 3, -56, "Pedro");

//Sobrecarga de operadores
"No existe sobrecarga de operadores"

//Polimorfismo
function determinaDato(a) {
    if (a === undefined) {
        console.log("Tipo no definido. No sé qué hacer!!");
    } else if (typeof a == "string") {
        console.log("Tipo texto, lo muestro:", a);
    } else if (typeof a == "boolean") {
        console.log("Tipo booleano, lo invierto:", !a);
    } else if (typeof a == "number") {
        console.log("Tipo numérico, le sumo 1:", a += 1);
    } else if (typeof a == "function") {
        console.log("Tipo función. La invocamos:", a());
    } else if (typeof a == "object") {
        console.log("Tipo objeto. No hago nada:", a);
    } else {
        console.error("Tipo objeto NO controlado:", a, "(" + typeof a + ")");
    }
}

determinaDato("Fernando");

//Funciones conterxto
var n = 4;

function creaFunciones() {
    var n = 0;
    var a = [];

    for (n = 1; n <= 10; n++) {
        a.push(
            (function(n) {
                return function() {
                    console.log(n);
                }
            })(n)
        );
    }
    return a;
}

var ar = creaFunciones();
console.log(ar[0]());
console.log(ar[1]());
console.log(ar[2]());

//Objeto number

let A = 12.123456879;
let B = new Number(22);
let R = undefined;

R = A.toFixed(20);

console.log("R:" + R);

//Objeto boolean

var b1 = new Boolean("false"); // true

b1 = new Boolean(0);
console.log("b1.value: " , b1.value);
console.log("b1.valueOf(): " , b1.valueOf());

if (b1.valueOf())
{
  console.log("Ejecutado!!");
}

//Objeto string

var tx = new String("Mariano Garcia Lorenzo");
console.log(tx.substring(0, tx.indexOf(" ")));

var atx = tx.split(" ");
console.log(atx, atx.length);

 //Objeto fecha

 var d1 =  new Date(2017, 0, 1, 26, 70, 456, 1);

 console.log(d1);

console.log("Año:" , d1.getFullYear());
console.log("Mes:" , d1.getMonth());
console.log("dia:" , d1.getDate());
console.log("Hora:" , d1.getHours());
console.log("Minuto:" , d1.getMinutes());


 console.log(d1.getTime());
 var d2 = new Date(d1.getTime());

console.log(d1.getTime());
console.log(d1.setDate(32));

Date.prototype.sumarDias = function (_numDias){
  this.setDate( this.getDate() + _numDias ) ;
  return this;
}

console.log(d1);
console.log(d1.sumarDias(4));

//Objeto Math

var n1 = 10.456789
console.log(Math.round ( n1 * 100) / 100 );

function randomEntre (min, max)
{
  return Math.floor( Math.random() * ( max - min + 1) + min);

}

for (var i = 1; i < 10; i++){
  console.log (randomEntre (1,6));
}

//Expresiones regulares
var texto = "Hola domingo"
var r1 = RegExp("dom");
var r2 = /dom/;

console.log (texto.match( /^Ho/));
