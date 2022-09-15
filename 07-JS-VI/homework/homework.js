// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
 
  //var nombreAlreves = nombre.split('');
  var arregloNombre = [];  
  arregloNombre[0] = nombre;
  var nombreprimeramayuscula = arregloNombre.map(function(elemento,indice){
          return elemento[0].toUpperCase() +  elemento.slice(1);
  })
 /* var nombredivido = nombre.split("");
  var nombreprimeramayuscula = nombredivido.map(palabra => {
    return palabra[0].toUpperCase() + palabra.slice(1);
})*/
return nombreprimeramayuscula.join("");
//return nombre[0].toUpperCase() + nombre.slice(1);
  //return nombreAlreves.join('');
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  cb(n1,n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  const suma = numeros.reduce(function(a,b){
    return a + b;
  })
  cb(suma);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  array.forEach(function(elemento,indice){
    cb(elemento);
  })
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var arregloNuevo = [];
  arregloNuevo.length = array.length; 
  array.map(function(elemento,indice){
    arregloNuevo[indice] = cb(elemento);
  })
  return arregloNuevo;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var filtrar = array.map(function(elemento,indice){
    return elemento[0].toUpperCase() +  elemento.slice(1);
    var arregloNuevo = [];
})

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
