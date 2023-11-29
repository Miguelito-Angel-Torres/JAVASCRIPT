import hamburgerMenu from "./dom/menu_hamburguesa.js";
import { digital,alarm } from "./dom/reloj.js";
import { shortcuts } from "./dom/teclado.js";
import {moveBall} from "./dom/teclado.js"
import countdown from "./dom/cuenta_regresiva.js";
import scrollTopButton from "./dom/botom_scroll.js";
import darkTheme from "./dom/tema_oscuro.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import responsiveTester from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/deteccion_dispositivos.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import getGeolocation from "./dom/geolocalizacion.js";
import searchFilters from "./dom/filtro_busqueda.js";
import draw from "./dom/sorteo.js";
import slider from "./dom/carrusel.js";
import scrollSpy from "./dom/scroll_espia.js";
import smartVideo from "./dom/video_inteligente.js";
import contactFormValidations from "./dom/validaciones_form.js";
import speechReader from "./dom/narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded",e=>{
    //console.log(e)
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digital("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("../assets/2051_mobile-rington.mp3","#activar-alarma","#desactivar-alarma");
    //El nombre del selector
    countdown("countdown","August 26,2022 16:13:19","Feliz Día");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia("youtube","(min-width:1024px)",`<a href="https://www.youtube.com/watch?v=BHIoRrPdNJI" target="_blank" rel="noopener">Ver Video</a>`,`<iframe width="560" height="315" src="https://www.youtube.com/embed/BHIoRrPdNJI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
    responsiveMedia("gmaps","(min-width:1024px)",`<a href="https://goo.gl/maps/kpQDpw2y1TP7VTT49" target="_blank" rel="noopener">Ver Mapa</a>`,`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125022.3417524742!2d-77.1131146!3d-11.69808285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105d5451df56977%3A0xc8b24208cd77794!2zQW5jw7Nu!5e0!3m2!1ses!2spe!4v1661883133329!5m2!1ses!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)
    responsiveTester("responsive-tester")
    userDeviceInfo("user-device");
    webCam("webcam");
    getGeolocation("geolocation")
    searchFilters(".card-filter",".card")
    draw("#winner-btn",".player")
    slider();
    scrollSpy();
    smartVideo();
    contactFormValidations()
});

//Evento "keydown" Es Cuando presione la Tecla
//Evento "keyup" Es Cuando Soltamos la Tecla
//Evento "keypress" Mientras la Tengas Presionada la Tecla es cuando se va ejecutar

d.addEventListener("keydown",e=>{
    //shortcuts(e);
    moveBall(e,".ball",".stage");



})

darkTheme(".dark-themen-btn","dark-mode");
networkStatus();
speechReader();
/*d.addEventListener("keyup",e=>{
    shortcuts(e);
})*/
/*d.addEventListener("keypress",e=>{
    shortcuts(e);
})*/



//Herramienta Online https://formsubmit.co/


