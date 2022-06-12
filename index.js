function number(...c) {
    if (!c.every((a) => Numbers.isNumbers(a)))
      throw "All arguments must be numbers.";
    return c.reduce((a, b) => a + b);
  }
  
  number(1, 2, 3); //> 6
  number(10, "B", 20); //> error All arguments must be numbers.