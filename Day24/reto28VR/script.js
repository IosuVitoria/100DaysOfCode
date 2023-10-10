const esArmstrong = (number) => {
    const transformed = number.toString();
    const length = transformed.length;
    let result = 0;

    if (length < 3) {
        console.log("Introduce un número de 3 cifras o más.");
    } else {
        for (let i = 0; i < length; i++) {
            const digit = parseInt(transformed[i]);
            result += digit ** length;
        }

        if (result === number) {
            console.log(`El número ${number} es un número Armstrong.`);
        } else {
            console.log(`El número ${number} no es un número Armstrong.`);
        }
    }
}

esArmstrong(153); 
esArmstrong(370); 
esArmstrong(371); 
esArmstrong(407); 
esArmstrong(1634); 
esArmstrong(8208); 
esArmstrong(9474); 
esArmstrong(123); 
