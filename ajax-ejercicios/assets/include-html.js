

document.addEventListener('DOMContentLoaded',e =>{
    //Esa funcion se va Ejecutar por cada elemento que traiga el data-atributo
    const includeHTML = (el,url) =>{


    }
    document.querySelectorAll("[data-include]")
    .forEach(el => includeHTML(el,el.getAttribute("data-include")));
    //const elemento = document.querySelectorAll("[data-include]");console.log(elemento);
    //https://www.youtube.com/watch?v=DGT6PEdVCXY&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=124


});