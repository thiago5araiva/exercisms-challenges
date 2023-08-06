export class Triangle {
  constructor(...sides) {
    this.uniqueVals = [...new Set(sides)];
    this.sides = [...sides];
  }
  uniqueVals;
  sides;
  get isEquilateral() {
    if (
      this.isValid() &&
      this.uniqueVals.length === 1 &&
      this.uniqueVals.indexOf(0) == -1
    )
      return true;
    else return false;
  }
  get isIsosceles() {
    if (
      this.isValid() &&
      (this.uniqueVals.length === 2 || this.uniqueVals.length === 1)
    )
      return true;
    else return false;
  }
  get isScalene() {
    if (this.isValid() && this.uniqueVals.length === 3) return true;
    else return false;
  }
  isValid() {
    let [x, y, z] = [...this.sides];

    if (x + y >= z && y + z >= x && x + z >= y) return true;
    else return false;
  }
}
