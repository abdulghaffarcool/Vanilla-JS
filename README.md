# Vanilla-JS
Pure javascript concepts and practice projects

## Ecmascript 6 or ES6 or ES 2015
Standardized javascript

- ES6 Variables var vs. let vs. const
- ES6 Classes
- ES6 Arrow Functions
- ES6 Array Methods
- ES6 Destucturing
- ES6 Spread Operator
- ES6 Modules
- ES6 Ternary Operator

### 1. Variables var vs. let vs. const

Before ES6 there were only one way of defining your variables: with the var keyword. If you did not define them, 
they would be assigned to the global object. Unless you were in strict mode, then you would get an error if your 
variables were undefined.

1. If you use var outside of a function, it belongs to the global scope.
2. If you use var inside of a function, it belongs to that function.
3. If you use var inside of a block, i.e. a for loop, the variable is still available outside for loop within function.

**VERDICT: var has a function scope, not a block scope.
let and const has a block scope. Use let and const instead of var.**

### 2. Classes
ES6 introduced classes.

A class is a type of function, to initiate it, we use the keyword class, and the properties are assigned inside a constructor() method.

- class keyword to create a class
- extends keyword for inheritance
- constructor() to initialize properties
- super() to call parent class constructor

class Car {

  constructor(name) {
  
    this.brand = name;

  }

  present() {
  
    return 'I have a ' + this.brand;
  
  }
}

class Model extends Car {

  constructor(name, mod) {
  
    super(name);
    this.model = mod;
    
  } 
  
  show() {
  
      return this.present() + ', it is a ' + this.model
      
  }
  
}

mycar = new Model("Ford", "Mustang");
mycar.show();
