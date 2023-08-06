// etl
export const transform = (old) => {
  let custom = {};
  const keys = Object.keys(old);
  for (const i in old) {
    for (const j in old[i]) {
      Object.assign(custom, { [old[i][j].toLowerCase()]: +i });
    }
  }
  return custom;
};
// const old = { 1: ['A'] };
// const old = { 1: ['A', 'E', 'I', 'O', 'U'] };
// const old = { 1: ['A', 'E'], 2: ['D', 'G'] };
// const old = {
//   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
//   2: ['D', 'G'],
//   3: ['B', 'C', 'M', 'P'],
//   4: ['F', 'H', 'V', 'W', 'Y'],
//   5: ['K'],
//   8: ['J', 'X'],
//   10: ['Q', 'Z'],
// };


console.log('function', transform(old));
