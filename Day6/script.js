class Individual {
    constructor(age) {
      this.age = age;
    }
  
    get canReproduce() {
      return this.age >= 18 && this.age <= 40;
    }
  
    get willDie() {
      return Math.random() < 0.2; // 20% chance of dying
    }
  
    reproduce() {
      if (this.canReproduce && Math.random() < 0.5) { // 50% chance of reproducing
        return new Individual(0);
      }
      return null;
    }
  }
  
  class Population {
    constructor(initialSize) {
      this.individuals = [];
      for (let i = 0; i < initialSize; i++) {
        this.individuals.push(new Individual(Math.floor(Math.random() * 60) + 1));
      }
    }
  
    simulateUntil(targetPopulation) {
      let years = 0;
      while (this.individuals.length < targetPopulation) {
        const newIndividuals = [];
        for (const individual of this.individuals) {
          if (!individual.willDie) {
            const newBorn = individual.reproduce();
            if (newBorn) {
              newIndividuals.push(newBorn);
            }
            individual.age++;
          }
        }
        this.individuals.push(...newIndividuals);
        years++;
      }
      return years;
    }
  }
  
  const initialPopulationSize = parseInt(prompt("Introduce la cantidad de individuos iniciales:"));
  const targetPopulation = parseInt(prompt("Introduce la población final objetivo:"));
  
  const population = new Population(initialPopulationSize);
  const years = population.simulateUntil(targetPopulation);
  
  console.log(`Se necesitaron ${years} años para alcanzar una población de al menos ${targetPopulation} individuos.`);