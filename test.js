<<<<<<< Updated upstream
productArray = [
  "skateboard",
  "freeskates",
  "griptape",
  "scooter",
  "rollerskates",
  "rollerblades",
  "grindwax",
];
console.log(productArray);

const output = document.querySelector(".output");
const product = document.querySelector("#product");

function addProduct() {
  if (input) {
  } else {
  }
}
=======
let input = document.getElementById("product");
let output = document.getElementById("output");

productArray = [];

function addProduct() {
  if (input.value == "") {
    console.log("invalid input");
  } else {
    productArray.push(input.value);
    input.value = "";
    output.style.display = "block";
    output.innerHTML = `${productArray}`;
    //output.innerHTML = "hello world";
  }

  console.log(productArray);
}

// Assignment 3:
// Hint: Use a loop(look up the javascript loop on w3schools.) on your product array and set the max length of the loop to the array using
// dot notation (array.length) and then you do the following:
//
// set the input to empty, similar how you would check in the if statement previously,
// just get document.getelementbyid then set the .value to an empty string.

// then set the output div to display block, its normally set to none, which means invisible
// This means that you need to get your output variable use dot notation to set style.display = "block"

// set the div.textContent equal to the the array index number [i] and dot notation of the product
// `${productArray[i].yourinput}`

// finally use the appendChild method from the output variable you had from earlier.
// output.appendChild(yourdivnamehere)

// this line is to prevent the webpage from reloading. DO NOT MODIFY IT.

//https://www.youtube.com/watch?v=MkE2_YWnJbo
>>>>>>> Stashed changes
