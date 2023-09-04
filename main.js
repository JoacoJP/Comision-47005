const productsArray1 = [
  { name: "Producto 1", price: 10000 },
  { name: "Producto 2", price: 30000 },
  { name: "Producto 3", price: 15000 }
];

const productsArray2 = [
  { name: "Producto A", price: 8500 },
  { name: "Producto B", price: 25000 },
  { name: "Producto C", price: 10000 }
];

function calculateTotal(products) {
  const totalCost = products.reduce((total, product, index) => {
    const quantity = parseInt(document.getElementById("product" + (index + 1)).value);
    
    if (!isNaN(quantity) && quantity >= 0) {
      return total + product.price * quantity;
    } else {
      return total;
    }
  }, 0);

  document.getElementById("totalCost").innerText = "El costo total es: $" + totalCost;

  localStorage.setItem('totalCost', totalCost);
}

window.addEventListener('load', function() {
  const storedTotalCost = localStorage.getItem('totalCost');
  if (storedTotalCost) {
    document.getElementById("totalCost").innerText = "El costo total es: $" + storedTotalCost;
  }
});

document.getElementById("calculateWithIVA").addEventListener("click", function() {
  calculateTotal(productsArray1, true);
});

document.getElementById("calculateWithoutIVA").addEventListener("click", function() {
  calculateTotal(productsArray2, false);
});

