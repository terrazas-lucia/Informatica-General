const numeroObjetivo = Math.floor(Math.random() * 3 + 4); //Establece un numero al azar que pueden ser 4, 5 y 6
$("#numero-objetivo").text(numeroObjetivo); //Se muestra el numero objetivo

//Declaracion de caracteristicas de los jugadores
let ace = { 
    IA: true,
    puntos : 0,
    dado1: "#dado1Ace",
    dado2: "#dado2Ace",
    dado3: "#dado3Ace",
    puntosDOM: "#puntosAce"
}
let jugador = { 
    IA: false,
    puntos : 0,
    dado1: "#dado1Jugador",
    dado2: "#dado2Jugador",
    dado3: "#dado3Jugador",
    puntosDOM: "#puntosJugador"
}

//Funcion que ejecuta un turno y toma como parametro al jugador correspondiente
function turno(jugadorActual) {
    let dadosTirados = [];
    let puntosGanados = 0;
    for (let i = 0; i < 3; i++) { //Devuelve un numero al azar entre 1 y 6 y los agrega al array dadosTirados
       const valorDado = Math.floor(Math.random() * 6 + 1);
       dadosTirados.push(valorDado);
    };
    if(dadosTirados[0] === dadosTirados[1] && dadosTirados[0] === dadosTirados[2]) { //Comprueba que los 3 dados sean iguales, en caso afirmativo, se agregan 5 puntos
        puntosGanados += 5;
    } else {
        for (let i = 0; i < dadosTirados.length; i++) { //Comprueba si el numero dado concuerda con el numero objetivo, se agrega 1 punto
            if (dadosTirados[i] === numeroObjetivo) {
                puntosGanados++;
            }    
        }

        //Comprueba que la suma de los dados de el numero objetivo, en caso afirmativo, se agrega un punto
        if (dadosTirados[0] + dadosTirados[1] === numeroObjetivo) {
            puntosGanados++
        }
        if (dadosTirados[0] + dadosTirados[2] === numeroObjetivo) {
            puntosGanados++
        }
        if (dadosTirados[2] + dadosTirados[1] === numeroObjetivo) {
            puntosGanados++
        }
    }
    //Comprueba que los puntos ganados en este turno no superan los 15 puntos
    if (puntosGanados + jugadorActual.puntos <= 15) {
        jugadorActual.puntos += puntosGanados;
    }
    //Muestra los dados
    mostrarDados(jugadorActual, dadosTirados);
}

function mostrarDados(jugadorActual, dadosTirados) {
    if (jugadorActual.IA) { //Comprueba si el jugador actual es la IA o no para saber que dados mostrar en pantalla
        $(jugadorActual.dado1)[0].src = "imagenes/dadoace/dado" + dadosTirados[0] + "Ace.png";
        $(jugadorActual.dado2)[0].src = "imagenes/dadoace/dado" + dadosTirados[1] + "Ace.png";
        $(jugadorActual.dado3)[0].src = "imagenes/dadoace/dado" + dadosTirados[2] + "Ace.png";
        comprobarVictoria(jugadorActual); //Comprueba si la IA ha ganado
    } else {
        $(jugadorActual.dado1)[0].src = "imagenes/dadojugador/dado" + dadosTirados[0] + "Jugador.png";
        $(jugadorActual.dado2)[0].src = "imagenes/dadojugador/dado" + dadosTirados[1] + "Jugador.png";
        $(jugadorActual.dado3)[0].src = "imagenes/dadojugador/dado" + dadosTirados[2] + "Jugador.png";
        $("#boton-tirar-dado").toggle(); //Se desactiva el boton para evitar que juegues un turno antes que la IA
        if(!comprobarVictoria(jugadorActual)) { //Si el jugador no gano, pasa el turno a la IA y se habilita el boton
            setTimeout(() => {
                turno(ace)
                $("#boton-tirar-dado").toggle();
            }, 2000);
        };
    }
    $(jugadorActual.puntosDOM + " span").text(jugadorActual.puntos); //Se muestran los puntos del jugador
}

function comprobarVictoria(jugadorActual) {
    if(jugadorActual.puntos === 15) { //Se comprueba que el jugador actual ha llegado al puntaje, si es la IA se muestra que perdiste y se deshabilita el boton.
        if (jugadorActual.IA) {
            alert("Perdiste")
            $("#boton-tirar-dado").toggle();
        } else {
            alert("Ganaste");
        }
        return true
    }else {
        return false
    }
}