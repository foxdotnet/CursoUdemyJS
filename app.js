console.warn("Hola");
console.info("LLueve");
console.error("Cuidao!!");

var a = undefined;
console.error(a == null);

//JS Asíncrono ?

function imprimir() {
    for (var i = 0; i < 10   ; i++) {
        console.log("Prueba");
    }
}

function hacerAlgo() {
    console.log('Hace algo');
}

imprimir();


//Tipos primitivos
var nombre = "Domingo";
var edad = 47;
var casado = true;
var departamento = null;
var salario = undefined;

//Tipo objetos
var usuario1 = {
    nombre: "Pilar",
    edad: 47,
    casado: true,
    departamento: null,
    salario: undefined,
    apellidos: "Jimeno",
    direccion: {
        poblacion: "08800 L'Hospitalet",
        calle: "C/ San Juan",
        numero: 12,
        puerta: "2º 1ª",
    },

    generaDir: function() {
      return this.nombre + " " + this.apellidos + "\n" + this.direccion.calle + ", " + this.direccion.numero  + " " +this.direccion.puerta + "\n" + this.direccion.poblacion;
    },
    enviarCartas: true,
};

console.log(usuario1);
if (usuario1.enviarCartas)
{
  console.log(usuario1.generaDir());

}

//Por valor y por referencia

var usuario2 = usuario1;
usuario1.direccion.puerta = "Bajos";
usuario2.nombre = "María Pilar";
usuario2["apellidos"] = "Smith";
  console.log(usuario1.generaDir());

usuario1.poblacion = {
  cp : 08830,
  localidad: "Badalona",
  provincia: "Barcelona",
  pais: "España",
}

console.log(usuario1.generaDir());


var campo = "direccion";
console.log("Campo:" + campo + " = " + usuario1[campo].calle);
