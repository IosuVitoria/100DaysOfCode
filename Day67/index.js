const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const archivoJSON = 'agenda.json';
let agenda = new Map();

const cargarDatos = () => {
    try {
        const datos = fs.readFileSync(archivoJSON, 'utf8');
        agenda = new Map(JSON.parse(datos));
    } catch (error) {
        agenda = new Map();
    }
};

const guardarDatos = () => {
    const datos = JSON.stringify([...agenda]);
    fs.writeFileSync(archivoJSON, datos, 'utf8');
};

const mostrarMenu = () => {
    console.log("1. Agregar contacto");
    console.log("2. Buscar contacto");
    console.log("3. Actualizar contacto");
    console.log("4. Eliminar contacto");
    console.log("5. Mostrar todos los contactos");
    console.log("6. Salir");
};

const agregarContacto = () => {
    rl.question("Ingrese el nombre del contacto: ", nombre => {
        rl.question("Ingrese el número de teléfono: ", telefono => {
            if (!isNaN(telefono) && telefono.length <= 11) {
                agenda.has(nombre) ? console.log("El contacto ya existe en la agenda.") : (
                    agenda.set(nombre, telefono),
                    console.log("Contacto agregado exitosamente.")
                );
            } else {
                console.log("Número de teléfono no válido.");
            }
            guardarDatos();
            mostrarMenu();
        });
    });
};

const buscarContacto = () => {
    rl.question("Ingrese el nombre del contacto a buscar: ", nombre => {
        const mensaje = agenda.has(nombre) ? `Nombre: ${nombre}, Teléfono: ${agenda.get(nombre)}` : "Contacto no encontrado.";
        console.log(mensaje);
        mostrarMenu();
    });
};

const actualizarContacto = () => {
    rl.question("Ingrese el nombre del contacto a actualizar: ", nombre => {
        if (agenda.has(nombre)) {
            rl.question("Ingrese el nuevo número de teléfono: ", nuevoTelefono => {
                if (!isNaN(nuevoTelefono) && nuevoTelefono.length <= 11) {
                    agenda.set(nombre, nuevoTelefono);
                    console.log("Contacto actualizado exitosamente.");
                } else {
                    console.log("Número de teléfono no válido.");
                }
                guardarDatos();
                mostrarMenu();
            });
        } else {
            console.log("Contacto no encontrado.");
            mostrarMenu();
        }
    });
};

const eliminarContacto = () => {
    rl.question("Ingrese el nombre del contacto a eliminar: ", nombre => {
        if (agenda.has(nombre)) {
            agenda.delete(nombre);
            console.log("Contacto eliminado exitosamente.");
        } else {
            console.log("Contacto no encontrado.");
        }
        guardarDatos();
        mostrarMenu();
    });
};

const mostrarTodosLosContactos = () => {
    console.log("Agenda de contactos:");
    agenda.forEach((telefono, nombre) => console.log(`Nombre: ${nombre}, Teléfono: ${telefono}`));
    mostrarMenu();
};

let opcion;

// Cargar datos al inicio
cargarDatos();

rl.on('line', input => {
    opcion = input.trim();

    switch (opcion) {
        case "1": agregarContacto(); break;
        case "2": buscarContacto(); break;
        case "3": actualizarContacto(); break;
        case "4": eliminarContacto(); break;
        case "5": mostrarTodosLosContactos(); break;
        case "6": console.log("Saliendo del programa. ¡Hasta luego!"); rl.close(); break;
        default: console.log("Opción no válida. Intente nuevamente."); mostrarMenu();
    }
});
