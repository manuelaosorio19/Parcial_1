function crearServicio({imgurl, titulo, descripcion, vermas}){
    return `
       <div class="card">
       <img class="" src=${imgurl.toString()} alt="Card image cap"
       <div class= "card-body"
           <h3>${titulo}</h3>
           <p>${descripcion}</p>
           <a href=${vermas} class="btn btn-primary" target="_blank">Saber más...
           </a>
       </div>
    `;
}
function crearModal(){
    return `
    <div class= "contenedor-modal">
       <div class="modal">
           <h2>Bienvenidos</h2>
           <button id= "botton-cerrar">Cerrar</button>
       </div>

    </div>
    `;

}

function crearServicioConObjetos({titulo, descripcion}){
    const contenedorServicio = document.createElement('div');
    const parrafo = document.createElement('p');
    parrafo.innerText = descripcion;
    const heading = document.createElement('h3');
    heading.innerText = titulo;
    contenedorServicio.appendChild(heading);
    contenedorServicio.appendChild(parrafo);
    contenedorServicio.classList.add("servicio")
    return contenedorServicio;
    

}

const data = [
    {imgurl: "imagenes/bmw1.png", titulo:"BMW M240i Coupé Premium 2023", descripcion: `DEl vehículo Coupé por su parte, proviene de la palabra francesa couper que significa cortar. Su carrocería proviene de 2 mitades que al unirlas, forman una apariencia única. La primera mitad incluye capó y motor y la segunda el espacio del conductor y pasajero junto al maletero.`
    ,vermas:"https://bmwshop.autogermana.com.co/bmw-m240i-coupe-premium-2023/p"},
    {imgurl: "imagenes/bmw2.png",titulo:"BMW Z4 M40i Premium 2023", descripcion:`Control dinámico de estabilidad (DSC) con contenido ampliado Diferencial de bloqueo electrónico Freno de estacionamiento electromecánico Sistema antibloqueo de los frenos (ABS).`
   , vermas:"https://bmwshop.autogermana.com.co/z4-z4-m40i-premium-2023/p"},
    {imgurl: "imagenes/bmw4.png",titulo:"BMW X3 M40i Premium 2023", descripcion:`A la hora de mantener al X3 como un líder en su segmento, BMW ha tenido que esforzarse a fondo para hacer que supere a sus rivales directos. Para ello, ha tenido que desarrollar una gama nueva de motores lo suficientemente potentes y eficientes para poder impulsar a este coche.`
    ,vermas:"https://bmwshop.autogermana.com.co/bmw-x3-m40i-premium-2023/p"},
    {imgurl: "imagenes/bmw3.png",titulo:"BMW Serie 8 Coupé M", descripcion:`Automóviles representan el pináculo del lujo de conducir: una elegante traducción de genes M para usar a diario, tanto en la carretera como en el circuito. Disponible en tres variantes: el BMW M850i xDrive Coupé ofrece una síntesis excepcional de comodidad, prestaciones y eficiencia.`
   , vermas:"https://www.bmw.com.co/es/all-models/m-series/m8-coupe/2019/bmw-m8-coupe-descubre.html"},
    {imgurl: "imagenes/bmw5.png", titulo:"BMW 2 SERIES M240I", descripcion:`6 cilindros BMW TwinPower Turbo (un turbo) / 2,998 cm³ / 387 hp (5,800 – 6,500 rpm) / 500 Nm (1,900 – 5,000 rpm). Aceleración: 0-100 km/h: 4.7 segundos.Transmisión: Automática deportiva de 8 velocidades con función Launch Control.` 
    ,vermas:"https://bmwshop.autogermana.com.co/bmw-m240i-coupe-premium-2023/p"},
    {imgurl: "imagenes/bmw6.png",titulo:"BMW SERIE 8 CONVERTIBLE", descripcion:`El BMW Serie 8 Convertible inspira con toda la gama de elementos de dinámica y la agilidad de un vehículo deportivo ambicioso. El motor de gasolina de ocho cilindros BMW TwinPower Turbo de alto rendimiento` 
   , vermas:"https://www.bmw.com.co/es/all-models/8-series/convertible/2018/bmw-serie-8-convertible-informacion.html#tab-0"}

];
const contenedor = document.querySelector('.contenedor-servicios');
function mostrarServicios(){
for(let servicio of data){
    const{descripcion} = servicio;
    console.log(descripcion);
    const servicioHtml = crearServicio(servicio);
    // contenedor.appendChild(servicioHtml);
    contenedor.insertAdjacentHTML('beforeend',servicioHtml );

}
document.body.insertAdjacentHTML("beforeend",crearModal());
const botonCerrar = document.getElementById("botton-cerrar");
const modal =document.querySelector(".contenedor-modal");
botonCerrar.addEventListener('click',() =>modal.remove());
}
export{mostrarServicios}