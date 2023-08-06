export const toRna = (sequence) => {
  const rna = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
  };
  if (sequence.length === 0) return '';

  const splitSequence = sequence.split('');
  const transformSequence = splitSequence.reduce((acc, value) => {
    return `${acc}${rna[value]}`;
  }, '');

  return transformSequence;
};

console.log(toRna('C'));
