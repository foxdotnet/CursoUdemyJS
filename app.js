////Arreglos []
var a = [1,2,6,4,5,"a", "b", "c"];
var r;
var tmp = a.concat([]);

function impMensaje(txt){
  console.info(txt + "\n"+ "---------------")
  console.log("a:" , a);
  console.log("tmp:" , tmp);
  console.log("r:" , r, "(" + typeof r + ")");

  a = tmp.slice();
}

//map

var r = a.map( function(elm){
  elm *= elm;
  return elm;
}
);
impMensaje("map");


//join
r = a.join("|");
impMensaje("join");

//split
a = r.split("|");
impMensaje("split");

//push
 r = a.push(6,7,{nom:'Paco',app:'Leon'});//número con la longitud del array resultante
impMensaje("push");

//unshift
r = a.unshift(-1,0,{nom: 'Andrea',app:'Montes'}, function(){var marca = "Citroen"; console.log(marca)});
impMensaje('unshift');

//toString
r = a.toString();
impMensaje("toString");

//reverse
r = a.reverse(); // Ojo que ahora a = a (misma referencia)
impMensaje("reverse");

//pop
r = a.pop(); //quita el último elemento y lo rorna
impMensaje("pop");
a.push(r);// lo volvemos a meter :D

//splice (empalmar)
r = a.splice(2, 2, "x", "y");
impMensaje("splice");

//slice (trozo)
r = a.slice(1, 3);
impMensaje("slice");

//concat
r = a.concat(["Pedro", "Juan"]);
r.push("Zoilo");
impMensaje("concat");
