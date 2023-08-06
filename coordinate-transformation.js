export function scale2d(sx, sy) {
  return function (x, y) {
    return [x * sx, y * sy];
  };
}

function memoizeTransform(func) {
  let lastArgs = null;
  let lastResult = null;

  return function (...args) {
    if (
      args.length === lastArgs?.length &&
      args.every((value, index) => value === lastArgs[index])
    ) {
      return lastResult;
    } else {
      lastArgs = args;
      lastResult = func(...args);
      return lastResult;
    }
  };
}

const tripleScale = scale2d(3, 3);
const memoizedScale = memoizeTransform(tripleScale);

console.log(memoizedScale(4, 3)); // Output: [12, 9] (computed)
console.log(memoizedScale(4, 3)); // Output: [12, 9] (remembered)
