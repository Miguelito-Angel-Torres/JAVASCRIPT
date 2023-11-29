const d = document;

export default function searchFilters(input,selector){
    // selector: sobre que selector va ser la busqueda del texto
    d.addEventListener("keyup",e=>{
        if(e.target.matches(input)){
            //console.log(e.key);
            if(e.key === "Enter") e.target.value = "";

            d.querySelectorAll(selector).forEach((el)=>{
                //El metodo includes() va evaluar si existe en el textContent de cada una de las tarjetas
                (el.textContent.toLowerCase().includes((e.target.value).toLowerCase()))? el.classList.remove("filter")
                : el.classList.add("filter");
            });

        }
    })
}