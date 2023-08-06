// Windowing System

export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};

export class ProgramWindow {
  constructor() {
    this.screenSize = { width: 800, height: 600 };
    this.size = new Size();
    this.position = new Position();
  }
  resize(newSize) {
    const minHeight = 1;
    const minWidth = 1;

    const maxHeight = 300;
    const maxWidth = 400;

    const clippedHeight = Math.max(
      minHeight,
      Math.min(newSize.height, maxHeight)
    );
    const clippedWidth = Math.max(minWidth, Math.min(newSize.width, maxWidth));
    this.size.width = clippedWidth;
    this.size.height = clippedHeight;
  }
  move(newPosition) {
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;

    const newX = Math.max(0, Math.min(newPosition.x, maxX));
    const newY = Math.max(0, Math.min(newPosition.y, maxY));
    this.position.move(newX, newY);
  }
}

const programWindow = new ProgramWindow();
const newPosition = new Position(525, 450);

programWindow.move(newPosition);
// console.log(programWindow.position.x);
// console.log(programWindow.position.y);
