var shoppingCart = [];

function addProduct(product) {
  shoppingCart.push(product);
  updateTotal();
}

function removeProduct(product) {
  var index = shoppingCart.indexOf(product);
  if (index > -1) {
    shoppingCart.splice(index, 1);
    updateTotal();
  }
}

function updateTotal() {
  var total = 0;
  for (var i = 0; i < shoppingCart.length; i++) {
    total += shoppingCart[i].price * shoppingCart[i].quantity;
  }
  document.querySelector(".total h3").textContent = "$" + total;
}

document.querySelector(".product-add-button").addEventListener("click", function() {
  var product = {
    name: this.dataset.name,
    price: this.dataset.price,
    quantity: 1
  };
  addProduct(product);
});

document.querySelector(".product-remove-button").addEventListener("click", function() {
  removeProduct(this.dataset.productId);
});