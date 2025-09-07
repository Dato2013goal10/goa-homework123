    let cart = [];

    function addToCart(name, price) {
    cart.push({ name: name, price: price });
    showCart();
    }

    function showCart() {
    let list = "";
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        list += "<li>" + cart[i].name + " - $" + cart[i].price + "</li>";
        total += cart[i].price;
    }

    document.getElementById("cartList").innerHTML = list;
    document.getElementById("total").textContent = "Total: $" + total;
    }

    function goToCheckout() {
    alert("Going to checkout. Total: $" + cart.reduce((sum, item) => sum + item.price, 0));
    }

    // got this js from Reddit