let tablaVentas = document.getElementById("tabla-ventas");

console.log(local.ventas);

const ventasTabla = local.ventas
console.log(tablaVentas);

for (let i = 0; i < ventasTabla.length; i++) {
    tablaVentas.innerHTML += `<tr>
        <td>${ventasTabla[i].fecha}</td>
        <td>${ventasTabla[i].nombreVendedora}</td>
        <td>${ventasTabla[i].sucursal}</td>
        <td>${ventasTabla[i].componentes}</td>
        <td>320</td>
        <td><button class="boton-editar"><i class="fa-solid fa-pencil"></i></button><button
                class="boton-tacho"><i class="fa-solid fa-trash-can"></i></button></td></tr>`
}