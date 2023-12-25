function manufacture(gifts, materials) {
    const result = [];
  
    for (const gift of gifts) {
      const giftLetters = new Set(gift);
      let canManufacture = true;
      for (const letter of giftLetters) {
        if (!materials.includes(letter)) {
          canManufacture = false;
          break;
        }
      }
      if (canManufacture) {
        result.push(gift);
      }
    }
    return result;
}

// 2º Solución. Código refactorizado.

// function manufacture(gifts, materials) {
//     return gifts.filter(gift =>
//       gift.split('').every(letter => materials.includes(letter))
//     );
//   }