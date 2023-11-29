const d = document;
const w = window;

export default function responsiveMedia(id,mq,mobileContent,desktopContent) {
    //mobileContent : Contenido Html que queremos ver a nivel movil
    // desktopContent : Contenido que queremos que se cargue dinamicamente en el texto
    // breakpoint guarda la media(de CSS)
    //El objeto matchMedia nosotros podemos asignarle un Listener no mas que es un Listener normal,
    // no es un addListener y ese listener estaria justamente revisando la mediaquery,cuando detecte
    //que la media ya no cumple pues estar haciendo el cambio de contenido
    let breakpoint = w.matchMedia(mq);
    //console.log(w.matchMedia)
    //console.log(breakpoint);
    //Cuando la mediaquery se cumpla devuelte un  true,no cumpla un false
    const responsive = (e) =>{
        if(e.matches){
            d.getElementById(id).innerHTML = desktopContent;
        }else{
            d.getElementById(id).innerHTML = mobileContent;
        }
        //console.log(e.matches);
    }
    //Reibe una funcion que estara evaluando la mediaquery
    breakpoint.addListener(responsive)
    responsive(breakpoint);

    //https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=91
}

