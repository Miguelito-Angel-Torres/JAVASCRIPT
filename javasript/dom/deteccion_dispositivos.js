const d = document;
const n = navigator;
const ua = n.userAgent;
export default function userDeviceInfo(id){
    const $id = d.getElementById(id);
    //Crear objeto (direcciones o toma de decisiones)
    //Ayudaba detectar si el usuario visita desde un sistema operativo Movil
    const isMobile = {
        //Lo que va hacer es tratar de buscar si en la cadena de texto(ua)
        //encontro la palabra indica y va devolver en un array con propiedades del sistema operativo
        // i : indica que no importa con Mayus o Minuscula Expresion Regular
        android: () => ua.match(/android/i),
        ios:() => ua.match(/iphone|ipad|ipod/i),
        windows:() => ua.match(/windows phone/i),
        any:function(){
            return this.android() || this.ios() || this.windows();
        }
    };
    //Ayudaba detectar si el usuario visita desde un sistema operativo Para escritorio
    const isDesktop = {
        linux:() => ua.match(/linux/i),
        mac:()=>ua.match(/mac os/i),
        windows:()=>ua.match(/windows nt/i),
        any:function(){
            return this.linux() || this.mac() || this.windows();
        },
    };
    //Ayudaba detectar que navegador web estaba
    const isBrowser = {
        chrome:()=> ua.match(/chrome/i),
        safari:()=>ua.match(/safari/i),
        firefox:()=>ua.match(/firefox/i),
        opera:()=>ua.match(/opera|opera mini/i),
        ie:()=>ua.match(/msie|iemobile/i),
        edge:()=>ua.match(/edge/i),
        any:function(){
            return(
                this.ie()||
                this.edge() ||
                this.chrome() ||
                this.safari() ||
                this.firefox() ||
                this.opera()
            )
        }

    };
    console.log(ua);
    //console.log(isMobile.ios());
    //console.log(isMobile.android());
    //console.log(isMobile.any())
    console.log(isDesktop.any())
    //console.log(isBrowser.any())
    $id.innerHTML = `
    <ul>
        <li>User Agent:<b>${ua}</b></li>
        <li> Plataforma:<b>${isMobile.any()?isMobile.any():isDesktop.any()}</b></li>
        <li>Navegador:<b>${isBrowser.any()}</b></li>
    </ul>`;
    if(isBrowser.firefox()) {
        $id.innerHTML += `<p><mark>Este contenido solo se ve en Firefox</mark></p>`;
    }
    if(isBrowser.chrome()) {
        $id.innerHTML += `<p><mark>Este contenido solo se ve en Chrome</mark></p>`;
    }
    if(isDesktop.linux()) {
        $id.innerHTML += `<p><mark>Descarga nuestro sofware para Linux</mark></p>`;
        window.location.href = "https://www.youtube.com/watch?v=WHfyN411fd4&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=95";
    }
    /*Redirecciones*/
    
}