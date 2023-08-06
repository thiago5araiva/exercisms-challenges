export const compute = (a, b) => {
  const dna = a.split('');
  const compare = b.split('');

  if (dna.length !== compare.length) {
    throw new Error('strands must be of equal length');
  }

  let count = dna.length;
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === compare[i]) {
      count -= 1;
    }
  }
  return count;
};

// compute('GGACTGAAATCTG', 'GGACTGAAATCTG'); //0
// console.log(compute('GAGCCTACTAACGGGAT', 'CATCGTAATGACGGCCT')); //7
// console.log(compute('', '')) 0
// console.log(compute('A', 'A'))
console.log(compute('G', 'T'));
