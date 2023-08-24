let language = 'es'; // Idioma predeterminado. 

// Cambiar el idioma de la interfaz. Llama a updateUI para hacer el cambio de idioma.
const changeLanguage = (lang) => {
    if (lang !== language) {
        language = lang;
        document.querySelectorAll('.flag-icon').forEach(icon => icon.classList.remove('active'));
        document.getElementById(lang).classList.add('active');
        updateUI();
    }
};

// Parte que guarda los dos idiomas del texto.
const updateUI = () => {
    const langData = {
        en: {
            title: 'Password Generator',
            lengthLabel: 'Length',
            includeNumbersLabel: 'Include Numbers',
            includeSymbolsLabel: 'Include Symbols',
            generateButton: 'Generate Password',
            copyButton: 'Copy to Clipboard'
        },
        es: {
            title: 'Generador de Contraseñas',
            lengthLabel: 'Longitud',
            includeNumbersLabel: 'Incluir números',
            includeSymbolsLabel: 'Incluir símbolos',
            generateButton: 'Generar contraseña',
            copyButton: 'Copiar al Portapapeles'
        }
    };

    const lang = langData[language];
    document.getElementById('title').textContent = lang.title;
    document.getElementById('lengthLabel').textContent = lang.lengthLabel;
    document.getElementById('includeNumbersLabel').textContent = lang.includeNumbersLabel;
    document.getElementById('includeSymbolsLabel').textContent = lang.includeSymbolsLabel;
    document.getElementById('btnGenerate').textContent = lang.generateButton;
    document.getElementById('copyButton').textContent = lang.copyButton;
};

updateUI();

// Genera la contraseña y la muestra. Se manipula la base agregando los números y los símbolos en función de si han sido agregados o no.
const generate = () => {
    const inputLength = parseInt(document.getElementById('inputLength').value);
    const $$checkBox1 = document.getElementById('checkbox1');
    const $$checkBox2 = document.getElementById('checkbox2');
    const $$password = document.getElementById('generatedPassword');
    const base = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = ' .?¿\'¡+-.,!·$%&/(|@#~€¬][{}';

    let selectedBase = base;
    if ($$checkBox1.checked) {
        selectedBase += numbers;
    }
    if ($$checkBox2.checked) {
        selectedBase += symbols;
    }

    const password = generatedPassword(selectedBase, inputLength);
    $$password.textContent = password;
    document.getElementById('copyButton').disabled = false;

};

// Copiar la contraseña al portapapeles. Revisar comando execComand para otro que no esté deprecado.
const copyToClipboard = () => {
    const password = document.getElementById('generatedPassword').textContent;
    const textarea = document.createElement('textarea');
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
};

// Lógica que recorre la base y va generando la contraseña.
const generatedPassword = (base, length) => {
    let password = '';
    for (let x = 0; x < length; x++) {
        let random = Math.floor(Math.random() * base.length);
        password += base.charAt(random);
    }
    return password;
};
