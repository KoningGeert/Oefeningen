addEventListener('DOMContentLoaded', () => {

const products = document.querySelectorAll("article");

products.forEach(product => {
    const plusBtn = product.querySelector(".increment"); // eerste + knop
    const minusBtn = product.querySelector(".decrement"); // eerste - knop
    const qtyEl = product.querySelector(".qty"); // eerste qty span
    const productPrice = product.querySelector(".product-price"); // eerste prijs
    const applyDiscountBtn = document.getElementById('apply-discount'); // Apply button

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

  if (applyDiscountBtn) {
    applyDiscountBtn.addEventListener('click', () => {
      totalPrice();
    });
  }

  function totalPrice(){
    const subTotal = product.querySelector(".product-subtotal");
    const price = parseFloat(productPrice.innerText);
    let totalPrice = price * qtyNumber;
    console.log(totalPrice);
    const shippingCost = document.getElementById('cart-shipping');
    const cartTotal = document.getElementById('cart-grandtotal');
    const discountCode = document.getElementById('discount-code');
    const cartDiscount = document.getElementById('cart-discount');


    console.log(shippingCost);
    subTotal.innerText = totalPrice;

    const cartTotalEl = document.getElementById('cart-total');
    let subTotalNumber = 0;
    const qtyDisplay = document.getElementById('cart-count');
    let totalQty = 0;
    let totalNumber = 0;
    let discount = 0;



    products.forEach(product => {
        const subTotalEl = product.querySelector('.product-subtotal');
        const subTotal = parseFloat(subTotalEl.innerText) || 0;
        const qtyEl = product.querySelector('.qty');
        const qty = parseInt(qtyEl.innerText) || 0;
        totalQty += qty;

        subTotalNumber += subTotal;
        totalNumber += subTotal;

    });

    if (subTotalNumber >= 50){
        shippingCost.innerText = '0.00';
    } else {
        shippingCost.innerText = '4,95';
        totalNumber += 4.95;
        console.log(totalNumber);
    }

    if (discountCode.value.trim().toUpperCase() === "KORTING10"){
        discount = totalNumber * 0.1;
        totalNumber = totalNumber - discount;
        console.log(discount);

    } else {
        subTotalNumber = subTotalNumber;   
    }



    cartDiscount.innerText = discount.toFixed(2);
    qtyDisplay.innerText = totalQty;
    cartTotalEl.innerText = subTotalNumber.toFixed(2);
    cartTotal.innerText = totalNumber.toFixed(2);
}

});
});