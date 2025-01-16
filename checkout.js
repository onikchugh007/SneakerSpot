document.addEventListener('DOMContentLoaded', () => {
    // Initialize payment option buttons
    const paymentOptions = document.querySelectorAll('.payment-option');

    // Payment method switch handler
    paymentOptions.forEach(option => {
        option.addEventListener('click', () => {
            paymentOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        });
    });

    // Load cart summary
    function loadOrderSummary() {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const orderItems = document.getElementById('orderItems');
        let subtotal = 0;

        orderItems.innerHTML = cartItems.map(item => {
            subtotal += item.price * item.quantity;
            return `
                <div class="summary-item">
                    <span>${item.name} (${item.size}) x ${item.quantity}</span>
                    <span>₹${item.price * item.quantity}</span>
                </div>
            `;
        }).join('');

        document.getElementById('subtotal').textContent = `₹${subtotal}`;
        document.getElementById('total').textContent = `₹${subtotal + 99}`; // Adding shipping
    }

    // Pay button click handler
    document.getElementById('payButton').addEventListener('click', (e) => {
        e.preventDefault();
        
        // Get selected payment method
        const selectedMethod = document.querySelector('.payment-option.active')?.dataset.method;
        
        if (!selectedMethod) {
            alert('Please select a payment method');
            return;
        }

        // Validate shipping details
        const shippingForm = document.getElementById('shippingForm');
        if (!shippingForm.checkValidity()) {
            alert('Please fill all shipping details');
            return;
        }

        // Store shipping details
        const shippingData = {
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            pincode: document.getElementById('pincode').value,
            phone: document.getElementById('phone').value
        };
        localStorage.setItem('shippingDetails', JSON.stringify(shippingData));

        // Handle Cash on Delivery separately
        if (selectedMethod === 'cod') {
            const total = document.getElementById('total').textContent.replace('₹', '');
            localStorage.setItem('orderTotal', total);
            localStorage.setItem('paymentMethod', 'cod');
            
            // Clear cart and redirect directly to success page
            localStorage.removeItem('cartItems');
            window.location.href = 'order-success.html';
            return;
        }

        // For card and UPI payments, redirect to transaction page
        const total = document.getElementById('total').textContent.replace('₹', '');
        localStorage.setItem('orderTotal', total);
        localStorage.setItem('paymentMethod', selectedMethod);
        window.location.href = 'transaction.html';
    });

    // Initialize page
    loadOrderSummary();
});
