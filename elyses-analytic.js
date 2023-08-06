//  

export function getCardPosition(stack, card) {
  return stack.findIndex((num) => num === card);
}

export function doesStackIncludeCard(stack, card) {
  return stack.includes(card);
}

export function isEachCardEven(stack) {
  return stack.every((num) => num % 2 === 0);
}

export function doesStackIncludeOddCard(stack) {
  return stack.some((num) => num % 2 !== 0);
}

export function getFirstOddCard(stack) {
  return stack.find((num) => num % 2 !== 0);
}
const test = [5, 2, 3, 1];
export function getFirstEvenCardPosition(stack) {
  const firstEvenCard = stack.find((num) => num % 2 === 0);
  return getCardPosition(stack, firstEvenCard)
}

getFirstEvenCardPosition(test);
