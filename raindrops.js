export const convert = (raindrops) => {
  const isFactorThree = raindrops % 3 === 0;
  const isFactorFive = raindrops % 5 === 0;
  const isFactorSeven = raindrops % 7 === 0;

  if (isFactorThree && isFactorFive && isFactorSeven) return 'PlingPlangPlong';
  if (isFactorFive && isFactorSeven) return 'PlangPlong';
  if (isFactorThree && isFactorSeven) return 'PlingPlong';
  if (isFactorThree && isFactorFive) return 'PlingPlang';
  if (isFactorThree) return 'Pling';
  if (isFactorFive) return 'Plang';
  if (isFactorSeven) return 'Plong';

  return `${raindrops}`;
};

console.log(convert(7));
