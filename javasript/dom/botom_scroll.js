
const d = document;
const w  = window;

export default function scrollTopButton(btn){
    //Antes de dar click al botton es detectar el scroll y que distancia de la barra
    // en este caso del scroll top(del scroll vertical) queremos que ese elemento se muestre
    const $scrollBtn = d.querySelector(btn);
    w.addEventListener("scroll",e =>{
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
        if(scrollTop > 600){
            $scrollBtn.classList.remove("hidden")
        }else{
            $scrollBtn.classList.add("hidden")
        }

        //console.log(w.pageYOffset);
        //console.log(d.documentElement.scrollTop);
        
    });
    d.addEventListener("click",e=>{
        if(e.target.matches(btn)){
            //console.log(w.scrollTo)
            //Metodo de Windows (scrollTo): recibe una serie de opciones en un objeto
            // que  tiene3 muy importante(behavior: El comportamiento si quiero que sea con una animacion)
            // top inidicando que el scroll vaya a su top original
            w.scrollTo({
                behavior:"smooth",
                top:0,
                //left:0
            })
        }
    });


    
}