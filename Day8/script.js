//Recogemos los elementos que vamos a necesitar para controlar el flujo de información dentro de la página.

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('nextButton');

//Lista de preguntas para que el programa utilice.
const triviaData = [
    {
    question: '¿Cuál es la capital de Francia?',
    options: ['París', 'Madrid', 'Berlín', 'Londres'],
    answer: 0
    },
    {
    question: '¿Quién pintó La Mona Lisa?',
    options: ['Pablo Picasso', 'Leonardo da Vinci', 'Vincent van Gogh', 'Salvador Dalí'],
    answer: 1
    },
    {
    question: '¿En qué año se celebraron los primeros Juegos Olímpicos modernos?',
    options: ['1896', '1900', '1920', '1936'],
    answer: 0
    },
    {
    question: '¿Cuál es el elemento químico con símbolo "Fe"?',
    options: ['Fósforo', 'Flúor', 'Hierro', 'Hidrógeno'],
    answer: 2
    },
    {
    question: '¿Cuál es la capital de España?',
    options: ['París', 'Madrid', 'Berlín', 'Londres'],
    answer: 1
    },
    {
    question: '¿Quién pintó el Guernica?',
    options: ['Pablo Picasso', 'Leonardo da Vinci', 'Vincent van Gogh', 'Salvador Dalí'],
    answer: 0
    },
    {
    question: '¿En qué año se celebraron los primeros Juegos Olímpicos modernos?',
    options: ['1896', '1900', '1920', '1936'],
    answer: 0
    },
    {
    question: '¿Cuál es el elemento químico con símbolo "Flúor"?',
    options: ['Fósforo', 'Flúor', 'Hierro', 'Hidrógeno'],
    answer: 1
    },
    {
    question: '¿Cuál es el océano más grande del mundo?',
    options: ['Océano Atlántico', 'Océano Índico', 'Océano Pacífico', 'Océano Ártico'],
    answer: 2
    },
    {
    question: '¿Qué famoso científico desarrolló la teoría de la relatividad?',
    options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Stephen Hawking'],
    answer: 1
    },
    {
    question: '¿Cuál es el río más largo del mundo?',
    options: ['Nilo', 'Amazonas', 'Yangtsé', 'Misisipi'],
    answer: 0
    },
    {
    question: '¿Qué gas es necesario para que ocurra la combustión?',
    options: ['Oxígeno', 'Nitrógeno', 'Dióxido de carbono', 'Hidrógeno'],
    answer: 0
    },
    {
    question: '¿Quién escribió la obra "1984"?',
    options: ['Aldous Huxley', 'George Orwell', 'J.R.R. Tolkien', 'Ray Bradbury'],
    answer: 1
    },
    {
    question: '¿En qué año se inauguró la Torre Eiffel en París?',
    options: ['1885', '1899', '1905', '1889'],
    answer: 3
    },
    {
    question: '¿Cuál es el país más grande del mundo en términos de área terrestre?',
    options: ['China', 'Rusia', 'Estados Unidos', 'Canadá'],
    answer: 1
    },
    {
    question: '¿En qué año empezó la primera Guerra Mundial?',
    options: ['1918', '1914', '1916', '1920'],
    answer: 1
    },
    {
    question: '¿Cuál es la capa más externa de la Tierra?',
    options: ['Manto', 'Núcleo', 'Corteza', 'Magma'],
    answer: 2
    },
    {
    question: '¿Quién es considerado el padre de la psicología moderna?',
    options: ['Sigmund Freud', 'Carl Jung', 'Ivan Pavlov', 'B.F. Skinner'],
    answer: 0
    },
    {
    question: '¿Cuál es el río más largo de América del Sur?',
    options: ['Amazonas', 'Orinoco', 'Magdalena', 'Paraná'],
    answer: 0
    },
];

// Creamos una variable para llevar cuenta de la pregunta actual.
let currentQuestion = 0;

//Función para controlar la carga de una pregunta en pantalla.
function loadQuestion() {
    console.log("Esto es lo primero que se carga. ARRANQUE DE PROGRAMA.")
    const currentTrivia = triviaData[currentQuestion];
    console.log(currentQuestion);
    questionElement.textContent = currentTrivia.question;

    optionsElement.innerHTML = '';
    currentTrivia.options.forEach((option, index) => {
    const optionElement = document.createElement('div');
    optionElement.className = 'option';
    optionElement.textContent = option;
    //Se hace una llamada para hacer la verificación de si está bien o no una pregunta.
    optionElement.addEventListener('click', () => checkAnswer(index));
    optionsElement.appendChild(optionElement);
  });

  //En esta función se controla que no aparezca el botón siguiente cuando no debe.
    nextButton.style.display = 'none';
}

//Función para verificar si la respuesta es correcta o incorrecta.
function checkAnswer(selectedIndex) {
    const currentTrivia = triviaData[currentQuestion];
    if (selectedIndex === currentTrivia.answer) {
        optionsElement.innerHTML = '¡Respuesta correcta!';
    } else {
        optionsElement.innerHTML = 'Respuesta incorrecta';
    }
    //Una vez visualizado si es correcto o no se pasa a mostrar el botón que pasa de display:none a display:block.
    nextButton.style.display = 'block';
}

//Control directo del botón de siguiente. Si se acaban las preguntas se controla también el mensaje que aparece en pantalla.
nextButton.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < triviaData.length) {
        loadQuestion();
    } else {
        questionElement.textContent = '¡Has completado la trivia!';
        optionsElement.innerHTML = '';
        nextButton.style.display = 'none';
    }
});

loadQuestion();
