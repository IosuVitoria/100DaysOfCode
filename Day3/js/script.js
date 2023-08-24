const aitanaBonmati = {
    nombreCompleto: "Aitana Bonmatí Conca",
    nacimiento: "18 de enero de 1998",
    lugarNacimiento: "Sant Pere de Ribes, Barcelona, España",
    nacionalidad: "Española",
    altura: "1,61 m",
    imagen: "../assets/aitana.jpg",
    club: {
        nombre: "F. C. Barcelona",
        liga: "Primera División de España",
        posicion: "Centrocampista",
        dorsal: 14,
        golesEnClubes: 73
    },
    seleccionNacional: {
        seleccion: "España",
        debut: "28 de noviembre de 2017",
        dorsal: 6,
        partidosGoles: "50 (17)"
    },
    trayectoria: {
        inicios: "F. C. Barcelona 'B' (2014-16)",
        FCBarcelona: "F. C. Barcelona (2016-act.)",
        palmares: [
            "Copa de la Reina (2017, 2018, 2020, 2021, 2022)",
            "Liga F (2020, 2021, 2022, 2023)",
            "Liga de Campeones (2021, 2023)",
            "Supercopa de España (2020, 2022, 2023)",
            "Copa Mundial Femenina (2023)"
        ]
    },
    estadisticas: {
        totalPartidos: 228,
        totalGoles: 73
    },
    distinciones: [
        "Mejor Jugadora Catalana del año (2019)",
        "MVP de la final de la Copa de la Reina (2020)",
        "MVP de la final de la Liga de Campeones (2021)",
        "Balón de Oro de la Copa Mundial Femenina (2023)"
    ]
};

// Acceder a los datos
console.log("Nombre completo:", aitanaBonmati.nombreCompleto);
console.log("Club actual:", aitanaBonmati.club.nombre);
console.log("Altura:", aitanaBonmati.altura);
console.log("Palmarés:", aitanaBonmati.trayectoria.palmares.join(", "));

function mostrarDatos() {
    document.getElementById("nombreCompleto").textContent = aitanaBonmati.nombreCompleto;
    document.getElementById("nacimiento").textContent = aitanaBonmati.nacimiento;
    document.getElementById("lugarNacimiento").textContent = aitanaBonmati.lugarNacimiento;
    document.getElementById("nacionalidad").textContent = aitanaBonmati.nacionalidad;
    document.getElementById("altura").textContent = aitanaBonmati.altura;
    document.getElementById("clubActual").textContent = aitanaBonmati.club.nombre;
    document.getElementById("liga").textContent = aitanaBonmati.club.liga;
    document.getElementById("posicion").textContent = aitanaBonmati.club.posicion;
    document.getElementById("dorsal").textContent = aitanaBonmati.club.dorsal;
    document.getElementById("golesEnClubes").textContent = aitanaBonmati.club.golesEnClubes;
    document.getElementById("seleccionNacional").textContent = aitanaBonmati.seleccionNacional.seleccion;
    document.getElementById("debut").textContent = aitanaBonmati.seleccionNacional.debut;
    document.getElementById("dorsalSeleccion").textContent = aitanaBonmati.seleccionNacional.dorsal;
    document.getElementById("partidosGoles").textContent = aitanaBonmati.seleccionNacional.partidosGoles;
    document.getElementById("palmares").textContent = aitanaBonmati.trayectoria.palmares.join(", ");
}

mostrarDatos(); // Llamada inicial para mostrar los datos;

document.addEventListener("DOMContentLoaded", function() {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabs = document.querySelectorAll(".tab");

    // Mostrar la primera sección por defecto
    tabButtons[0].classList.add("active");
    tabs[0].classList.add("active");

    // Agregar eventos de clic a los botones de pestaña
    tabButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Remover la clase "active" de todos los botones y secciones
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabs.forEach(tab => tab.classList.remove("active"));

            // Agregar la clase "active" al botón clickeado y mostrar la sección correspondiente
            const tabName = button.getAttribute("data-tab");
            const tabToShow = document.getElementById(tabName);
            button.classList.add("active");
            tabToShow.classList.add("active");
        });
    });
});
