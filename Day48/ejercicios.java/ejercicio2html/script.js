let numAsignaturas = 0;
const notas = [];
const nombresAsignaturas = [];
const trimestres = 3;

const agregarCampoAsignatura = () => {
      const asignaturasInputs = document.getElementById('asignaturas-inputs');
      const div = document.createElement('div');
      
      const labelAsignatura = document.createElement('label');
      labelAsignatura.textContent = `Nombre de la Asignatura ${numAsignaturas + 1}: `;
      div.appendChild(labelAsignatura);
      
      const inputAsignatura = document.createElement('input');
      inputAsignatura.type = 'text';
      inputAsignatura.required = true;
      div.appendChild(inputAsignatura);

      for (let i = 1; i <= trimestres; i++) {
          const labelNota = document.createElement('label');
          labelNota.textContent = `Trimestre ${i}: `;
          div.appendChild(labelNota);

          const inputNota = document.createElement('input');
          inputNota.type = 'number';
          inputNota.step = '0.01';
          inputNota.min = '0';
          inputNota.max = '10';
          inputNota.required = true;
          div.appendChild(inputNota);
    }

    asignaturasInputs.appendChild(div);
    numAsignaturas++;
}


const calcularPromedio = (notas) => {
      const totalNotas = notas.reduce((a, b) => a + b, 0);
      return totalNotas / notas.length;
}


const evaluarDesempeño = (promedio) => {
    if (promedio >= 9) {
      return 'Sobresaliente';
    } else if (promedio >= 7) {
        return 'Notable';
    } else if (promedio >= 5) {
        return 'Aprobado';
    } else {
        return 'Suspendido';
    }
}

const mostrarResultados = (nombre, notas, nombresAsignaturas) => {
    const resultTable = document.getElementById('result-table');
    resultTable.innerHTML = '';

    let html = '<tr><th>Asignatura</th>';
    for (let trimestre = 1; trimestre <= trimestres; trimestre++) {
        html += `<th>Trimestre ${trimestre}</th>`;
    }
    html += '<th>Promedio</th><th>Evaluación</th></tr>';

    for (let i = 0; i < notas.length; i++) {
        const promedio = calcularPromedio(notas[i]);
        const evaluacion = evaluarDesempeño(promedio);
        html += `<tr><td>${nombresAsignaturas[i]}</td>`;

        for (let j = 0; j < notas[i].length; j++) {
            html += `<td>${notas[i][j].toFixed(2)}</td>`;
        }

        html += `<td>${promedio.toFixed(2)}</td><td>${evaluacion}</td></tr>`;
    }

    resultTable.innerHTML = html;
}

agregarCampoAsignatura();

document.getElementById('agregar-asignatura').addEventListener('click', agregarCampoAsignatura);

document.getElementById('notas-form').addEventListener('submit', function(event) {
    event.preventDefault();

    numAsignaturas = 0;
    notas.length = 0;
    nombresAsignaturas.length = 0;

    const nombre = document.getElementById('nombre').value;
    const asignaturasInputs = document.getElementById('asignaturas-inputs').children;

    for (let i = 0; i < asignaturasInputs.length; i++) {
        const asignatura = asignaturasInputs[i].querySelector('input[type="text"]').value;
        const notasAsignatura = [];

        for (let j = 0; j < trimestres; j++) {
            const nota = parseFloat(asignaturasInputs[i].querySelectorAll('input[type="number"]')[j].value);
            notasAsignatura.push(nota);
        }

        notas.push(notasAsignatura);
        nombresAsignaturas.push(asignatura);
    }

    mostrarResultados(nombre, notas, nombresAsignaturas);
});
