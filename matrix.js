export class Matrix {
  constructor(numbers) {
    this.numbers = numbers;
  }
  format(arr) {
    return arr.reduce((acc, value) => {
      const values = value.split(' ');
      acc.push(values.map((item) => +item));
      return acc;
    }, []);
  }

  get rows() {
    const arr = this.numbers.split('\n');
    return this.format(arr);
  }

  get columns() {
    const res = this.format(this.numbers.split('\n'));
    let columns = [...res];
    let result = [];
    let count = 1;
    const col = (values) => {
      console.log(values[0].length);
      if (values[0].length === result.length) return;
      const res = values.map((item) => item[item.length - count]);
      result.push(res);
      count += 1;
      col(values);
    };
    col(columns);
    return result.reverse();
  }
}
/** ROWS */
// const matrix = new Matrix('1').rows[0]
// const matrix = new Matrix('1 2\n3 4').rows[1];
// const matrix = new Matrix('1 2\n10 20').rows[1]
// const matrix = new Matrix('1 2 3\n4 5 6\n7 8 9\n8 7 6').rows[3]

/** COLUMNS */
// const matrix = new Matrix('1').columns[0];
// const matrix = new Matrix('1 2 3\n4 5 6\n7 8 9').columns[2];
// const matrix = new Matrix('1 2 3 4\n5 6 7 8\n9 8 7 6').columns[3];
// const matrix = new Matrix('1 2 3\n4 5 6').columns[2];
const matrix = new Matrix('89 1903 3\n18 3 1\n9 4 800').columns[1];
