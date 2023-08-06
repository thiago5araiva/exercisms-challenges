///Resistor Color Duo

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

export const decodedValue = (color) => {
  const first = COLORS.indexOf(color[0]);
  const second = COLORS.indexOf(color[1]);
  const number = +`${first}${second}`;
  return number;
};

console.log(decodedValue(['brown', 'black']));
