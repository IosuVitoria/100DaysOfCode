const buscarPalabra = (string, word) =>{
    if(string.includes(word) === true ){
        return true;
    }else{
        return false;
    }
}

console.log(buscarPalabra("Hola como estas", "Hola"));
console.log(buscarPalabra("Hola como estas", "dorito"));
