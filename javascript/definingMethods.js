/*//////////////////////////////////////////////////////////////
                                METHODS

Every method is a function, but not every function is a method
We can add functions as properties on objects.
We call them Methods
//////////////////////////////////////////////////////////////*/

// Method using an object

const math = {
  multiply : function( x, y ) {
    return x * y;
  },
  divide : function( x, y ) {
    return x / y;
  },
  square : function(x) {
    return x * x;
  }
}


const myMath = {
  PI: 3.14159,
  square : function(num) {
    return num * num;
  },
  cube : function(num) {
    return num ** 3;
  }
}
myMath(2);


// We do this so often that there's a new shorthand way of adding methods.
// You no longer need the function keyword using this shorthand syntax.
const myOtherMath = {
  blah: 'Hi',
  add(x, y) {
    return x + y;
  },
  multiply(x, y) {
    return x * y;
  }
}
myOtherMath.add(50, 60); // 110

// Exercise:
// Define an object called `square`, which will hold methods that have to do with the geometry of squares.
// It should contain two methods, `area` and `perimeter`.
// `area` should accept the length of a `side` (all sides are the same in a square) and then return the side squared.
// `perimeter` should accept the length of a `side` and return that side multiplied by 4.
// square(10) // 100
// square.perimeter(10) // 40

const square = {
  area(side) {
    return side * side;
  },
  perimeter(side) {
    return side * 4;
  }
}