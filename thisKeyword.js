class Person {
  constructor(name) {
    this.name = name;
  }

  printNameArrow() {
    setTimeout(() => {
      console.log("Arrow: " + this.name);
    }, 100);
  }

  printNameFunction() {
    setTimeout(function () {
      console.log("Function : " + this.name);
    }, 100);
  }
}

let person = new Person("Ted");

// This in arrow function is where the function is defined
person.printNameArrow();

// This in normal function is where the function is called
person.printNameFunction();
