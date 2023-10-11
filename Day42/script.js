function analyzeText() {
    const text = document.getElementById('textInput').value;
  
    // Número total de palabras
    const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
  
    // Longitud media de las palabras
    const words = text.split(/\s+/).filter(word => word.length > 0);
    const totalLength = words.reduce((acc, word) => acc + word.length, 0);
    const averageWordLength = totalLength / wordCount || 0;
  
    // Número de oraciones
    const sentenceCount = text.split('.').length - 1;
  
    // Palabra más larga
    const longestWord = words.reduce((longest, current) => {
      return current.length > longest.length ? current : longest;
    }, '');
  
    // Mostrar los resultados
    document.getElementById('wordCount').innerText = wordCount;
    document.getElementById('averageWordLength').innerText = averageWordLength.toFixed(2);
    document.getElementById('sentenceCount').innerText = sentenceCount;
    document.getElementById('longestWord').innerText = longestWord;
  
    // Mostrar los resultados div
    document.getElementById('results').classList.remove('hidden');
  }
  