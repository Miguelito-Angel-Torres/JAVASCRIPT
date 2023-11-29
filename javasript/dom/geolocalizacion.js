const d = document;
const n = navigator


export default function getGeolocation(id){
    const $id = document.getElementById(id);
    const options = {
        //Opciones Importante
        //Decir que el dispositivo trate que hacer la mejor lectura posible
        enableHighAccuracy: true,
        //Cuanto tiempo va estar esperando la respuesta para tomar la lectura
        tinmeout:5000,
        //Q cada ves que tome una lectura que no tenda referencia la lectura anterior
        maximunAge:0
    };
    const success = (position) => {
        let coords = position.coords
        console.log(position);
        $id.innerHTML = `<p>Tu posicion actual es:</p>
                        <ul><li>Latitud:<b>${coords.latitude}</b></li>
                            <li>Longitud:<b>${coords.longitude}</b></li>
                            <li>Precision:<b>${coords.accuracy}</b> metros</li>
                        </ul>
                        <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">Ver en Google Maps</a>`
    };
    const error =(err)=>{
        $id.innerHTML = `<p><mark>Error ${err.code}: ${err.message}</mark></p>`
        console.log(`Error ${err.code}: ${err.message}`);
    };
    //Para contener ubicacion actual
    n.geolocation.getCurrentPosition(success,error,options);

}