//resistor-color
export const colorCode = (color) => {
  let code = 0;
  for (const item of COLORS) {
    item === color && (code = COLORS.indexOf(item));
  }
  return code;
};

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

console.log('func', colorCode('blue'));
