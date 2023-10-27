import { mostrarServicios } from "./servicios.js";
import { mostrarColaboradores } from "./colaboradores.js";
const verMas = document.querySelector("[Vermas]")


mostrarColaboradores();
mostrarServicios();


verMas.addEventListener('click' , () => {
    let cambio = document.getElementById('more');
    if(cambio.innerHTML =='Ver menos'){
        cambio.innerHTML = 'Ver mas'
        document.querySelector(".navbar2").style.display="none"; 
        document.querySelector("#seccion-dos").style.display="none"; 
        document.querySelector("#seccion-tres").style.display="none"; 
    }
    else{cambio.innerHTML ='Ver menos'
    document.querySelector(".navbar2").style.display="flex"; 
    document.querySelector("#seccion-dos").style.display="flex"; 
    document.querySelector("#seccion-tres").style.display="flex"; 
    

}
   
});

