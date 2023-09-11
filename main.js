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

async function fetchDataFromAPI() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); 
    if (!response.ok) {
      throw new Error('Error al cargar los datos');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener datos:', error);
    return [];
  }
}

window.addEventListener('load', async function() {
  const storedTotalCost = localStorage.getItem('totalCost');
  if (storedTotalCost) {
    document.getElementById("totalCost").innerText = "El costo total es: $" + storedTotalCost;
  }

  // Cargar datos de la API de manera asíncrona
  const apiData = await fetchDataFromAPI();
  // Puedes utilizar 'apiData' en tu lógica aquí
});

document.getElementById("calculateWithIVA").addEventListener("click", function() {
  calculateTotal(productsArray1, true);
});

document.getElementById("calculateWithoutIVA").addEventListener("click", function() {
  calculateTotal(productsArray2, false);
});
