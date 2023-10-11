const analyzeText = () => {
    const text = document.getElementById('textInput').value;
    const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
  

    const words = text.split(/\s+/).filter(word => word.length > 0);
    const totalLength = words.reduce((acc, word) => acc + word.length, 0);
    const averageWordLength = totalLength / wordCount || 0;
  

    const sentenceCount = text.split('.').length - 1;
  
    const longestWord = words.reduce((longest, current) => {
      return current.length > longest.length ? current : longest;
    }, '');
  

    document.getElementById('wordCount').innerText = wordCount;
    document.getElementById('averageWordLength').innerText = averageWordLength.toFixed(2);
    document.getElementById('sentenceCount').innerText = sentenceCount;
    document.getElementById('longestWord').innerText = longestWord;
    document.getElementById('results').classList.remove('hidden');
}
  