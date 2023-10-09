function encrypt() {
    const message = document.getElementById('message').value.toUpperCase();
    const shift = parseInt(document.getElementById('shift').value);
  
    let result = '';
  
    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i);
  
      if (charCode >= 65 && charCode <= 90) {
        const shiftedCharCode = ((charCode - 65 + shift) % 26) + 65;
        result += String.fromCharCode(shiftedCharCode);
      } else {
        result += message.charAt(i);
      }
    }
  
    document.getElementById('result').value = result;
}
  