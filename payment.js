document.addEventListener("DOMContentLoaded", function() {
    // Get item names and prices from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const items = JSON.parse(urlParams.get("items"));
    const prices = JSON.parse(urlParams.get("prices"));

    // Calculate total sum
    let totalPrice = prices.reduce((total, price) => total + price, 0);

    // Update total price in the HTML
    document.getElementById("totalPrice").textContent = "Rs-" + totalPrice.toFixed(2);
});
