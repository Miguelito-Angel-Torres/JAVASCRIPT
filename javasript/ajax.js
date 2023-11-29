//Peticiones asincronas:
//Objeto XMLHttpRequest de Ajax  (Lee Arcivos Publicas y Locales)
//Funcion autoejecutable
(()=>{
    const xhr = new XMLHttpRequest();
     $xhr = document.getElementById("xhr");
    //creacion de fragmento 
     $fragment= document.createDocumentFragment();


    //console.log(xhr   );

    //Evento readystatechange : Se ejecuta cuando detecta cualquier cambio de estado
    xhr.addEventListener("readystatechange", e =>{
        if(xhr.readyState !==4) return;
        console.log(xhr);
        console.log(xhr.responseText)
        if(xhr.status >=200 && xhr.status <300){
            //console.log("Exito")
            
            //$xhr.innerHTML = xhr.responseText
            let json = JSON.parse(xhr.responseText);
            //console.log(json);

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);
        }else{
            //console.log("Error")
            let message = xhr.statusText || "Ocurrio un error";
            $xhr.innerHTML = `Error ${xhr.status} : ${message}`
        }

        console.log("El mensaje cargara de cualquier forma")
    });

    //Abrir la petiicion , y establecer el metodo , y el recurso
    xhr.open("GET","https://jsonplaceholder.typicode.com/users");
    //xhr.open("GET","../assets/assets.json");
    //Enviar la Peticion
    xhr.send();

})();

// Ajax:Api Fetch
(()=>{
    const $fetch = document.getElementById("fetch");
    //creacion de fragmento 
     $fragment= document.createDocumentFragment();

    //Funcionamiento  Api Fecth
    //fETCH por defecto ya lleva el methodo GET
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
        //Convertir la propiedad body que es un "ReadableStream" hay viene el json"
        //console.log(res);
        //Convertir la respuesta a Json osea el "ReadableStream 
        // Devolver a la siguiente mecanismo then en formato de objetos 
        console.log(res);
        return res.ok?res.json(): Promise.reject(res);
    }).then(json =>{
        console.log(json);
        json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
        });

        $fetch.appendChild($fragment);

    })
    .catch(err => {
        //console.log(err)
        let message = err.statusText || "Ocurrio un error";
            $fetch.innerHTML = `Error ${err.status} : ${message}`
    })
    .finally(()=> 
        console.log("Ejecuta Finalmente de la Promesa Fetch"
    ));

})();

//Ajax:API Fetch + Async-Await
(()=>{
    const $fetchAsync = document.getElementById("fetch-async");
    //creacion de fragmento 
     $fragment= document.createDocumentFragment();

    async function getData(){
        try{
            let res = await fetch("https://jsonplaceholder.typicode.com/users");
             json = await res.json();

            //if(!res.ok){throw new Error("Ocurrio un Error al solicitar los Datos")}
            //throw es un return que manda el flujo al catch
            if(!res.ok) throw {
                status:res.status,
                statusText: res.statusText || "Ocurrio un error"
            }

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });
            $fetchAsync.appendChild($fragment);
            //console.log(json)
        }catch(error){
            //console.log("Estoy en el cacth",error);
            let message = error.statusText ;
            $fetchAsync.innerHTML = `Error ${error.status} : ${message}`
        }finally{
            console.log("Ejecuta Finalmente de la Promesa try ....cath")
        }
    }
    getData();
})();

//Ajax:Liberia Axios https://github.com/axios/axios
(()=>{
    const $axios = document.getElementById("axios");
    //creacion de fragmento 
     $fragment= document.createDocumentFragment();

    //Trabaja basada en Promesas
    // axios : Hace referencia a la libreria get: Metodo
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res =>{
        console.log(res);
        let json =  res.data
        json.forEach(el => {
            const $li = document.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
        });
        $axios.appendChild($fragment);
    })
    .catch(error =>{
        let message = error.response.statusText || "Ocurrio un error";
        $axios.innerHTML = `Error ${error.response.status} : ${message}`
        console.log(error.response)
    })
    .finally(() =>{
        console.log("Ejecuta independientemente del resultado Axios")
    });
})();

// AJAX: Librería Axios + Async-Await
(()=>{
    const $axios_async = document.getElementById("axios-async");
    //creacion de fragmento 
     $fragment= document.createDocumentFragment();

    //Trabaja basada en Promesas
    // axios : Hace referencia a la libreria get: Metodo
    
    async function getData(){
        try{
            let res = await axios.get("https://jsonplaceholder.typicode.com/users");
             json = await res.data;
            //console.log(res,json); 

            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });
            $axios_async.appendChild($fragment);

        }catch(error){
            let message = error.response.statusText || "Ocurrio un error";
            $axios_async.innerHTML = `Error ${error.response.status} : ${message}`
            //console.log(error.response)

        }finally{
            console.log("Esto se ejecutara independientemente del try-catch axios_async")
        }
    }
    getData();
    
})();

//Json server : Api falsa local de Tipo Rest (https://github.com/typicode/json-server)
// json-server -w -p 5000 assets/db,json