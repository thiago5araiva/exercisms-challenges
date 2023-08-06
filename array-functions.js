export function seeingDouble(deck) {
  return deck.map((num) => num * 2);
}

export function threeOfEachThree(deck) {
  return deck
    .map((card) => (card === 3 ? [card, card, card] : [card]))
    .reduce((acc, val) => acc.concat(val), []);
}

export function middleTwo(deck) {
  const length = deck.length;
  const middle = length / 2;
  return deck.slice(middle - 1, middle + 1);
}

export function sandwichTrick(deck) {
  const top = deck.shift();
  const bottom = deck.pop();
  const middle = deck.length / 2;
  deck.splice(middle, 0, bottom);
  deck.splice(middle + 1, 0, top);
  return deck;
}

export function twoIsSpecial(deck) {
  const result = deck.filter((num) => num === 2);
  return result;
}

export function perfectlyOrdered(deck) {
  return deck.sort((a, b) => a - b);
}
const deck = [10, 1, 5, 3, 2];

export function reorder(deck) {
  const result = deck.reverse();
  console.log(result);
}
reorder(deck);
