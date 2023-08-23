const form = document.getElementById('fibonacci-form');
const sequenceOutput = document.getElementById('sequence-output');
const resetButton = document.getElementById('reset-button');

function generateFibonacciSequence(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const numberInput = document.getElementById('number-input');
  const n = parseInt(numberInput.value);

  if (isNaN(n) || n <= 0) {
    alert('Por favor, ingresa un número positivo válido.');
    return;
  }

  const fibonacciSequence = generateFibonacciSequence(n);

  let output = '<p>Secuencia Fibonacci:</p><ul>';
  fibonacciSequence.forEach(num => {
    output += `<li>${num}</li>`;
  });
  output += '</ul>';

  sequenceOutput.innerHTML = output;
});

resetButton.addEventListener('click', () => {
    sequenceOutput.innerHTML='';
    // resetButton.style.display = none;
    form.reset(); 
})
