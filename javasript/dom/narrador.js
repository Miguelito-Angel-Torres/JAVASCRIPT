const d = document;
const w = window;

export default function speechReader(){
    const $speechSelect = d.getElementById("speech-select");
    console.log($speechSelect)
    const $speechTextarea = d.getElementById("speech-text");
    const $speechBtn = d.getElementById("speech-btn");
    const speechMessage = new SpeechSynthesisUtterance();

    //  console.log($speechMessage)

    let voices = [];

    d.addEventListener("DOMContentLoaded",e=>{
        //console.log(w.speechSynthesis.getVoices());
        //console.log(w.speechSynthesis);

        w.speechSynthesis.addEventListener("voiceschanged",e=>{
            //console.log(e);
            voices = w.speechSynthesis.getVoices();
            console.log(voices);

            voices.forEach(voice => {
                const $option = d.createElement("option");
                $option.value = voice.name;
                $option.textContent = `${voice.name} - ${voice.lang}`;

                $speechSelect.appendChild($option);

            });

        });
    });
    //evento change: cada que nosotros cambiemos una opcion del select pues necesitamos cambiar la voz
    d.addEventListener("change",e=>{
        if(e.target === $speechSelect){
            // Indicar que vamos a buscar una voz
            speechMessage.voice = voices.find(voice => voice.name == e.target.value);
            //console.log(speechMessage);

        }
    });
    d.addEventListener("click",e=>{
        if(e.target === $speechBtn){
            speechMessage.text = $speechTextarea.value;
            w.speechSynthesis.speak(speechMessage);
        }


    });
}