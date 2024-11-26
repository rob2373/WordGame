
const consejos=['Tus mejores puntuaciones se guardarán</br> en el apartado de records', 'Concéntrate en buscar las palabras </br> ignora la lista', 'Busca más de una palabra a la vez','Busca palabras “imposibles”', 'Amplía tu atención y mira toda la cuadrícula.', 'Intenta buscar en su lugar las dos o tres</br> últimas letras que aparecen juntas', 'No ignores las palabras que te resulten tontas']
document.addEventListener("DOMContentLoaded", () =>{
    aleatorio=Math.floor(Math.random()*6);
    console.log(aleatorio)
    switch(aleatorio)
    {
        case 0: document.querySelector("#consejo").innerHTML=consejos[0];
        break;

        case 1: document.querySelector("#consejo").innerHTML=consejos[1];
        break;
        case 2: document.querySelector("#consejo").innerHTML=consejos[2];
        break;
        case 3: document.querySelector("#consejo").innerHTML=consejos[3];
        break;
        case 4: document.querySelector("#consejo").innerHTML=consejos[4];
        break;
        case 5: document.querySelector("#consejo").innerHTML=consejos[5];
        break;
        case 6: document.querySelector("#consejo").innerHTML=consejos[6];
        break;
    }
    
})
