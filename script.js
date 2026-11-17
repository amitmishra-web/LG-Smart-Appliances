// CART
let cart = JSON.parse(localStorage.getItem("lgCart")) || [];

// ADD TO CART
window.addToCart = function(productName) {

    cart.push(productName);

    localStorage.setItem("lgCart", JSON.stringify(cart));

    alert(productName + " added to cart!");

    updateCart();
};

// UPDATE CART
function updateCart() {

    const cartButton = document.querySelector(".cart-btn");
    const cartItems = document.getElementById("cartItems");

    if (cartButton) {
        cartButton.textContent = "🛒 Cart (" + cart.length + ")";
    }

    if (!cartItems) return;

    cartItems.innerHTML = "";

    cart.forEach(function(product, index) {

        const li = document.createElement("li");
        li.textContent = product;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-btn";

        removeButton.onclick = function() {
            removeFromCart(index);
        };

        li.appendChild(removeButton);
        cartItems.appendChild(li);
    });
}

// REMOVE FROM CART
function removeFromCart(index) {

    cart.splice(index, 1);

    localStorage.setItem("lgCart", JSON.stringify(cart));

    updateCart();
}

// CLOSE CART
function closeCart() {

    const panel = document.getElementById("cartPanel");

    if (panel) {
        panel.style.display = "none";
    }
}

// SEARCH PRODUCTS
const searchInput = document.getElementById("searchInput");

if (searchInput) {

    const productCards = document.querySelectorAll(".product-card");

    searchInput.addEventListener("input", function() {

        const searchValue = searchInput.value.toLowerCase();

        productCards.forEach(function(card) {

            const productName = card.querySelector("h3").textContent.toLowerCase();

            card.style.display = productName.includes(searchValue) ? "block" : "none";
        });
    });
}

// CART BUTTON
const cartButton = document.querySelector(".cart-btn");

if (cartButton) {

    cartButton.addEventListener("click", function() {

        const panel = document.getElementById("cartPanel");

        if (panel) {
            panel.style.display =
                panel.style.display === "block" ? "none" : "block";
        }
    });
}

// CONTACT FORM
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Thank you! Your message has been received.");

        contactForm.reset();
    });
}

// INITIAL CART UPDATE
updateCart();