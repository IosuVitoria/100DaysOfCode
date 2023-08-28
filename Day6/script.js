// class Individual {
//   constructor(age, survivalRate) {
//     this.age = age;
//     this.survivalRate = survivalRate;
//   }

//   get canReproduce() {
//     return this.age >= 18 && this.age <= 40;
//   }

//   get willDie() {
//     return Math.random() < (1 - this.survivalRate); // Probability of dying based on survival rate
//   }

//   reproduce() {
//     if (this.canReproduce && Math.random() < 0.5) { // 50% chance of reproducing
//       return new Individual(0, this.survivalRate);
//     }
//     return null;
//   }
// }

// class Population {
//   constructor(initialSize, ageMin, ageMax, survivalRate) {
//     this.individuals = [];
//     for (let i = 0; i < initialSize; i++) {
//       const randomAge = Math.floor(Math.random() * (ageMax - ageMin + 1)) + ageMin;
//       this.individuals.push(new Individual(randomAge, survivalRate));
//     }
//   }

//   simulateUntil(targetPopulation) {
//     let years = 0;
//     while (this.individuals.length < targetPopulation) {
//       const newIndividuals = [];
//       for (const individual of this.individuals) {
//         if (!individual.willDie) {
//           const newBorn = individual.reproduce();
//           if (newBorn) {
//             newIndividuals.push(newBorn);
//           }
//           individual.age++;
//         }
//       }
//       this.individuals.push(...newIndividuals);
//       years++;
//     }
//     return years;
//   }
// }

// const initialPopulationSize = parseInt(prompt("Introduce la cantidad de individuos iniciales:"));
// const targetPopulation = parseInt(prompt("Introduce la población final objetivo:"));
// const ageMin = parseInt(prompt("Introduce la edad mínima de reproducción:"));
// const ageMax = parseInt(prompt("Introduce la edad máxima de reproducción:"));
// const survivalRate = parseFloat(prompt("Introduce la tasa de supervivencia (%):"));

// const population = new Population(initialPopulationSize, ageMin, ageMax, survivalRate);
// const years = population.simulateUntil(targetPopulation);

// console.log(`Se necesitaron ${years} años para alcanzar una población de al menos ${targetPopulation} individuos.`);

//JS PARA EL FRONT COMPLETO


document.addEventListener("DOMContentLoaded", () => {
    //Recogemos todas las variables que se van a necesitar para los cálculos e interacción con el usuario. APARTADO DEL MANEJO DEL DOM.
    const form = document.getElementById("population-form");
    const initialSizeInput = document.getElementById("initial-size");
    const targetPopulationInput = document.getElementById("target-population");
    const ageMinInput = document.getElementById("age-min");
    const ageMaxInput = document.getElementById("age-max");
    const infantMortalityInput = document.getElementById("infant-mortality");
    const lifeExpectancyInput = document.getElementById("life-expectancy");
    const mortalityAge1Input = document.getElementById("mortality-age-1");
    const mortalityAge2Input = document.getElementById("mortality-age-2");
    const mortalityAge3Input = document.getElementById("mortality-age-3");
    const mortalityAge4Input = document.getElementById("mortality-age-4");
    const emigrationRateInput = document.getElementById("emigration-rate");
    const immigrationRateInput = document.getElementById("immigration-rate");
    //Dejo a parte el gráfico para poder diferenciarlo junto a la tabla.
    const chartCanvas = document.getElementById("population-chart");
    const populationTable = document.getElementById("population-table").getElementsByTagName("tbody")[0];
    //Por último capturo el botón reset para controlar la limpieza y reinicio del programa.
    const resetButton = document.getElementById("reset-button");
  
    //Control del formulario. 
    form.addEventListener("submit", function (event) {
        //Evitamos como siempre el comportamiento por defecto del formulario.
        event.preventDefault();
        //Manejo de todas las variables que ha introducido el usuario. Necesario el parseo para que asegurarnos que son de tipo numérico para el manejo posterior en los cálculos.
        const initialPopulationSize = parseInt(initialSizeInput.value);
        const targetPopulation = parseInt(targetPopulationInput.value);
        const ageMin = parseInt(ageMinInput.value);
        const ageMax = parseInt(ageMaxInput.value);
        const infantMortality = parseFloat(infantMortalityInput.value) / 100;
        const lifeExpectancy = parseInt(lifeExpectancyInput.value);
        const mortalityRates = [
            parseFloat(mortalityAge1Input.value) / 100,
            parseFloat(mortalityAge2Input.value) / 100,
            parseFloat(mortalityAge3Input.value) / 100,
            parseFloat(mortalityAge4Input.value) / 100,
        ];
        const emigrationRate = parseFloat(emigrationRateInput.value) / 100;
        const immigrationRate = parseFloat(immigrationRateInput.value) / 100;
        
        //El flujo de los datos comienza con una instanciación a la clase población que recibe todos los datos que se ha metido el usuario.
        const population = new Population(
            initialPopulationSize,
            ageMin,
            ageMax,
            infantMortality,
            lifeExpectancy,
            mortalityRates,
            emigrationRate,
            immigrationRate
        );
        
        //Se inicia una variable para indicar los cambios por generación.
        const generationsData = [];
        
        //Se genera la lógica de los individuos, si se van a reproducir, morir, etc...
        while (population.individuals.length < targetPopulation) {
            const newIndividuals = [];
            for (const individual of population.individuals) {
                if (!individual.willDie && Math.random() < 1 - individual.infantMortality) {
                    const newBorn = individual.reproduce();
                if (newBorn) {
                    newIndividuals.push(newBorn);
            }
            individual.age++;
          }
        }

        //Se calculan tasas de de emigración e inmigración.
        population.individuals.push(...newIndividuals);
        population.emigrate();
        population.immigrate();
        generationsData.push(population.individuals.length);
        }
        
        //Actualizo la tabla y el gráfico de manera dinámica según se genera.
        updateChart(generationsData);
        updateTable(generationsData, population.emigrants, population.immigrants, generationsData);
    });
    
    //Genero la lógica detrás del botón de reseteo para poder volver a usar el programa.
    resetButton.addEventListener("click", function () {
      form.reset();
      chartCanvas.innerHTML = "";
      populationTable.innerHTML = "";
      chartCanvas.getContext("2d").clearRect(0, 0, chartCanvas.width, chartCanvas.height);
    });
    
    //Se generan las clases que controlan las características de cada individuo de la población y la población en si misma. 

    class Individual {
        constructor(age, infantMortality) {
            this.age = age;
            this.infantMortality = infantMortality;
        }
  
        get canReproduce() {
            return this.age >= 18 && this.age <= 45;
        }
  
        get willDie() {
            return Math.random() < this.infantMortality;
        }
  
        reproduce() {
            if (this.canReproduce && Math.random() < 0.5) {
                return new Individual(0, this.infantMortality);
            }
            return null;
        }
    }
  
    class Population {
        constructor(
            initialSize,
            ageMin,
            ageMax,
            infantMortality,
            lifeExpectancy,
            mortalityRates,
            emigrationRate,
            immigrationRate
        ) {
            this.individuals = [];
            this.mortalityRates = mortalityRates;
            for (let i = 0; i < initialSize; i++) {
                const age = Math.floor(Math.random() * (ageMax - ageMin + 1)) + ageMin;
                const ageGroup = Math.floor(age / 20);
                const infantMortality = ageGroup === 0 ? this.mortalityRates[0] : 0;
                this.individuals.push(new Individual(age, infantMortality));
            }
        this.lifeExpectancy = lifeExpectancy;
        this.emigrants = 0;
        this.immigrants = 0;
        this.emigrationRate = emigrationRate;
        this.immigrationRate = immigrationRate;
        }
  
        emigrate() {
            this.emigrants = Math.round(this.emigrationRate * this.individuals.length);
            this.individuals.splice(0, this.emigrants);
        }
  
        immigrate() {
            const immigrants = Math.round(this.immigrationRate * this.individuals.length);
            for (let i = 0; i < immigrants; i++) {
                const age = Math.floor(Math.random() * (ageMaxInput.value - ageMinInput.value + 1)) + ageMinInput.value;
                const ageGroup = Math.floor(age / 20);
                const infantMortality = ageGroup === 0 ? this.mortalityRates[0] : 0;
                this.individuals.push(new Individual(age, infantMortality));
            }
            this.immigrants = immigrants;
        }
    }
    
    //Lógica que controla la actualización del gráfico mientras se realiza la simulación.
    function updateChart(data) {
        const labels = Array.from({ length: data.length }, (_, i) => `Generación ${i + 1}`);
        const chartData = {
            labels: labels,
            datasets: [
            {
            label: "Población por Generación",
            data: data,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderWidth: 1,
            },
        ],
        };
        const chartConfig = {
            type: "line",
            data: chartData,
        };
        if (chartCanvas.chart) {
            chartCanvas.chart.destroy();
        }
        chartCanvas.chart = new Chart(chartCanvas, chartConfig);
    }
    
    //Lógica generada para actulizar la tabla de datos según se van generando datos.
    function updateTable(data, emigrants, immigrants, populationData) {
        populationTable.innerHTML = "";
        data.forEach((population, index) => {
            const row = populationTable.insertRow();
            const generationCell = row.insertCell(0);
            const populationCell = row.insertCell(1);
            const emigrantsCell = row.insertCell(2);
            const immigrantsCell = row.insertCell(3);
            const populationDataCell = row.insertCell(4);
    
            generationCell.textContent = `Generación ${index + 1}`;
            populationCell.textContent = population;
            emigrantsCell.textContent = emigrants;
            immigrantsCell.textContent = immigrants;
            populationDataCell.textContent = populationData[index];
        });
    }
  });
  