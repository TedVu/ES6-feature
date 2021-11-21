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
    setTimeout(() => {
      console.log("Function : " + this.name);
    }, 100);
  }
}

alert("Hello World");
