const d = document;

export default function contactFormValidations(){
    const $form = d.querySelector(".contact-form");
    const $inputs = d.querySelectorAll(".contact-form [required]");
    console.log($inputs);
    $inputs.forEach(input =>{
        const $span = d.createElement("span");
        $span.id = input.name;
        $span.textContent = input.title;
        $span.classList.add("contact-form-error","none");
        input.insertAdjacentElement("afterend",$span);
    });

    d.addEventListener("keyup",e=>{

        if(e.target.matches(".contact-form [required]")){
            let $input = e.target;
            let pattern = $input.pattern || $input.dataset.pattern;
            console.log($input);
            //console.log(pattern);
            if(pattern && $input.value !== ""){
                //console.log("El input tiene patron");
                let regex = new RegExp(pattern);
                // exec metodo : indica si no cumple con la expresion regular
                return !regex.exec($input.value)
                ? d.getElementById($input.name).classList.add("is-active")
                : d.getElementById($input.name).classList.remove("is-active")} 
            if(!pattern){
                //console.log("El input no tiene patron");
                return $input.value === "" 
                ? d.getElementById($input.name).classList.add("is-active")
                : d.getElementById($input.name).classList.remove("is-active");
                
            }
        }  
       
    })

    d.addEventListener("submit",(e)=>{
        alert("Formulario")
        //e.preventDefault();
        //Hacer una peticion
        const $loader = d.querySelector(".contact-form-loader")
        console.log($loader)
        const $response = d.querySelector(".contact-form-response");

        $loader.classList.remove("none");
        setTimeout(()=>{
            $loader.classList.add("none");
            $response.classList.remove("none");
            $form.reset();

            setTimeout(()=>{
                $response.classList.add("none");
            },3000)
        },5000)


        //alert("Enviando Formulario")
    });
}