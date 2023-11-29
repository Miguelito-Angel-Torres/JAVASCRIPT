console.log("Elemento del Documento")
//EL Objeto Padre y de Windows cuelga apis del navegador
console.log(window);
console.log(document);
console.log(document.head)
console.log(document.body)
console.log(document.documentElement)
console.log(document.doctype) // Devuelve el tipo de documentacion
console.log(document.charset) // El Juego de Caracters que tiene el documento
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets) // devuelve la colecion de estilo que tiene enlazada al documento
console.log(document.scripts)
/*setTimeout(()=>{
    console.log(document.getSelection().toString()); // Devuelve lo que Seleccionastes convirtiendole en texto
},3000);*/
//document.write("<h2>Xs</h2>")
//Nodo ,Elementos y Selectores
//Nodos: Los comentarios de html,las etiquetas, los texto como tal para las etiquetas textuales como los parrafo, encabezado
// Nodotetexto:Es el texto que tiene dentro de una etiqueta
//NodoElemento : Es una etiqueta de html en particular
//Metodo para capturar los elemento
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));
//Recibe como parametros un selector valido de css:id,clase,etiqueta html
//Pero solamente trae el primer selector el tipo que le hagas especificado, que halla encontrado el document
console.log(document.querySelector("li"));
//querySelectorALL() : TRAE TODOS LOS SELECTRO QUE LE INDICAS
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach(el => console.log(el));
console.log(document.querySelectorAll(".card")[1]);
console.log(document.querySelectorAll("#menu li"));
//DOM: Atributos y Data-Attributes
//Como interactuar con los atributos de la etiqueta de html
console.log(document.documentElement.lang);
//getAttribute function para traer el valor de una propiedad , es mejor asegura que te traiga lo que pides pero solo del html
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href)
console.log(document.querySelector(".link-dom").getAttribute("href"))
// Establecer un nuevo valor a los propiedaes , forma para cambiar el valor de una propiedad
document.documentElement.lang = "en";
//Sirve para asignar valor de una propiedad cambiandole el valor que esta visible, sino esta visible lo agrega al html
document.documentElement.setAttribute("lang","es-MX");
const $linkDom = document.querySelector(".link-dom");
console.log($linkDom)
// Tambien sirve para asingar valor a un apropiedad y lo agrega al html
// propiedad con valor noopener evitamos cierto tipo de hackeo, indicando que no hay una dependencia la ventana que estamos abriendo, con la ventana original
$linkDom.setAttribute("rel","noopener");
$linkDom.setAttribute("target","_blank");
// remover atributo de el htmls
$linkDom.removeAttribute("target")
console.log(document.querySelector(".link-dom").getAttribute("target"))
// function para indicar con un true o false , si se encuentra el atributo de la etiqueta
//console.log($linkDom.hasAttribute("rel"));
// Data - Attributes
console.log($linkDom.getAttribute("data-description"))
console.log($linkDom.scrollTop)
// dataset, devuelve un map(sea la mapa) , con las propiedades que hallas creado
console.log($linkDom.dataset);
console.log($linkDom.dataset.description);
$linkDom.setAttribute("data-description","Modelo de Objeto del Documento")
console.log($linkDom.dataset);
$linkDom.dataset.description = "Marixa"
// Dom Estilos y Variable Css
console.log($linkDom.style);
console.log($linkDom.getAttribute("style"));
console.log($linkDom.style.backgroundColor);
console.log(window.getComputedStyle($linkDom));
console.log(getComputedStyle($linkDom).getPropertyValue("color"));
$linkDom.style.setProperty("text-decoration", "none");
//console.log($linkDom.style.textdecoration);
$linkDom.style.setProperty("display","block");
//console.log($linkDom.style.width)
$linkDom.style.width = "50%";
$linkDom.style.textAlign = "center";
$linkDom.style.marginLeft = "auto";
$linkDom.style.marginRight  = "auto";
$linkDom.style.padding = "1rem";
$linkDom.style.borderRadius = "4rem";
console.log($linkDom.style);
console.log($linkDom.getAttribute("style"));
//Variable CSS -Custom Properties CSS
// Donde ver variables con $ indica que soy variable que almacena una referencia en el DOOM
const $html = document.documentElement;
//console.log($html)
 $body = document.body;
 //Estilos determinado , y los estilos que has puesto
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yelow-color");
//console.log($html)
console.log(varDarkColor,varYellowColor);
//$body.style.backgroundColor = varDarkColor;
//$body.style.color = varYellowColor;
$html.style.setProperty("--dark-color","#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
//$body.style.setProperty("background-Color",varDarkColor)
console.log($body.style.backgroundColor);
//Clases CSS
const $card = document.querySelector(".card");
console.log($card)
// El valor del atributo
console.log($card.className);
// Los valores del atributo en un array (Pero no es un array en si)
console.log($card.classList);
//console.log($card.getAttribute("class"));
//Devuelve un bolean, en caso en tener la clase el valor que le indiquemos
console.log($card.classList.contains("rotate-45"))
//Agregacion de Clases
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"))
//console.log($card.classList);
$card.classList.remove("rotate-45")
// Metodo que funciona al mismo tiempo de add o remove ,como un interruptor o palanca
$card.classList.toggle("rotate-45"); // Si no la tiene hace la funcion add
$card.classList.toggle("rotate-45"); // Y si la tiene hace la funcion remove
$card.classList.toggle("rotate-45");
// Un metodo que reemplaza el valor de la clase
//$card.classList.replace("rotate-45","rotate-135")
// Al mismo tiempo puedes agregar valores de una clase para hacer funcion de agregar o quitar
$card.classList.add("opacity-80","sepia")
// Texto y Html:
//Como interactuar con el contenido textual , contenido html o elemento
const $whatsIsDom = document.getElementById("que-es");
let text = `
    <p>
    El Modelo de Objetos del Documento(<b><i>Dom-Document Objetc Model</i></b>) es un API para
    documentos HTML y XML
    </p>
    <p>
    Ester provee una presentacion estructural del documento,permitiendo modificar su contenido y 
    presentacion visual mediante codigo JS.
    </p>`;

// InnerText para reemplazar contenido Textual a un elemento (No reconoce la Etiqueta de Html y le imprima como si fuera texto y respeta las tabulaciones)
// InnerText no es parte del estandar
//$whatsIsDom.innerText = text;
//console.log($whatsIsDom)
//TextContent realiza lo mismo de InnerText , pero saca las tabulaciones(En una sola linea)
$whatsIsDom.textContent = text;
//Si quieres que el contenido se renderiza como codigo html
// innerHTML reemplazar lo que tenga contenido ese nodo , y insertar contenido html
$whatsIsDom.innerHTML = text;
// Remplzar el elemento del Doom
// El elemento <p> va reemplaza por el elemento que esta haciendo referencia por el nuevo  elemento (tiene un <></> que indica que va estar todo el elemento)
$whatsIsDom.outerHTML = text;
//Dom traversing:Recorriendo el Dom
// Es una serie de propiedades el api del doom para recorrer los elemento (pero tomando referencia a un nodo) Son para elementos
// Enfocado al elemento
const $cards = document.querySelector(".cards");
console.log($cards);
console.log($cards.children); //Te da los Hijos elemento que esta dentro del Padre
console.log($cards.children[0])//Te da los Hijo dependiendo la Posicion que esta dentro del Padre
console.log($cards.parentElement)//Te da como valor el elemento Padre del hijo(Body)
console.log($cards.firstChild) // Te da como valor el  primer valor nodo(Espacio) del elemento
console.log($cards.lastChild) // Te da como valor el ultimo valor nodo(Espacio) del elemento
console.log($cards.firstElementChild); // Te da como valor el primer elemento que esta dentro del padre cards, indica que devuelve el primer hijo
console.log($cards.lastElementChild); // Te da como valor el ultimo elemento del elemento padre(cards)
console.log($cards.previousElementSibling); // Te da como valor el elemento hermano antes del elemento en si (cards)
console.log($cards.nextElementSibling) // Te da como valor el elemento hermano siguente  del elemento en si (cards) 
console.log($cards.childNodes); // Te da como valor los hijos nodos que esta dentro del padre
// Es un metodo: Busca el ancestro,devuelve el padre mas cercano
console.log($cards.children[0].closest("section"))
console.log($cards.closest("body"));
//Creando Elementos y Fragmentos
//Creacion de elemento dinamicamente(figure,etc..)
//Metodo del doom que crea un elemento , devuelve un elemento creado 
const $figure = document.createElement("figure");
 $img = document.createElement("img")
 $figcaption=document.createElement("figcaption");
//Creacion nodo de texto 
 $figcaptiontext =document.createTextNode("Animals");
 $cardx = document.querySelector(".cards");
 $figure2 = document.createElement("figure");


 $img.setAttribute("src","https:placeimg.com/200/200/animals")
 $img.setAttribute("alt","Animals")
 $figure.classList.add("card")
//Metodo appendChild: para agregar elemento o nodo
$figcaption.appendChild($figcaptiontext);
$figure.appendChild($img);
$figure.appendChild($figcaption)
$cardx.appendChild($figure);

$figure2.innerHTML = `
    <img src="https:placeimg.com/200/200/animals" alt="Tech">
    <figcaption>Animals</figcaption>
`;
$figure2.classList.add("card");
$cardx.appendChild($figure2);
///////////////crear varios elementos dinamicamente en un elemento
const esta = ["Pri","Ve","Oto"];
 $ul = document.createElement("ul");

document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

/*esta.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
});*/

/*for (let i=0; i < esta.length; i++) {
    const $li = document.createElement("li");
    $li.textContent = esta[i];
    $ul.appendChild($li);
}*/
// Como tal no estas creando un nodo html , para visualizacion es efectiva.
$ul.innerHTML ="";
esta.forEach(el => {
    $ul.innerHTML+= `<li>${el}</li>`;
});
// renderizar la vista de varios Elementos(Creacion de fragmento dinamico) Realiza una sola insertacion
const me = ["En","Fe","Mar","Ab","Mayo"];
 $ul3 = document.createElement("ul");
//Creacion de Fragmento para el document
 $fragment = document.createDocumentFragment();
me.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    //Agregar los elementos al fragmento
    $fragment.appendChild($li);
});
document.write("<h3>Meses Años</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3)
///////Templates HTML etiqueta nueva(otra forma interactuar con el doom)
//Es un modelo ha seguir en cual estructura el contenido html que quieras que mediante javascript lo convierta dinamico, el template no renderiza en el doom
const $cards2 = document.querySelector(".cards");
//Indicando que voy a entrar a su cntenido del elemento
 $template = document.getElementById("template-card").content;
 $fragment = document.createDocumentFragment();
 cardContent = [
    {
        title:"Tecnologia",
        img:"https:placeimg.com/200/200/tech",
    },
    {
        title:"Animales",
        img:"https:placeimg.com/200/200/animals",
    },
    {
        title:"Arqutectura",
        img:"https:placeimg.com/200/200/arch",
    }
 ];
cardContent.forEach(el =>{
    $template.querySelector("img").setAttribute("src",el.img);
    $template.querySelector("img").setAttribute("alt",el.title);
    $template.querySelector("figcaption").textContent = el.title;
    // Clonar dicho nodo(Indica clonar el elemento) Metodo para clonar nodo,pasar un true indicando que va copiar toda la instructura interna,false copia las etiquetas
    let $clone = document.importNode($template,true);
    $fragment.appendChild($clone);
 });
$cards2.appendChild($fragment);
//////////////////// Modificando Elemento(Old Style)
const $cards3 = document.querySelector(".cards");
 $newCard = document.createElement("figure");
 //$cloneCards = $cards3.cloneNode(true);

 $newCard.innerHTML = `
    <img src="https:placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
 `;
 $newCard.classList.add("card");
 // Reemplazar un elemento (Metodo)
 //$cards3.replaceChild($newCard,$cards.children[0]);
 // Metodo insertar antes del nodo(elemento) que hacemos referecia:
 //$cards.insertBefore($newCard,$cards.children[0]);
 // Metodo que remueve un elemento
 //$cards.removeChild($cards.lastElementChild);
 //$cards.removeChild($cards.children[0]);
 //Metodo para clonar dinamicamente
 //document.body.appendChild($cloneCards);
/// Modificando Elemento (Cool Style)
//Insertar Elemento 
/* insertAdjacent...
    .insertAdjacentElement(position,elemento);  
    .insertAdjacentHtml(postition,html); Hace referencia al contenido de un elemento que se convierte en html
    .insertAdjacentText(position,html);
    Posiciones: beforebegin(hermanao anterior),
    afterbegin(primer hijo),
    beforeend(ultimo hijo),
    afterend(hermano siguiente);

*/
const $cards4 =  document.querySelector(".cards");
 $newCard1 = document.createElement("figure");
let $contecard = `
    <img src="https:placeimg.com/200/200/any" alt="Any">
    <figcaption></figcaption>
    `;
    /*$newCard1.innerHTML = `
    <img src="https:placeimg.com/200/200/any" alt="Any">
    <figcaption>Any</figcaption>
 `;*/
$newCard1.classList.add("card");
// Insertacion a Html: (innerHtml)
$newCard1.insertAdjacentHTML("beforeend",$contecard)
// Insertacion a Text : (TextContent)
$newCard1.querySelector("figcaption").insertAdjacentText("beforeend","Any")
// "beforebegin" indica insertar elemento como hermano anterior , el segundo parametro el elemento que deseas insertar
// cards3:Nodo de referencia
//$cards3.insertAdjacentElement("beforebegin",$newCard);
//$cards4.insertAdjacentElement("afterbegin",$newCard1);
//$cards3.insertAdjacentElement("beforeend",$newCard);
$cards3.insertAdjacentElement("afterend",$newCard);
///// Metodos prepend: Agrega como hijo primero
//$cards4.prepend($newCard1); //Agrega como primer hijo del elemento
//$cards4.append($newCard1); //Agrega como ultimo hijo del elemento
//$cards4.before($newCard1) // before Agrega como hermano anterior del elemento
//$cards4.after($newCard1); // after Agrega como hermano siguiente del elemento
/////////////////Manejadores de Eventos DOOM
///Para poder controlar las acciones del usuario, y definir ciertas comportamiento del documento que suceda en cierto momento o cuando se cumpla 
// algunas condiciones
//Las funciones que se ejecuta en un evento se conoce como "Event Handler" o trad los Manejadores de Evento,Observador o Esuchadores
// 3 maneras de definir los eventos
// Esta function se comvierte en un manejador de evento
//Cuando una function se convierte en un manejador de evento, es decir una function que se ejecuta en un Evento,nosotros
// podemos acceder a un Objeto especial que es el evento en si, y eso podemos acceder la palabra reservada "event"
function hola(){
    alert("XMX");
    console.log(event);
}

//type.- es el tipo de evento q se desencadeno
//target.- es el elemento que origino el evento
//Dentro de target estan todos los eventos y propiedades q se pueden usar por dicho elemento y los q estan en null son eventos q no tienen definida dicha función en dichos eventos. En cambio vemos el evento onclick q si tiene definida la funcion holaMundo
//Eventos Semanticos....
const $eventoSenantico = document.getElementById("evento-semantico");
 $eventoMultiple = document.getElementById("evento-multiple");
//Importante  : cuando definamos un evento como semántico igualamos el evento semántico al nombre de la funcion pero sin (), xq los () hacen q cuando se cargue el Navegador se va a ejecutar
// Se le dice manejador semántico xq va teniendo una coherencia en la manera como la vamos definiendo , se asigna una sola function
$eventoSenantico.onclick = hola;
//Funcion anonima o arrow function // reemplaza al primero ,
/*$eventoSenantico.onclick = function(e){
    //Toda función q se convierte en un Manejador de Eventos, es decir una función q se ejecuta en algun momento en un evento no puede recibir parámetros, el único parámetro q recibe es el evento en sí, que lo podemos obtener con la palabra 'event' o en algunos casos abreviar con la letra 'e'
    console.log(e); //representa al evento
    console.log(event);
    alert("Manejador de Evento Semantico")
};*/
$eventoSenantico.onclick = ()=>{
    saludar();
}
//Manejadores Multiples
// Si deseamos asignar varias funciones a un mismo elemento, tenemos el método .addEventListener() que nos permite levantar un Escuchador de Eventos
//Ejeuctar varias funciones que hayan definido en diferentes manejadores al mismo evento
//este método .addEventListener() recibe varios parámetros, pero sólo nos enfocaremos en 2:
// 1° Nombre de evento
// 2° Función q se va a ejecutar, pero sin parentesis
//Se puede asignar varias functiones a un mismo elemento para un mismo evento
$eventoMultiple.addEventListener("click",hola);
//Manera de Arrow function
$eventoMultiple.addEventListener("click",(e) =>
{
    alert("Manejador de EVENTOS multiples");
    console.log(e.type);
    console.log(e.target)
});
//Eventos con Parametros y Remover Eventos
function saludar(nombre = "Desconocid@"){
    console.log(`Hi ${nombre}`)
    //Acceder evento nativamente
    console.log(event)
};
//Crear una function anonima que la function anomima sea la manejadora de eventos y aca ejecutar directamente las functiones
$eventoMultiple.addEventListener("click",() =>{
    //console.log(event)
    // La function saludar ya es la manejadora del  evento, la manejadora de evento es arrow functions entonces tengo que poner los parantesis
    saludar();
    saludar("Xmk");
});
// Ponemos eliminar eventos de un elemento, solo se puede hacer con manejadores multiples
// Remover el evento Asociado de un elemento
const $eventoRemover = document.getElementById("evento-remover");
// Evento dblclick : Para doble click
const removerDobleClick = (e) =>{
    console.log(`Removiendo el evento de tipo ${e.type}`)
    console.log(e);
    // La hora que lo ejecute con addEventListener immediatamente, adentro se podria removerlo
    $eventoRemover.removeEventListener("dblclick",removerDobleClick);
    //$eventoRemover.disabled = true;
    e.target.disabled = true;
}
$eventoRemover.addEventListener("dblclick",removerDobleClick);
// Dom:Flujo de Eventos(Burbuja y Captura)
// Hay dos manera  en que nosotros podemos trabajar en como se va propagando el evento
//Una vez que el evento se origina tiene propagacion a lo largo del arbol del doom,por defecto esa propagacion se va dando del elemento
//mas interno , hacia al elemento mas externo en este caso es el document y esa fase se llama fase de burbuja
const $divEventos = document.querySelectorAll(".eventos-flujo div");
//console.log($divEventos);
/*function flujoEventos(e){
    //el this hace referencia al elemento que contiene el evento
    console.log(`Hola te saluda ${this.className} el click lo origino ${e.target.className}`)
};*/
//Agregar evento en manera dinamica a un elemento
// Se ve la progacion del evento del elemento (div)
/*$divEventos.forEach(div =>{
    //Fase de burbuja por defecto, que va del elemento mas interno al externo
    //div.addEventListener("click",flujoEventos);

    //div.addEventListener("click",flujoEventos,false);
    //Fase de Captura vamos al elemento mas externo  al elemento mas interno
    //div.addEventListener("click",flujoEventos,true);
    //La fase de captura y burbuja esta relacionado con el tercer parametro que es un objeto,que contiene propiedades que hace referencia a la fase
    div.addEventListener("click",flujoEventos,{
        
        //Si activamos true  ,activamos la captura que hace la inversa
        capture:false,
        // Propiedad que indica que el evento se ejecute una sola vez,true indicando que el evento se va ejecutar una sola vez
        //No importa cual es el objeto que origno el evento ,solamente se va ejecutar una sola vez
        once:true,
    })
})*/
// stopPropagation & PreventDefault ( Aplica para cualquier evento)
// Como detener esa propagacion , porque va ver veces a lo mejor no requeriemos de que el evento se propague hacia los elemetos hijos o padres
// Y solamente que se ejecute una sola vez la programacion de la function manejadera, y tambien va ver veces que hay ciertos elementos
// del doom que tiene comportamientos o eventos ya por defautl
// Prevenir esa accion por defecto que tiene los elementos del doom
const $linkEvento =document.querySelector(".eventos-flujo a")
function flujoEventos1(e){
    //el this hace referencia al elemento que contiene el evento
    console.log(`Hola te saluda ${this.className} el click lo origino ${e.target.className}`);
    // Metodo del evento : este metodo hace eliminar(DETENER LA PROPAGACION) la propagacion (en la situacion de Captura :Es donde se esta ejecutando la propacion siempre es en el comienzo)
    e.stopPropagation();
}

/*$divEventos.forEach(div =>{
    //div.addEventListener("click",flujoEventos1,true)
    div.addEventListener("click",flujoEventos1)
})*/

/*$linkEvento.addEventListener("click",e =>{
    console.log("AMIX")
    //El evento preventDefault(): Lo que hace es justamente cancelar la accion que tenga por defaut el elemento,
    //Si fuera un formualrio,accion por defecto es que se procese
    // Se detiene y cancela el comportamiento por dejfautt
    e.preventDefault()
    e.stopPropagation();
});*/
//Delegacion de Eventos
function flujoEventos2(e){
    //el this hace referencia al docuement
    console.log(`Hola te saluda ${this} el click lo origino ${e.target.className}`);
    // Metodo del evento : este metodo hace eliminar(DETENER LA PROPAGACION) la propagacion (en la situacion de Captura :Es donde se esta ejecutando la propacion siempre es en el comienzo)
    //e.stopPropagation();
}

// Una forma eficaz para colocar evento a los elementos ,(busca la condiciencia)
document.addEventListener("click",(e)=>{
    console.log("Click en",e.target);
    //Vamos a buscar la condicencia de algun selector en un condicional,y dentro del condicional ejecutamos la programacion necesitamos para cada elemento
    // del domque tengamos que asignar el evento click
    // Metodo matches() sirve para buscar un selector valido (Indica buscar el elemento) que devuelve turue o false
    //console.log(e.target.matches("eventos-flujo a"))
    if(e.target.matches(".eventos-flujo a")){
        console.log("AMIX");
        e.preventDefault()};
    if(e.target.matches(".eventos-flujo div")){ 
        flujoEventos2(e)
    }
});
////BOOM :propiedades y Eventos:
// son Metodos, Objetos que cuelga directamente de windows,que hace referencia a la ventana del navegador(es decir al objeto windows)
/*window.addEventListener("resize",e =>{
    console.clear();
    console.log("Evento Resize")
    //Esta propiedad hace referencia al tamaño del ancho en el viewport de la ventana del windows
    console.log(window.innerWidth);
    console.log(window.innerHeight); // largo del viewport de la ventana
    // es el tamaño que tiene la ventana de nuestro navegador 
    console.log(window.outerWidth) //Ancho
    console.log(window.outerHeight) //Largo
    console.log(e)
});*/

//Evento del Scroll de Ventana
/*window.addEventListener("scroll",e =>{
    console.clear();
    console.log("Evento Scroll");
     //Hace refderencia a cada uno de la barra de esplamiento,nos da en pixeles y significa cuando se aleja  de la barra
    // de esplazamiento vertical del margin top ,barra horizontal cuanto se aleja del margin izquierdo
    console.log(window.scrollY); // vertical
    console.log(window.scrollX); // horizontal
    console.log(e)
});*/
//Evento se realiza cuando carga el window
// Tambien podemos identificar en que coordenada en nuestra pantalla se empieza a dibujar la ventana del navegador , para esto usamos ScrenX y ScrenY 
/*window.addEventListener("load",e => {
    console.log("Evento Load");
    console.log(window.screenY); // vertical
    console.log(window.screenX); // horizontal
    console.log(e);
});*/
//Evento se realiza cuando carga el DOOM
/*document.addEventListener("DOMContentLoaded",e =>{
    console.log("Evento DOMContentLoaded");
    console.log(window.screenY); // vertical
    console.log(window.screenX); // horizontal
    console.log(e);
})*/
// BOM -Metodos:
//window.alert("Alerta")
//window.confirm("Confirmacion")
//prompt("Aviso")
const $btnAbrir = document.getElementById("abrir-ventana");
 $btnCerrar = document.getElementById("cerrar-ventana");
 $btnImprimir = document.getElementById("imprimir-ventanas");
let ventana;

$btnAbrir.addEventListener("click",(e)=>{
    ventana = window.open("https://www.youtube.com/watch?v=EqLVoofiXVs&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=79");
    console.log(ventana)
});
$btnCerrar.addEventListener("click",(e)=>{
    ventana.close();
});
$btnImprimir.addEventListener("click",(e)=>{
    window.print();
    
});
//BOM :Objetos:Url,historial ,navegador
/*console.log("Objeto URL(Location)");
console.log(window.location) // El metodo Assign que permite reemzplazar una url con otra
console.log(location.origin); // Nos da el valor el origin que es la ruta que se origina
console.log(location.protocol); // Nos el protocol de la pagina que es http:
console.log(location.host); // Nos da el host de la pagina web con puerto 
console.log(location.hostname); // Nos da el host de la pagina web pero sin el puerto(direccion ip)
console.log(location.port);// Nos da el puerto
console.log(location.href);// Nos da la url completar incluyendo el nombre del archivo
console.log(location.hash); // Nos da el valor de la url que esta despues de un #
console.log(location.search); // Almacena y no da de valor de los parametros que colocamos en la url
console.log(location.pathname); */  // Es el archivo que estoy consultando
//Metodo que sirve para asignar url
//location.reload();
/*console.log("Objeto Historial(Histtory)")
console.log(history);
console.log(history.length)*/ //Guarda y Nos la Longitud cuantas paginas hemos visitado posteriormente
// Metodo para navegar la pagina para atras y adelante (Son como las flechitas de la izuquierda del search)
//history.back : Con este indicamos cuantas paginas queremos regresar 
//history.forward : Este hace lo contrario osea cuantas paginas queremos ir adelante 
//history.go : Con este indicamos a donde queremos ir , si le indicamos -1 significa la pagina antes de otra , su valor puede ser positivo ( Para paginas adelante )
//o negativo. ( para ir a una pagina de atras)
/*console.log("Objeto Navegador(navigator)");
console.log(navigator);
console.log(navigator.connection); // Nos da informacion  si estamos conecta, cierta informacion de la conexion del usuario
console.log(navigator.geolocation); //: api de google para que nos muestre la ubicacion
console.log(navigator.mediaDevices); // los da de valor un objeto de los dispositivos,indicando si estan conectado(camara,microfono)
console.log(navigator.mimeTypes); // Nos da los tipos de formato que acepta el navegador
console.log(navigator.onLine); // Detecta la conexion (true indica conexion , false indica no conexion)
console.log(navigator.serviceWorker); // es una api que nos ayuda convertir en un sitio web , en una aplicacion instalable
console.log(navigator.storage); // Es el api de almacenamiento
console.log(navigator.usb); // Detecta dispotivo usb
console.log(navigator.userAgent);*/ // nos da informacion sobrela plataforma que se conecta a nuestra aplicacion
////////// DOM: Ejercicios Prácticos  dom-ejercicios.html


















