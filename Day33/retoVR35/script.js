const sonCompatibles = (lenguajes) =>{
    const lenguajesFrontend = ["HTML", "CSS", "SASS", "Javascript"];
    const lenguajesBackend = ["PHP", "Python", "MYSQL", "Ruby"];

    const lenguaje1 = lenguajes[0].toUpperCase();
    const lenguaje2 = lenguajes[1].toUpperCase();

    const esLenguajeFrontend = lenguajesFrontend.includes(lenguaje1) && lenguajesBackend.includes(lenguaje2);
    const esLenguajeBackend = lenguajesFrontend.includes(lenguaje2) && lenguajesBackend.includes(lenguaje1);

    return esLenguajeFrontend || esLenguajeBackend;
}

console.log(sonCompatibles(["HTML", "PHP"]));
console.log(sonCompatibles(["HTML", "CSS"]));

// Solución Xavi
// const backendLanguage = ['PHP','PYTHON','NODE.JS','JAVA'];
// const frontendLanguage = ['HTML','CSS','JAVASCRIPT','TYPESCRIPT'];

// sonCompatibles = function(array) {
//     return (backendLanguage.includes(array[0]) && frontendLanguage.includes(array[1])) 
//     || (frontendLanguage.includes(array[0]) && backendLanguage.includes(array[1]));
// }

// console.log(sonCompatibles(["HTML", "PYTHON"])) 
// console.log(sonCompatibles(["PHP", "TYPESCRIPT"]))
