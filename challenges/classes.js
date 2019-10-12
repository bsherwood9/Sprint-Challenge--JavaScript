// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker2 {
  constructor(attribs) {
    this.length = attribs.length;
    this.width = attribs.width;
    this.height = attribs.height;
  }
  volume = function() {
    return this.length * this.width * this.height;
  };
  surfaceArea = function() {
    return (
      2 *
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height)
    );
  };
}

const cuboid2 = new CuboidMaker2({
  length: 4,
  width: 5,
  height: 5
});
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log("Class answer", cuboid2.volume()); // 100
console.log("Class answer surfArea", cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

//volume for cube = s
class CubeMaker extends CuboidMaker2 {
  constructor(attribs) {
    super(attribs);
    this.side = attribs.side;
  }
  volumeCube = function() {
    return Math.pow(this.side, 3);
  };
  surfAreaCube = function() {
    return 6 * Math.pow(this.side, 2);
  };
}

const cube = new CubeMaker({
  length: 8,
  width: 5,
  height: 5,
  side: 3
});

const cube2 = new CubeMaker({
  length: 4,
  width: 5,
  height: 5,
  side: 8
});

console.log(cube.volumeCube());
console.log(cube.surfAreaCube());
console.log(cube.volume()); //200
console.log(cube.surfaceArea());

// 2(8 * 5 + 8 * 5 + 5 * 5) = 210

console.log("cube2 volumecube", cube2.volumeCube());
console.log("cube2 surfaceArea", cube2.surfAreaCube());
console.log("cube2 normal volume", cube2.volume()); //200
console.log("cube2 normal surface area", cube2.surfaceArea());
