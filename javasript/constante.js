// Para que esta constante se exporte para otro archivo que yo quiera:
export const Pi = Math.PI;
export let us = "Mar";
// Export Objeto:
function s(a,b){return a + b};
function r(a,b){return a - b};
export const aritmetica = {
    s,
    r
};
// Para import variable por default
//const pa = "qers";
//export default pa;
//Que se Import por defecto(Automaticamente): Es decir cuando llamar a al archivo
// Solamente se puede una sola exportacion por Default
//function sa(){console.log("Modu")}
export default class Saludar{
    constructor(){
        console.log("ds")
    }
}

