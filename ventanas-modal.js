const botonEditar = document.querySelectorAll(".boton-editar");
const botonEliminar = document.querySelectorAll(".boton-tacho");
const botonCancelarEditar = document.getElementById("boton-cancelar-editar");
const botonCancelarEliminar = document.getElementById("boton-cancelar-eliminar");
const fondoModal = document.querySelector(".fondo-modal");
const ventanaModal = document.querySelector(".ventana-modal");
const tituloVentanaModal = document.querySelector("#titulo-ventana-modal");
const selectVendedora = document.querySelector(".select-vendedora");
const fondoModalEliminar = document.querySelector(".fondo-modal-eliminar");
const ventanaModalEliminar = document.querySelector(".ventana-modal-eliminar");

fondoModal.classList.add("oculto");
ventanaModal.classList.add("oculto");
fondoModalEliminar.classList.add("oculto");
ventanaModalEliminar.classList.add("oculto");



// funciones para abrir y cerrar una ventana modal
const abrirModal = () => {
    fondoModal.classList.remove("oculto");
    ventanaModal.classList.remove("oculto");
}

const cerrarModal = () => {
    fondoModal.classList.add("oculto");
    ventanaModal.classList.add("oculto");
}

// funciones para abrir y cerrar una ventana modal eliminar
const abrirModalEliminar = () => {
    fondoModalEliminar.classList.remove("oculto");
    ventanaModalEliminar.classList.remove("oculto");
}

const cerrarModalEliminar = () => {
    fondoModalEliminar.classList.add("oculto");
    ventanaModalEliminar.classList.add("oculto");
}



// funcionalidad de boton editar modal
for (let i = 0; i < botonEditar.length; i++) {
    botonEditar[i].onclick = () => {
        // console.log("funciona boton editar")
        tituloVentanaModal.textContent = "Editar venta";
        return abrirModal();
    }
};



// funcionalidad de boton eliminar modal
for (let i = 0; i < botonEliminar.length; i++) {
    botonEliminar[i].onclick = () => {
        // console.log("funciona boton eliminar")
        tituloVentanaModal.textContent = "Eliminar venta";
        return abrirModalEliminar();
    }
};



botonCancelarEditar.onclick = () => {
    return cerrarModal();
}

botonCancelarEliminar.onclick = () => {
    return cerrarModalEliminar();
}

