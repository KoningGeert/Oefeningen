addEventListener('DOMContentLoaded', () => {

    const products = document.querySelectorAll("article");
  
    products.forEach(product => {
      const plusBtn = product.querySelector(".increment"); 
      const minusBtn = product.querySelector(".decrement"); 
      const qtyEl = product.querySelector(".qty"); 
      const productPrice = product.querySelector(".product-price"); 
      const applyDiscountBtn = document.getElementById('apply-discount'); 
  
      let qtyNumber = 0;
  
      plusBtn.addEventListener('click', () => {
        qtyNumber++;
        qtyEl.innerText = qtyNumber;
        totalPrice();
      });
  
      minusBtn.addEventListener('click', () => {
        if (qtyNumber > 0) {
          qtyNumber--;
          qtyEl.innerText = qtyNumber;
        }
        totalPrice();
      });
  
      if (applyDiscountBtn) {
        applyDiscountBtn.addEventListener('click', () => {
          totalPrice();
        });
      }
  
      function totalPrice() {
        const subTotal = product.querySelector(".product-subtotal");
        const price = parseFloat(productPrice.innerText);
        let productTotal = price * qtyNumber;
        subTotal.innerText = productTotal.toFixed(2);
  
        const shippingCost = document.getElementById('cart-shipping');
        const cartTotal = document.getElementById('cart-grandtotal');
        const discountCode = document.getElementById('discount-code');
        const cartDiscount = document.getElementById('cart-discount');
        const cartTotalEl = document.getElementById('cart-total');
        const qtyDisplay = document.getElementById('cart-count');
  
        let subTotalNumber = 0;
        let totalQty = 0;
        let discount = 0;
  
        // bereken subtotaal van alle producten
        products.forEach(product => {
          const subTotalEl = product.querySelector('.product-subtotal');
          const sub = parseFloat(subTotalEl.innerText) || 0;
          const qtyEl = product.querySelector('.qty');
          const qty = parseInt(qtyEl.innerText) || 0;
  
          totalQty += qty;
          subTotalNumber += sub;
        });
  
        // korting toepassen op het hele subtotaal
        if (discountCode.value.trim().toUpperCase() === "KORTING10") {
          discount = subTotalNumber * 0.1;
          subTotalNumber = subTotalNumber - discount;
        }
  
        // verzendkosten bepalen
        let shipping = 0;
        if (subTotalNumber >= 50) {
          shipping = 0;
        } else {
          shipping = 4.95;
        }
  
        // totaal na verzendkosten
        let grandTotal = subTotalNumber + shipping;
  
        // UI updaten
        cartDiscount.innerText = discount.toFixed(2);
        qtyDisplay.innerText = totalQty;
        cartTotalEl.innerText = subTotalNumber.toFixed(2);
        shippingCost.innerText = shipping.toFixed(2);
        cartTotal.innerText = grandTotal.toFixed(2);
      }
  
    });
  });
  