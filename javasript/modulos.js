//Llamar a otro archivo de JavaSript
//Cuanto esta en la misma carpeta es punto / siempre
// Ahora si puede usar la const importada
import Saludar from "./constante.js";
import pa from "./constante.js";
import sa, {Pi,us,aritmetica as calculo} from "./constante.js";
console.log("Archivos Modulos");
let Resultado= Pi + 1000000;
console.log(Resultado,us);
//let sumar = s(5,4);
//console.log(sumar);
//console.log(r(15,10));
console.log(calculo.r(5,5));
console.log(calculo.s(5,5));
//sa();
//console.log(pa)
let saludo = new Saludar();
saludo;
////////////////////////////////////////////////////////////////

