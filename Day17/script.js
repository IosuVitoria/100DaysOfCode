// Obtén todas las preguntas y respuestas
const questions = document.querySelectorAll('.question');

// Agrega un evento click a cada pregunta
questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling; // Obtiene la respuesta siguiente al hacer clic en la pregunta
        if (answer.style.display === 'block') {
            answer.style.display = 'none';
        } else {
            answer.style.display = 'block';
        }
    });
});