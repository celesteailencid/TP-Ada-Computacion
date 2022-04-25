const botonEditar = document.querySelectorAll(".boton-editar");
const botonEliminar = document.querySelectorAll(".boton-tacho");
const fondoModal = document.querySelector(".fondo-modal");
const ventanaModal = document.querySelector(".ventana-modal");
const tituloVentanaModal = document.querySelector("#titulo-ventana-modal");
const selectVendedora = document.querySelector(".select-vendedora");

fondoModal.classList.add("oculto");
ventanaModal.classList.add("oculto");

// funcion para abrir una ventana modal
const abrirModal = () => {
    fondoModal.classList.remove("oculto");
    ventanaModal.classList.remove("oculto");
}

const cerrarModal = () => {
    fondoModal.classList.add("oculto");
    ventanaModal.classList.add("oculto");
}

// funcionalidad de boton editar modal
for (let i = 0; i < botonEditar.length; i++) {
    botonEditar[i].onclick = () => {
        // console.log("funciona boton editar")
        tituloVentanaModal.textContent = "Editar venta";
        return abrirModal();
    }
};
// funcionalidad de boton editar modal

// funcionalidad de boton eliminar modal
for (let i = 0; i < botonEliminar.length; i++) {
    botonEliminar[i].onclick = () => {
        // console.log("funciona boton eliminar")
        tituloVentanaModal.textContent = "Eliminar venta";
        return abrirModal();
    }
};
// funcionalidad de boton eliminar modal

fondoModal.onclick = () => {
    return cerrarModal();
}

// console.log(ventas); ARRAY BIDIMENSIONAL
// console.log(vendedoras); ARRAY COMUN
// console.log(precios); ARRAY BIDIMENSIONAL

