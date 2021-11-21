function sum(a, b) {
  return a + b;
}

// converting to arrow function
const sum2 = (a, b) => {
  return a + b;
};

// converting to arrow function - make it more concise
const sum2 = (a, b) => a + b;

function isPositive(number) {
  return number >= 0;
}

// converting to arrow function - make it super concise
const isPositive2 = (number) => number >= 0;

function randomNumber() {
  return Math.random();
}

document.addEventListener("click", function () {
  console.log("click");
});

document.addEventListener("click", () => {
  console.log("click");
});
