const candidateList = document.getElementById("candidateList");
const pieChart = document.getElementById("pieChart");
const resultList = document.getElementById("resultList");
const ctx = pieChart.getContext("2d");
const votes = [0, 0, 0, 0];
const labels = ["Spiderman", "Hulk", "Thor", "Ironman"];

const votar = (index) => {
    votes[index]++;
    actualizarResultados();
};

const actualizarResultados = () => {
    let totalVotos = votes.reduce((a, b) => a + b, 0);
    let percentages = votes.map(voto => ((voto / totalVotos) * 100).toFixed(2) + "%");

    labels.forEach((label, i) => {
        document.getElementById(`votes${String.fromCharCode(65 + i)}`).textContent = votes[i];
        document.getElementById(`percentage${String.fromCharCode(65 + i)}`).textContent = percentages[i];
    });

    if (myPieChart) {
        myPieChart.destroy();
    }

    myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: votes,
                backgroundColor: ['#e76c3c', '#2ecc71', '#3498db', '#f39c12'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
};

let myPieChart = null;

actualizarResultados();

