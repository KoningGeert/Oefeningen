addEventListener('DOMContentLoaded', () => {
    
const plusBtn = document.querySelector(".increment"); // eerste + knop
const minusBtn = document.querySelector(".decrement"); // eerste - knop
const qtyEl = document.querySelector(".qty"); // eerste qty span
const productPrice = document.querySelector(".product-price"); // eerste prijs
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
    const cartTotal = document.getElementById("cart-total");
    const subTotal = document.querySelector(".product-subtotal");
    const price = parseFloat(productPrice.innerText); // haal tekst op en maak er een getal van
    let totalPrice = price * qtyNumber;
    console.log(totalPrice);

    cartTotal.innerText = totalPrice;
    subTotal.innerText = totalPrice;
  }

console.log(qtyNumber)
});