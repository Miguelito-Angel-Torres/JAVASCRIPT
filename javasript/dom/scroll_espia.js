const d = document;

export default function scrollSpy(){
    //Intersection Observer 
    // A que me interesa observar a las secciones que voy a scrolear
    const $sections =d.querySelectorAll("section[data-scroll-spy")
    console.log($sections);


    const cb = (entries)=>{
        //console.log("entries",entries);
        entries.forEach(entry => {
            //console.log("entry",entry);
            const id = entry.target.getAttribute("id")
            //console.log(id)
            if(entry.isIntersecting){
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
                //console.log(i)

            }else{
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
            }
        })
    }


    const observer = new IntersectionObserver(cb,{
        //root
        //rootMargin :"-250px"
        threshold :[0.5,0.75],
    });
    //console.log(observer);
    //RECUERDE observer la variable que tiene en IntersectionObserver
    //Por cada seccion le vamos a decir observer y le ejecutamos el metodo observe
    //y va recibir el objeto(El mismo elemento que esta recorriendo)
    $sections.forEach(el => observer.observe(el));



    
}