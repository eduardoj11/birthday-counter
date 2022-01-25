function ejecutarContador(){
   // Definimos el tiempo de inicio en milisegundos 
    const cumpleaños = new Date(document.getElementById('date').value).getTime();
    if (cumpleaños != NaN) {
    const actualizador = setInterval(function(){

//Definimos el tiempo de ahora en milisegundos
    const tiempoActual = new Date().getTime();
    console.log(tiempoActual);

//Calculamos la diferencia entre el inicio y el tiempo actual;
    let tiempoRestante = cumpleaños - tiempoActual;
    console.log(tiempoRestante);

//Convertimos los milisegundos en segundos 1s = 1000 ms;
    tiempoRestante /=1000;
    console.log(tiempoRestante);

//Calculamos los dias restantes
    const dias = Math.floor(tiempoRestante/(60*60*24));
    console.log(dias);

//Calculamos las horas restantes
    const horas = Math.floor((tiempoRestante%(60*60*24))/(60*60));
    console.log(horas);

//Calculamos los minutos restantes
    const minutos = Math.floor((tiempoRestante%(60*60))/(60));
    console.log(minutos);

//Calculamos los segundos restantes
    const segundos = Math.floor(tiempoRestante%(60));
    console.log(segundos);

const time_output_zone = document.getElementById('time_output_zone');

//Agregamos los elementos HTML con el valor del tiempo al contenedor con el id contador
let resultado = document.getElementById('time_output_zone');
    time_output_zone.innerHTML = `
     <section class="output-main-container" id="output_main_container">
             <section class="output_single_container" id="output_single_container">
                 <div class="output_timer_container">
                    <span>${dias}</span> 
                 </div>
                 <span class="output_text">días</span>
             </section>
             <section class="output_single_container" id="output_single_container">
                 <div class="output_timer_container">
                    <span>${horas}</span> 
                 </div>
                 <span class="output_text">horas</span>
             </section>
             <section class="output_single_container" id="output_single_container">
                 <div class="output_timer_container">
                    <span>${minutos}</span> 
                 </div>
                 <span class="output_text">minutos</span>
             </section>
             <section class="output_single_container" id="output_single_container">
                 <div class="output_timer_container">
                    <span>${segundos}</span> 
                 </div>
                 <span class="output_text">segundos</span>
             </section>
         </section>
`;
}, 1000);
    } else {
        window.alert("Por favor, introduce la fecha de cumpleaños")
    }
}






