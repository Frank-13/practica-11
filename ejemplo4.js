let productos = [
    {nombre: "laptop", precio: 800, categoria:"electronica"},
    {nombre: "Bicicleta", precio:300, categoria:"deportes"},
    {nombre: "Telefono", precio:500, categoria:"Electronicos"},
    {nombre: "Zapatillas", precio:100, categoria:"Deportes"},

];

//funcion que filtra productos por categoria y re
function filtarProductosPorCategoria(categoria,...listaProductos) {
let filtrados = listaProductos.filter(producto => producto.categoria === categoria);
let precios = filtrados.map(producto => producto.precio);

return {
    categoria,
    productosFiltrados: filtrados,
    precios: [...precios]
};

}

//llamar la funcion con productos filtrados por "electronica"

let resultado = filtarProductosPorCategoria("electronica", ...productos);
console.log(resultado);