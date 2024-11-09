export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Pick a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    
    // Swap elements at indices i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function bestAttribute(card) {
  const choices = card.attributes;
  const values = Object.values(choices);
  const max = Math.max(...values);
  for (const property in choices) {
    if (choices[property] === max) {
      return property;
    }
  }
}