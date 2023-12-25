function findFirstRepeated(gifts) {
    const seenNumbers = new Set();
  
    for (const gift of gifts) {
      if (seenNumbers.has(gift)) {
        return gift; 
      } else {
        seenNumbers.add(gift);
      }
    }
    return -1; 
}