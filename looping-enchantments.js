export function determineOddEvenCards(stack, type) {
  let oddCount = 0;
  let evenCount = 0;
  for (const value of stack) {
    if (value % 2 !== 0) oddCount += 1;
    if (value % 2 === 0) evenCount += 1;
  }

  return type ? evenCount : oddCount;
}

determineOddEvenCards([1, 2, 3, 1, 5, 6], true);
determineOddEvenCards([1, 2, 3, 1, 5, 6], false);
