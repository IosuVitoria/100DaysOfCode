document.addEventListener('DOMContentLoaded', function () {
    const cooperDistanceInput = document.getElementById('cooperDistance');
    const calculateCooperButton = document.getElementById('calculateCooper');
    const cooperResult = document.getElementById('cooperResult');

    const navetteDistanceInput = document.getElementById('navetteDistance');
    const navetteMaxSpeedInput = document.getElementById('navetteMaxSpeed'); 
    const calculateNavetteButton = document.getElementById('calculateNavette');
    const navetteResult = document.getElementById('navetteResult');

    calculateCooperButton.addEventListener('click', function (event) {
        event.preventDefault();
        const distance = parseFloat(cooperDistanceInput.value);
        if (!isNaN(distance)) {
            const cooperVO2 = calculateCooperVO2(distance);
            cooperResult.textContent = `VO2 máx (Test de Cooper): ${cooperVO2.toFixed(2)} ml/kg/min`;
        }
    });

    calculateNavetteButton.addEventListener('click', function (event) {
        event.preventDefault();
        const distance = parseFloat(navetteDistanceInput.value);
        const maxSpeed = parseFloat(navetteMaxSpeedInput.value); 
        if (!isNaN(distance) && !isNaN(maxSpeed)) {
            const navetteVO2 = calculateNavetteVO2(distance, maxSpeed); 
            navetteResult.textContent = `VO2 máx (Test de Navette): ${navetteVO2.toFixed(2)} ml/kg/min`;
        }
    });
    
    function calculateCooperVO2(distance) {
        // Fórmula de Cooper: VO2 máx (ml/kg/min) = (distance / 1000) * 22
        return (distance / 1000) * 22;
    }

    function calculateNavetteVO2(distance, maxSpeed) {
        // Fórmula alternativa del Test de Navette
        return (distance / 60) + (maxSpeed * 2.0833) - 12.78;
    }

    
    // function calculateLegerVO2(distance) {
    //     // Fórmula del Test de Leger-Boucher: VO2 máx (ml/kg/min) = (distance / 1000) * 31.025 + 3.238 * 5 - 3.248 * age + 0.1536 * age * age
    //     // Suponiendo una edad promedio de 25 años
    //     const age = 25;
    //     return (distance / 1000) * 31.025 + 3.238 * 5 - 3.248 * age + 0.1536 * age * age;
    // }

});

function openPopupWindow() {
    let imageUrl = "./assets/orientativo.png";
    let caption = "Valores orientativos para los resultados del test.";
    let popupWindow = window.open("", "popupWindow", "width=600,height=400");
    let popupContent = `
        <html>
        <head>
            <title>Imagen con Leyenda</title>
        </head>
        <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 20px;
        }
        h2 {
            color: #333;
        }
        p {
            color: #666;
        }
        img {
            max-width: 100%;
            height: auto;
            display: block;
            margin-top: 10px;
        }
    </style>
        <body>
            <h2>Leyenda:</h2>
            <p>${caption}</p>
            <img src="${imageUrl}" alt="Imagen">
        </body>
        </html>
    `;


popupWindow.document.write(popupContent);
popupWindow.document.close();}