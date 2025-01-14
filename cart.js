function loadCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const container = document.getElementById('cartItemsContainer');
    
    if (cartItems.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <span class="material-icons">shopping_cart</span>
                <h2>Your cart is empty</h2>
                <a href="collection.html" class="explore-btn">Continue Shopping</a>
            </div>
        `;
        updateSummary(0);
        return;
    }

    container.innerHTML = cartItems.map(item => `
        <div class="cart-item" data-id="${item.id}">
            <img src="${item.images.main}" alt="${item.name}">
            <div class="item-details">
                <h3>${item.name}</h3>
                <p class="size">Size: ${item.size}</p>
                <p class="price">₹${item.price}</p>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="remove-btn" onclick="removeItem(${item.id})">
                <span class="material-icons">close</span>
            </button>
        </div>
    `).join('');

    updateSummary(calculateTotal(cartItems));
}

function updateSummary(subtotal) {
    document.getElementById('subtotal').textContent = `₹${subtotal}`;
    document.getElementById('total').textContent = `₹${subtotal + 99}`; // Adding shipping cost
}

function calculateTotal(items) {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateQuantity(itemId, change) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const itemIndex = cartItems.findIndex(item => item.id === itemId);
    
    if (itemIndex > -1) {
        cartItems[itemIndex].quantity += change;
        if (cartItems[itemIndex].quantity < 1) {
            cartItems.splice(itemIndex, 1);
        }
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        loadCartItems();
    }
}

function removeItem(itemId) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedItems = cartItems.filter(item => item.id !== itemId);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    loadCartItems();
}

// Initialize cart page
document.addEventListener('DOMContentLoaded', loadCartItems);

document.querySelector('.checkout-btn').addEventListener('click', () => {
    if (!localStorage.getItem('isLoggedIn')) {
        window.location.href = 'login.html';
        return;
    }
    window.location.href = 'payment.html';
});
