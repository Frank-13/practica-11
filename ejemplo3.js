    //funcion que recibe datos de un usuario y separa el resto d3 la funcion
    function procesarUsuario(nombre, edad, ...OtrosDatos) {
    let usuarioFormateado = {
        nombre,
        edad,
        infoAdicional: { ...OtrosDatos },
    };
    return usuarioFormateado;
    }
    //simulamos datos resividos de una API

    let usuario = procesarUsuario(
    "Vanessa",
    24,
    "Ingeniera",
    "El Salvador",
    "Marzo 2024"
    )
    console.log(usuario);
