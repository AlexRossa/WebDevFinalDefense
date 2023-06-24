const button = document.querySelector("#myButton");
button.addEventListener("click", function () {
  // Code executed when button is clicked
  alert("You have become an avenger");
});

const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});

console.log(evenNumbers);
