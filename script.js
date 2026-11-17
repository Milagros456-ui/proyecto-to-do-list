// Seleccionar elementos principales
let inputPrincipal = document.querySelector(".input");
let botonAgregar = document.querySelector(".boton-agregar");
let container = document.querySelector(".container");

// Clase Item
class Item {
    constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea);
    }

    crearDiv(nuevaTarea) {
        // Crear input de la tarea
        let inputItem = document.createElement("input");
        inputItem.type = "text";
        inputItem.disabled = true;
        inputItem.classList.add("item-input");
        inputItem.value = nuevaTarea;

        // Crear div contenedor del ítem
        let nuevoDiv = document.createElement("div");
        nuevoDiv.classList.add("item");

        // Crear botón Editar
        let botonEditar = document.createElement("button");
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
        botonEditar.classList.add("boton-editar");

        // Crear botón Remover
        let botonRemover = document.createElement("button");
        botonRemover.innerHTML = "<i class='fas fa-trash'></i>";
        botonRemover.classList.add("boton-remover");

        // Agregar elementos al div y el div al container
        nuevoDiv.appendChild(inputItem);
        nuevoDiv.appendChild(botonEditar);
        nuevoDiv.appendChild(botonRemover);
        container.appendChild(nuevoDiv);

        // Comportamiento botón Editar (candado)
        botonEditar.addEventListener("click", function () {
            inputItem.disabled = !inputItem.disabled;
            if (inputItem.disabled) {
                botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
            } else {
                botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>";
            }
        });

        // Comportamiento botón Remover (tacho)
        botonRemover.addEventListener("click", function () {
            nuevoDiv.remove();
        });
    }
}

// Función para verificar si el input tiene texto
function chequearInput() {
    if (inputPrincipal.value.trim() !== "") {
        new Item(inputPrincipal.value);
        inputPrincipal.value = "";
    }
}

// Evento click en el botón agregar
botonAgregar.addEventListener("click", chequearInput);