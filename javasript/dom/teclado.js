const d = document;
export function shortcuts(e){
    console.log(e.type);
    console.log(e.key) // El valor es la tecla presionada
    // En el objeto del Evento ("keydown","keyup","keypress"),hay una propiedad llamada "keycode": que tiene como valor un codigo de la tecla presionada
    console.log(e.keyCode) //El valor es un codigo que tiene cada tecla presiona
    console.log(e.ctrlKey) // El valor es false (Si no presionas ctrl) Son propiedad que tiene el objeto
    console.log(e.shiftKey) // El valor es false (Si no presionas shiflt) Son propiedad que tiene el objeto
    console.log(e.altKey) // El valor es false (Si no presionas alt)
    console.log(e);

    if(e.key === "a" && e.altKey){
        console.log("Teclado")
    }
}

//Variables Para el Movi:
let x =0;
let y=0;

export function moveBall(e,ball,stage){
    const $ball = d.querySelector(ball);
    const $stage =d.querySelector(stage);
    // getBoundingClientRect() devuelve un objeto con propiedades que hace referencia a sus medidas y distancia 
    const limitsball = $ball.getBoundingClientRect();
    const limitsStage = $stage.getBoundingClientRect();
    //console.log(e.keyCode);
    //console.log(e.key);
    //console.log(limitsball,limitsStage);
    switch(e.keyCode){
        //Izquierda
        case 37:
            if(limitsball.left> limitsStage.left){x--;
            e.preventDefault();}
            break;
        //Derecha
        case 39:
            if(limitsball.right < limitsStage.right){x++;
            e.preventDefault();}
            break;
        //Arriba
        case 38:
            if(limitsball.top > limitsStage.top){y--;
            e.preventDefault();}
            break;
        //Abajo
        case 40:
            if(limitsball.bottom < limitsStage.bottom){y++;
                e.preventDefault();}
            break;
        default:
            break 
    }
    $ball.style.transform = `translate(${x*10}px,${y*10}px)`;
    //Colisiones detectar cuandos dos objetos se tocan
}
