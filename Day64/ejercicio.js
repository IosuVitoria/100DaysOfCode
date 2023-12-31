// We need a function that can transform a number (integer) into a string. Ejercicio codewars

function numberToString(num) {
    return num.toString();
}

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

//Ejercicio codewars

function sum(numbers) {
    "use strict";
    let sum = 0;
    if (!numbers || !Array.isArray(numbers)) {
        return 0;
    }
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
// If you want to know more: http://en.wikipedia.org/wiki/DNA
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
// Example: (input --> output)


//Ejercicio codewars
function DNAStrand(dna) {
    let output = "";
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === "A" || dna[i] === "a") {
            output += "T";
        } else if (dna[i] === "T" || dna[i] === "t") {
            output += "A";
        } else if (dna[i] === "C" || dna[i] === "c") {
            output += "G";
        } else if (dna[i] === "G" || dna[i] === "g") {
            output += "C";
        }
    }
    return output;
}
