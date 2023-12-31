const d = document;
const w = window;
export default function smartVideo(){
    //(IntersectionObserver & VisibilityChange)
    const $video = d.querySelectorAll("video[data-smart-video]");
    
    
    const cb = (entries) =>{
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                entry.target.play();
            }else{
                entry.target.pause();
            }

            w.addEventListener("visibilitychange",e=>d.visibilityState === "visible"?
            entry.target.play() : entry.target.pause()
            );
        })
    }

    const observer = new IntersectionObserver(cb,{
        threshold:0.5,
    });

    $video.forEach(el => observer.observe(el))
    


}