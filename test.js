const form = document.querySelector("#form");

productArray = [];

function addProduct() {
  let input = document.getElementById("product");
  let output = document.getElementById("output");
  let div = document.createElement("div");

  if (input.value == "") {
    console.log("invalid input");
  } else {
    div.innerHTML = input.value;
    output.style.display = "block";
    output.appendChild(div);
    input.value = "";
  }
  let newProduct = { input };
  productArray.push(newProduct);

  console.log(productArray);
}
