function crearColaborador({imgurl, nombre, cargo}){
    return `
    <div class="contenedor-principal">
    <div class="img-user">
        <img  class="user" src=${imgurl.toString()} alt="imagen usuario">
    </div>
    <h2 class="nombre">${nombre}</h2>
    <h2 class="nombre">${cargo}</h2>   
</div>
    `;
}

function crearModal(){
    return `
    <div class="contenedor-modal">
     <div class="modal">
         <h2>Bienvenido</h2>
         <button id="botton-cerrar">Cerrar</button>
     </div>
    </div>
    `;
}

const data = [
    {imgurl: "imagenes/img2.png", nombre:"Manuela Osorio Monsalve", cargo: `Gerente`},
    {imgurl: "imagenes/img1.png",nombre:"Andres Felipe Montoya Bedoya", cargo:`Desarrollador` },
    {imgurl: "imagenes/img3.png",nombre:"Mauro Rivero", cargo:`Ingeniero` }
];
const contenedor2 = document.querySelector('.contenedor-colaboradores');
function mostrarColaboradores(){
    for(let colaborador of data){
        const{nombre} = colaborador;
        console.log(nombre);
        const servicioHtml = crearColaborador(colaborador);
        // contenedor.appendChild(servicioHtml);
        contenedor2.insertAdjacentHTML('beforeend',servicioHtml );
}


}
export{mostrarColaboradores};