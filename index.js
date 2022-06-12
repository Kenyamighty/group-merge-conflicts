
function addOrError(...c) {
    if (!c.every((a) => Number.isNumber(a)))
      throw "All arguments must be numbers.";
    return c.reduce((a, b) => a + b);
  }
  
  addOrError(1, 2, 3); //> 6
  addOrError(10, "B", 20); //> error All arguments must be numbers.
  //We did it!
