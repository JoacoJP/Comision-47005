function calculateTotal() {
    const productPrices = [8500, 30000, 15000];
    const totalProducts = productPrices.length;
    let totalCost = 0;

    // Recorremos los productos y sumamos el costo total
    for (let i = 0; i < totalProducts; i++) {
    const quantity = parseInt(document.getElementById("product" + (i + 1)).value);

      // Verificamos si la cantidad es válida (mayor o igual a cero)
    if (!isNaN(quantity) && quantity >= 0) {
        totalCost += productPrices[i] * quantity;
    }
    }

    // Mostramos el resultado al usuario
    document.getElementById("totalCost").innerText = "El costo total es: $" + totalCost;

}

