document.addEventListener("DOMContentLoaded", function() {
    let searchBox = document.querySelector(".searchbox");
    let burgersSection = document.getElementById("bur");
    let drinksSection = document.getElementById("dr");
    let searchButton = document.querySelector(".btn");
    let pay=document.getElementById("deliver");
    let cart = [];
  
    searchBox.addEventListener("keypress", function(event) {
        if (event.keyCode === 13) {
            let searchTerm = searchBox.value.toLowerCase();
  
            if (searchTerm.includes("burger")) {
                burgersSection.scrollIntoView({ behavior: "smooth" });
            } else if (searchTerm.includes("drink")) {
                drinksSection.scrollIntoView({ behavior: "smooth" });
            } else if(searchTerm.includes("pay")){
                pay.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
  
    searchButton.addEventListener("click", function() {
        let searchTerm = searchBox.value.toLowerCase();
  
        if (searchTerm.includes("burger")) {
            burgersSection.scrollIntoView({ behavior: "smooth" });
        } else if (searchTerm.includes("drink")) {
            drinksSection.scrollIntoView({ behavior: "smooth" });
        } else if(searchTerm.includes("pay")){
            pay.scrollIntoView({ behavior: "smooth" });
        }
    });
  
   
    function addToCart(item, price) {
        cart.push({ item: item, price: price }); 
        updateCartCount(); 
        showConfirmationMessage(item); 
    }
  
  
    function updateCartCount() {
        let cartCount = document.querySelector(".cart-count");
        cartCount.textContent = cart.length; 
    }
  
    function showConfirmationMessage(item) {
        alert(item + " added to cart!");
    }
  
    function showCartItems() {
        let cartItems = cart.map(item => `${item.item} - Rs-${item.price.toFixed(2)}`).join("\n");
        let totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);
        document.getElementById("sum").textContent = `Total Price: Rs-${totalPrice}`;
        alert("Items in Cart:\n" + (cartItems || "No items in the cart."));
    }
  
    
    let cartButton = document.querySelector(".store");
    cartButton.addEventListener("click", function() {
        showCartItems();
    });
  
    
    let addToCartButtons = document.querySelectorAll(".Cart");
    addToCartButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            let item = this.parentElement.querySelector("h5").textContent;
            let price = this.parentElement.querySelector(".discounted-price").textContent;
  
            
            price = parseFloat(price.split("Rs-")[1]);
  
            addToCart(item, price);
        });
    });
  });
  
  
  
  function calculateTotalPrice() {
    // Calculate total price from the cart items
    let totalPrice = cart.reduce((total, item) => total + item.price, 0);
    return totalPrice;
  }
  