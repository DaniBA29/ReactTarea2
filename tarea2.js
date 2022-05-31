//Este se encarga de remplazar el array, con uno indicando que valor desea remplazar, y con cuál valor que se encuentra
//en el mismo array

var totn_array = ['totn','a','b','c','d','e'];

console.log(totn_array.copyWithin(5, 0, 1));


//En .every() verifica que en un array por ejemplo, todos los elementos cumplan con la condición
// Este retorna true si la condición se cumple para todos los elementos,
// y retorna falso si alguno de los elementos no cumplen con la condición.
// Esta función no se ejecuta para elementos vacíos, y tampoco cambia el array original

const ages = [32, 33, 16, 40];

ages.every(checkAge)

function checkAge(age) {
  return age > 18;
}

//El método .flat, se encarga de aplanar un array, para que este quede sin ninguna dimensión.
const numbers = [['1', '2'], ['3', '4',
                     ['5',['6'], '7']]];
  
const flatNumbers= numbers.flat(Infinity);
console.log(flatNumbers);

//El método Object.entries () devuelve una matriz de pares propios de una propiedad enumerable [key, value] de un objeto dado

var obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]
