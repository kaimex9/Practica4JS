let filas = 8, columnas = 8, maxMinasPorFila = 3;
let campo = document.getElementById("campo"); // Asegúrate de tener un contenedor con id="campo"

// Inicializamos el campo visualmente sin mostrar las minas
for (let i = 0; i < filas * columnas; i++) {
    campo.innerHTML += "<div class='cubo' id='cubo-" + (i + 1) + "'></div>";
}

// Crear el campo de minas en el array
let minas = new Array(filas * columnas).fill(0); // Inicializar con ceros

// Colocar las minas internamente en el array
for (let fila = 0; fila < filas; fila++) {
    let minasPorFila = 0;
    while (minasPorFila < maxMinasPorFila) {
        let posicion = fila * columnas + Math.floor(Math.random() * columnas);
        if (minas[posicion] === 0) {
            minas[posicion] = 1; // Colocar mina (1 representa mina)
            minasPorFila++;
        }
    }
}

let juegoTerminado = false; // Variable de control del estado del juego

// Esta es la función que manejará el clic del usuario
document.getElementById("campo").onclick = function(event) {
    if (juegoTerminado) return; // Si el juego ha terminado, no hacer nada

    let idCubo = event.target.id; // Obtener el id del cubo clickeado
    let posicion = parseInt(idCubo.split('-')[1]) - 1; // Extraemos la posición (el número del cubo)

    // Verificar si es una mina
    if (minas[posicion] === 1) {
        alert("¡Perdiste! Has hecho clic en una mina.");
        event.target.innerHTML = "<img src='mine.png' class='mina'>";
        juegoTerminado = true; // El juego ha terminado
    } else {
        // Si no es una mina, contar las minas adyacentes
        let minasAdyacentes = contarMinasAdyacentes(posicion);
        event.target.innerHTML = minasAdyacentes > 0 ? minasAdyacentes : ''; // Mostrar el número o dejar vacío si no hay minas adyacentes
    }
}

// Función para contar las minas adyacentes
function contarMinasAdyacentes(posicion) {
    let minasAdyacentes = 0;
    let fila = Math.floor(posicion / columnas);
    let columna = posicion % columnas;

    // Comprobar las 8 celdas adyacentes (arriba, abajo, izquierda, derecha, y diagonales)
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            let nuevaFila = fila + i;
            let nuevaColumna = columna + j;

            // Verificar si la nueva posición está dentro de los límites del campo
            if (nuevaFila >= 0 && nuevaFila < filas && nuevaColumna >= 0 && nuevaColumna < columnas) {
                let nuevaPosicion = nuevaFila * columnas + nuevaColumna;
                if (minas[nuevaPosicion] === 1) {
                    minasAdyacentes++;
                }
            }
        }
    }

    return minasAdyacentes;
}

