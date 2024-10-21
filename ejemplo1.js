//funcion que comnina multiles listas y elimina duplicados

function mezclarListas (...listas){
    //usamos spread para aplanar las listas y set para eliminar duplicados
    let combinadasSinDuplicados = [...new Set([].concat(...listas))];
    return combinadasSinDuplicados;
}

let lista1 = [1,2,3];
let lista2 = [3,4,5];
let lista3 = [5,6,7];

//pasaos varias matrices usando rest y combinamos con sprad
console.log(mezclarListas(lista1,lista2,lista3));