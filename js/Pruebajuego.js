//const opciones = ["piedra", "papel", "tijera"];
// const maquina = opciones[Math.floor(Math.random() * opciones.length)];

//let longitud = opciones.length;

//let prueba = Math.random()*longitud;

//let prueba_redondeado = Math.floor(prueba);

//let solucion = opciones[prueba_redondeado];

//console.log(solucion);

let ganadas = 0;
let empatadas = 0;
let perdidas = 0;
let partidas = 0;

//let jugador = "piedra";

function juego(jugador) {
    const opciones = ["piedra", "papel", "tijera"];
    const maquina = opciones[Math.floor(Math.random() * opciones.length)];
    let mensaje;
    partidas++;

    if (jugador === maquina) {
    mensaje = "¡Empate!";
    empatadas++;
    }

    else if (
    (jugador === "piedra" && maquina === "tijera") ||
    (jugador === "tijera" && maquina === "papel") ||
    (jugador === "papel" && maquina === "piedra")
    ) {
    mensaje = "¡Gana el jugador!";
    ganadas++;
    } else {
    mensaje = "¡Gana la máquina!";
    perdidas++;
    }

    document.getElementById("marcador").textContent =
        "Partidas jugadas: " + partidas;
    document.getElementById("ganadas").textContent = "Ganadas: " + ganadas;
    document.getElementById("empatadas").textContent = "Empates: " + empatadas;
    document.getElementById("perdidas").textContent = "Derrotas: " + perdidas;
    document.getElementById("jugada-jugador").textContent = "Jugador: " + jugador;
    document.getElementById("jugada-maquina").textContent = "Máquina: " + maquina;
    document.getElementById("mensaje").textContent = mensaje;
}
//console.log(jugador);
//console.log(maquina);
//console.log(mensaje);
//console.log(partidas);
//console.log(empatadas);
//console.log(ganadas);
//console.log(perdidas);