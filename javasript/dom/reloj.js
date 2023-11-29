const d = document;
export function digital(clock,btnPlay,btnStop){
    let clockTempo;
    d.addEventListener("click",e=>{
        if(e.target.matches(btnPlay)){
            clockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`
            }, 1000);
            e.target.disabled = true;
        }
        if(e.target.matches(btnStop)){
            clearInterval(clockTempo);
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnPlay).disabled = false;
        }
    })
}
export function alarm(sound,btnPlay,btnStop){
    let alarmaTempo;
    const $alarm = d.createElement("audio");
    $alarm.src = sound;
    d.addEventListener("click",e=>{
        if(e.target.matches(btnPlay)){
            alarmaTempo = setTimeout(() => {
                //Metodo play() del elemento (Audio),que reproduce el sonic de la propie src
                $alarm.play()
            }, 2000);
            e.target.disabled = true;
        };
        if(e.target.matches(btnStop)){
            clearTimeout(alarmaTempo);
            //Metodo pause() del elemento (Audio), que pause el sonido de la propie src
            $alarm.pause();
            //Que su valor sea 0 para que regrese a su origen
            $alarm.currentTime = 0;
            d.querySelector(btnPlay).disabled = false;
        }
    })
}

