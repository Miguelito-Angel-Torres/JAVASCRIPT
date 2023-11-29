
const d = document;
const ls = localStorage;

export default function darkTheme(btn,classDark){
    // classDark una clase que va quitar o poner
    const $themeBtn = d.querySelector(btn);
    //Necesito un lista de elemento que tenga ese atributo ("data-dark");
    //Cuando quiero aplicar estilo por un tipo de atributo
    const $selectors = d.querySelectorAll("[data-dark]");
    //console.log($selectors)
    let moon = "🌙";
    let son = "☀️"

    const LightMode = ()=>{
        $selectors.forEach(el =>el.classList.remove(classDark));
        $themeBtn.textContent = moon;
        ls.setItem("theme","light")
    }
    const darkMode = () =>{
        $selectors.forEach(el => el.classList.add(classDark));
        $themeBtn.textContent = son;
        ls.setItem("theme","dark")
    }

    d.addEventListener("click",e=>{
        if(e.target.matches(btn)){
            //console.log($themeBtn.textContent);
            if($themeBtn.textContent === moon){
                darkMode();
            }else{
                LightMode();
            }
        }
    })
    d.addEventListener("DOMContentLoaded",e=>{
        // Debemos que preguntar si existe una variable de tipo localStorage,que es lo que va estar
        // evaluando,controlando el darkTheme
        if(ls.getItem("theme") === null){
            //Asignar un nueva variable al LocalStorage
            ls.setItem("theme","light");
        }
        // Si la variable de localStorage que se llama theme su valor es igual a light
        //entonces tendriamos que ejecutar el codigo para poner el tema claro
        if(ls.getItem("theme") === "light"){
            LightMode();
        }
        if(ls.getItem("theme") ==="dark"){
            darkMode();
        }
        
    })
    
}
//LocalStorage : Nos permite almacenar una variable en el disco duro del usuario en este caso 
// cada negavador lo guarda en alguna seccion , en este caso al guardalo la configuracion en modo
// oscuro en el local storage , a la siguente que vistmaos o recargamos el navegador, el modo oscuro tendria que conservarse