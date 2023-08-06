// const earth = { year: 1.0, days: 365.25, seconds: 31557600 };
const planets = {
  earth: 31557600,
  mercury: 0.2408467,
  venus: 0.61519726,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

export const age = (currentPlanet, currentAge) => {
  if (currentPlanet === 'earth') return +(currentAge / 31557600).toFixed(2);
  return +(currentAge / planets[currentPlanet] / 31557600).toFixed(2);
};

console.log(age('mercury', 2134835688));
