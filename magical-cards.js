// const deck = [2, 5, 4, 9, 3];

export function discardTopCard(deck) {
  const firstPile = deck[0];
  const secondPile = deck.slice(1);
  console.log(secondPile);
  return [firstPile, [...secondPile]];
}
const deck = [5, 4, 7, 10];

export function insertFaceCards(deck) {
  const first = deck[0]
  const faces = ['jack', 'queen', 'king'];
  const rest = deck.slice(1);
  const newDeck = [first,...faces, ...rest]
  return newDeck;
}
insertFaceCards(deck);
