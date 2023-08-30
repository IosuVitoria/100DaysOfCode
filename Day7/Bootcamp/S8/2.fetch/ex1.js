//Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch() y recibir los datos que devuelve. 
//Imprimelo mediante un console.log(). Para ello, es necesario que crees un .html y un .js.

fetch("https://api.agify.io?name=michael")
//Recupero el archivo y lo meto dentro del archivo JSON.
  .then((nameGet) => nameGet.json())
//Muestro la información.
  .then((nameGetData) => {
    console.log(nameGetData);
})
  .catch((mameGetError) => {
    console.log(nameGetError);
});