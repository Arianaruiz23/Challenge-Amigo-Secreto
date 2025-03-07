// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista de amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya fue agregado.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    inputAmigo.value = "";
}

// Función para actualizar la lista de amigos en pantalla
function actualizarLista() {
    const listaHTML = document.querySelector("#listaAmigos");
    listaHTML.innerHTML = "";

    amigos.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaHTML.appendChild(li);
    });
}

// Función para realizar el sorteo de amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos amigos para realizar el sorteo.");
        return;
    }

    // Seleccionar un ganador aleatorio
    const ganador = amigos[Math.floor(Math.random() * amigos.length)];

    mostrarResultado(ganador);
}

// Función para mostrar el resultado del sorteo
function mostrarResultado(ganador) {
    const resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = `Ganador: ${ganador}`;

    // Deshabilitar botones después del sorteo
    document.querySelector(".button-draw").disabled = true;
    document.querySelector(".button-add").disabled = true;
}
