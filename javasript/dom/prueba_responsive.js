const d = document;

export default function responsiveTester(form){
    const $form = d.getElementById(form);
    let tester;
    console.log($form)
    console.log($form.direccion)
    console.log(window.open)

    d.addEventListener("submit",(e)=>{
        if(e.target === $form){
            //Cancelar la Accion por defecto (Para que no se procese)Enviar la Informacion
            // si no tiene el atributo accion que indica donde va informacion, el formulario se autoprocesa la pagina en la que se encuentre
            e.preventDefault();
            tester  = window.open($form.direccion.value,"tester",`innerWidth=${$form.ancho.value},
            innerHeight=${$form.alto.value}`);
            
        }
    })

    d.addEventListener("click",e=>{
        if(e.target === $form.cerrar){
            // La variable tester guarda la referencia de window.open
            tester.close();
        }
    })
}
