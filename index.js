//Solicitar al usuario ingresar un numero.
let limit = parseInt(prompt('Ingresa cantidad de numeros a imprimir:'));
//Creamos la lista de numeros a imprimir.
let fibonacciList = [];

//Validamos que el numero sea un entero.
if ( isNaN(limit) ){
    alert('Ingresa un numero.');
} else {
    //Calcular la serie Fibonacci.
    //Inicializamos el primer numero
    let numberAfter1 = 0;
    //Inicializamos el segundo numero.
    let numberAfter2 = 1;
    //Almacenamos la suma de ambos numeros.
    let resultSumNumbers = 0;
    //Creamos el bucle para imprimir el numero la cantidad indicada x el usuario.
    for ( let i = 0; i < limit; i++ ){
        //Realizamos la suma de los primeros 2 numeros.
        resultSumNumbers = numberAfter1 + numberAfter2;
        //Insertamos el resultado de la suma al arreglo
        fibonacciList.push(resultSumNumbers);
        //Asignamos el valor del numero2 a numero1 para el proximo calculo
        numberAfter1 = numberAfter2;
        //Asignamos el valor del resultado a numero2 para el proximo calculo
        numberAfter2 = resultSumNumbers;
    }
    console.log(fibonacciList);
}