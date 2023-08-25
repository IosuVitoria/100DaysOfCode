function generateFizzBuzz() {
    const fizzNumber = parseInt(document.getElementById("fizzNumber").value);
    const buzzNumber = parseInt(document.getElementById("buzzNumber").value);
    const maxNumber = parseInt(document.getElementById("maxNumber").value);
    
    let tableContent = "";
    
    for (let i = 1; i <= maxNumber; i++) {
        let fizz = "";
        let buzz = "";
        
        if (i % fizzNumber === 0) {
            fizz = "x";
        }
        
        if (i % buzzNumber === 0) {
            buzz = "x";
        }
        
        let fizzBuzz = fizz + buzz === "xx" ? "FizzBuzz" : "";
        
        tableContent += `
            <tr>
                <td>${i}</td>
                <td>${fizz}</td>
                <td>${buzz}</td>
                <td>${fizzBuzz}</td>
            </tr>`;
    }
    
    const resultTable = document.getElementById("resultTable");
    resultTable.innerHTML = `
        <tr>
            <th>Número</th>
            <th>Fizz</th>
            <th>Buzz</th>
            <th>FizzBuzz</th>
        </tr>
        ${tableContent}`;
}
