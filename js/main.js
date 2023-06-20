"use strict";
//20. Una tienda ofrece un descuento del 15% sobre el total de la compra durante el mes de octubre. Dado un mes y un importe, calcular cuál es la cantidad que se debe cobrar al cliente.
// let mes : any = prompt("Introduce el mes en el que estamos.");
// let precio : number = Number(prompt("Introduce el precio total."));
// mes.toLowerCase();
// if(mes == "octubre"){
//     let descuento : number = precio - (precio * (15 / 100));
//     //let precioTotal : number = precio - descuento
//     console.log(`El precio final con el descuento es de: ${descuento}`)
// }else{
//     console.log(`El precio final es de: ${precio}`)
// }
//21. Realizar un algoritmo que, dado un número entero, visualice en pantalla si es par o impar. En el caso de ser 0, debe visualizar “el número no es par ni impar” (para que un número sea par, se debe dividir entre dos y que su resto sea 0).
//22. Modificar el algoritmo anterior, de forma que, si se teclea un cero, se vuelva a pedir el número por teclado (así hasta que se teclee un número mayor que cero) (recuerda la estructura mientras).
// let num : any = Number(prompt("Nº: "));
//     const ParImpar = (num : any) : any => {
//         if(num % 2 === 0 && num > 0){
//             console.log("Es par.");
//         }else if(num % 2 !== 0 && num > 0){
//             console.log("Es impar.");
//         }else if(num == 0){
//             while(num <= 0){
//                 num = Number(prompt("Nº: "));
//             }
//             ParImpar(num);
//         }else{
//             console.log("Esto es un error.");
//         }
//     }
// ParImpar(num);
//23. Algoritmo que nos diga si una persona puede acceder a cursar un ciclo formativo de grado superior o no. Para acceder a un grado superior, si se tiene un título de bachiller, en caso de no tenerlo, se puede acceder si hemos superado una prueba de acceso.
// let bach : any = prompt("¿Tienes bachiller? (True/False)");
// bach.toLowerCase();
// if(bach === "true"){
//     console.log("Puedes entrar.");
// }else{
//     let prueba : any = prompt("¿Superaste el exámen? (True/False)");
//     prueba.toLowerCase()
//     if(prueba === "true"){
//         console.log("Puedes entrar.");
//     }else{
//         console.log("!!!NO PUEDES PASAR¡¡¡");
//     }
// }
//24. Desarrollar un algoritmo que nos calcule el cuadrado de los 9 primeros números naturales (recuerda la estructura desde-hasta).
// for(let  i = 0; i < 9 ; i++){
//     console.log(i*i)
// }
//25. Se pide representar el algoritmo que nos calcule la suma de los N primeros números naturales. N se leerá por teclado (no tenemos por qué llamar a la variable N, podemos llamarla como queramos).
// let num : any = Number(prompt(""));
// for(let i = 0; i < num; i++){
//     console.log(i + i);
// }
//26. Se pide representar el algoritmo que nos calcule la suma de los N primeros números pares. Es decir, si insertamos un 5, nos haga la suma de 6+8+10+12+14.
// let num : number = Number(prompt(""));
// let suma : number = 0;
// const esPar = (n : number) : boolean => {
//     if(n % 2 === 0){
//         return true
//     }else{
//         return false
//         }
// }
// for(let i = 0; i <= num * 2; i++){
//     if(esPar(i)){
//         suma += i;
//         console.log(suma)
//     }
// }
//27. Dada una secuencia de números leídos por teclado, que acabe con un –1, por ejemplo: 5,3,0,2,4,4,0,0,2,3,6, 0,...1; Realizar el algoritmo que calcule la media aritmética. Suponemos que el usuario no insertará números negativos.
// let arrayNumeros : number[] = []
// let numero : number = 0;
// while (numero !== -1){
//     numero = Number(prompt("Introduce un número"))
//     arrayNumeros.push(numero)
// }
// arrayNumeros.pop()
// let suma : number = 0
// for(let i = 0; i < arrayNumeros.length; i++){
//     suma += arrayNumeros[i]
// }
// let media : number = suma / arrayNumeros.length
// console.log(media)
//28. Teniendo en cuenta que la clave es “eureka”, escribir un algoritmo que nos pida una clave. Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos nos mostrará un mensaje indicándonos que hemos agotado esos 3 intentos (Recomiendo utilizar un interruptor). Si acertamos la clave, saldremos directamente del programa.
// let claveVerdadera : string = "eureka";
// let clave : any = prompt("Introduce la contraseña.");
// let intentos : number = 3
// const comprobarClave = (contraseña : any) => {
//     if(contraseña === claveVerdadera){
//         console.log("Saliendo...")
//     } else if(intentos > 1){
//         intentos -= 1
//         contraseña = prompt(`Introduce otra contraseña, te quedan ${intentos} intentos.`)
//         comprobarClave(contraseña)
//     }else{
//         console.log("Agotaste los 3 intentos...LLamando a la poli...")
//     }  
// }
// comprobarClave(clave)
//29. Algoritmo que lea números enteros hasta teclear 0, y nos muestre el máximo, el mínimo y la media de todos ellos. Piensa cómo debemos inicializar las variables.
// let arrayNumeros : number[] = []
// let suma : number = 0
// let numero : any = prompt("")
// parseInt(numero)
// while (numero !== 0){
//     arrayNumeros.push(numero)
//     numero = prompt("Introduce un número")
//     console.log(arrayNumeros)
// }
// let numeroMayor = arrayNumeros[0]
// let numeroMenor = arrayNumeros[0]
// for(let i = 0; i < arrayNumeros.length; i++){
//     console.log(arrayNumeros[i])
//     if(arrayNumeros[i] > numeroMayor){
//         numeroMayor = arrayNumeros[i]
//     }
//     if(arrayNumeros[i] < numeroMenor){
//         numeroMenor = arrayNumeros[i]
//     }
//     suma += arrayNumeros[i];
// }
// let media : number = suma/arrayNumeros.length
// console.log(`El número más grande es el: ${numeroMayor}, el más pequeño es: ${numeroMenor} y la media de todos los números es: ${media.toFixed(2)}`)
//30. Algoritmo que visualice la cuenta de los números que son múltiplos de 2 o de 3 que hay entre 1 y 100.
// for(let i = 0; i <= 100; i++){
//     if(i % 2 == 0 || i % 3 == 0){
//         console.log(`- ${i}`)
//     }
// }
