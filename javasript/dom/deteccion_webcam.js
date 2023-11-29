const d = document;
const n = navigator;

export default function webCam(id){
    const $video = d.getElementById(id);
    console.log($video)
    //console.log(n.mediaDevices.getUserMedia);
    if(n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia(
            {video:true,
            audio:false,
            }).then((stream) => {
                console.log(stream);
                //Lo mando pero en manera de Object
                $video.srcObject = stream;
                $video.play();
            }).catch((err) => {
                $video.insertAdjacentHTML("beforebegin",`<p>¡Sucedio el siguiente error!:<mark>${err}</mark></p>`)
                console.error(`!Sucedio el sgt error!: ${err}`);
            });
    }

}
//https://www.youtube.com/watch?v=XDjpuBfkFi4&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=96