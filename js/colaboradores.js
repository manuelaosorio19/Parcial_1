function crearColaborador({imgurl, titulo, descripcion}){
    return `
    <div class="contenedor-principal">
    <div class="img-user">
        <img  class="user" src=${imgurl.toString()} alt="imagen usuario">
    </div>
    <h2 class="nombre">${titulo}</h2>
    <h2 class="nombre">${descripcion}</h2>   
</div>
    `;
}

function crearColaboradorConObjetos({titulo, descripcion}){
    const contenedorColaborador = document.createElement('div');
    const parrafo = document.createElement('p');
    parrafo.innerText = descripcion;
    const heading = document.createElement('h3');
    heading.innerText = titulo;
    contenedorColaborador.appendChild(heading);
    contenedorColaborador.appendChild(parrafo);
    contenedorColaborador.classList.add("colaborador")
    return contenedorColaborador;
    

}

const data = [
    {imgurl: "imagenes/img2.png", titulo:"Manuela Osorio Monsalve", descripcion: `Gerente`},
    {imgurl: "imagenes/img1.png",titulo:"Andres Felipe Montoya Bedoya", descripcion:`Desarrollador` },
    {imgurl: "imagenes/img3.png",titulo:"Mauro Rivero", descripcion:`Ingeniero` }
];
const contenedor = document.querySelector('.contenedor-colaborador');
function mostrarColaborador(){
    for(let colaborador of data){
        const{descripcion} = colaborador;
        console.log(descripcion);
        const colaboradorHtml = crearColaborador(colaborador);
        // contenedor.appendChild(servicioHtml);
        contenedor.insertAdjacentHTML('beforeend',colaboradorHtml );
}

document.body.insertAdjacentHTML("beforeend",crearModal());
const botonCerrar = document.getElementById("botton-cerrar");
const modal =document.querySelector(".contenedor-modal");
botonCerrar.addEventListener('click',() =>modal.remove());
}
export{mostrarColaborador};