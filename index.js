function addition(...c) {
    if (!c.every((a) => Number.isNumber(a)))
      throw "All arguments must be numbers.";
    return c.reduce((a, b) => a + b);
  }
  
  addition(1, 2, 3); //> 6
  addition(10, "B", 20); //> error All arguments must be numbers.
  addition("hello", 5, 11); //this should throw error
  
