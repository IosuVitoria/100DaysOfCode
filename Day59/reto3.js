function findNaughtyStep(original, modified) {
    const minLength = Math.min(original.length, modified.length);
  
    for (let i = 0; i < minLength; i++) {
      if (original[i] !== modified[i]) {
        return modified[i];
      }
    }

    if (modified.length > original.length) {
      return modified.slice(-1);
    }
  

    if (original.length > modified.length) {
      return original.slice(-1);
    }
    
    for(let i = 0; i <= original.length; i++){
        if(original[i]!==modified[i]){
            let letra = modified[i];
            return letra;
        }
    }
    return '';
}

  const original1 = 'abcd';
const modified1 = 'abcde';
console.log(findNaughtyStep(original1, modified1)); // 'e'

const original2 = 'stepfor';
const modified2 = 'stepor';
console.log(findNaughtyStep(original2, modified2)); // 'f'

const original3 = 'abcde';
const modified3 = 'abcde';
console.log(findNaughtyStep(original3, modified3)); // ''