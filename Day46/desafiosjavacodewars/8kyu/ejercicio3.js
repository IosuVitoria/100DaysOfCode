//Solución del ejercicio en javascript para implementar después lógica en java.

const shortName = (data) => {
    let newMessage = "";
    newMessage = data.split(" ");
    let conversion = "";
    // console.log(newMessage);
    // console.log(newMessage[0][0]);
    // console.log(newMessage[1][0]);
    conversion = newMessage[0][0]+"."+newMessage[1][0];
    console.log(conversion)
}

shortName("Iosu Gómez");
shortName("Verónica Moreno");