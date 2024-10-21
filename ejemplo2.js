//matrices

let estudiantes = [
    {nombre: "isabel", nota:9},
    {nombre: "Melisa", nota :8},
    {nombre: "Denis", nota:7}

];

let estudiantesModificados = estudiantes.map(estudiante =>
estudiante.nombre === "Denis"
?{...estudiante, nota: 9}
:{...estudiante}
);

console.log(estudiantesModificados);
console.log(estudiantes);