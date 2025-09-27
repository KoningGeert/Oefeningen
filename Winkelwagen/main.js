addEventListener('DOMContentLoaded', () => {

const products = document.querySelectorAll("article");

products.forEach(product => {
    const plusBtn = product.querySelector(".increment"); // eerste + knop
    const minusBtn = product.querySelector(".decrement"); // eerste - knop
    const qtyEl = product.querySelector(".qty"); // eerste qty span
    const productPrice = product.querySelector(".product-price"); // eerste prijs
    let qtyNumber = 0;

plusBtn.addEventListener('click', () => {
    qtyNumber++;
    qtyEl.innerText = qtyNumber;
    console.log(qtyNumber);
    totalPrice();
  });

minusBtn.addEventListener('click', () => {
    if (qtyNumber > 0) {
      qtyNumber--;
      qtyEl.innerText = qtyNumber;
    }
    console.log(qtyNumber);
    totalPrice();
  });

  function totalPrice(){
    const subTotal = product.querySelector(".product-subtotal");
    const price = parseFloat(productPrice.innerText);
    let totalPrice = price * qtyNumber;
    console.log(totalPrice);

    subTotal.innerText = totalPrice;

    const cartTotalEl = document.getElementById('cart-total');
    let cartTotal = 0;
    const qtyDisplay = document.getElementById('cart-count');
    let totalQty = 0;


    products.forEach(product => {
        const subTotalEl = product.querySelector('.product-subtotal');
        const subTotal = parseFloat(subTotalEl.innerText) || 0;
        const qtyEl = product.querySelector('.qty');
        const qty = parseInt(qtyEl.innerText) || 0;

        totalQty += qty;

        console.log('Totale hoeveelheid in winkelwagen:', totalQty);
        cartTotal += subTotal;

    });
    qtyDisplay.innerText = totalQty;
    cartTotalEl.innerText = cartTotal.toFixed(2);
}

});
});