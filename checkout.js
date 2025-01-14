const stripe = Stripe('your_publishable_key'); // Replace with your Stripe key
const elements = stripe.elements();

// Create card element
const card = elements.create('card', {
    style: {
        base: {
            color: '#fff',
            fontFamily: '"Poppins", sans-serif',
            fontSize: '16px',
            '::placeholder': {
                color: '#aab7c4'
            }
        },
        invalid: {
            color: '#fa755a',
            iconColor: '#fa755a'
        }
    }
});

card.mount('#card-element');

// Handle payment method selection
const paymentOptions = document.querySelectorAll('.payment-option');
const paymentForms = document.querySelectorAll('.payment-form');

paymentOptions.forEach(option => {
    option.addEventListener('click', () => {
        paymentOptions.forEach(opt => opt.classList.remove('active'));
        paymentForms.forEach(form => form.classList.remove('active'));
        
        option.classList.add('active');
        document.getElementById(`${option.dataset.method}-payment`).classList.add('active');
    });
});

// Load order summary
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

// Handle payment submission
document.getElementById('payButton').addEventListener('click', async (e) => {
    e.preventDefault();
    const button = e.target;
    button.disabled = true;
    button.textContent = 'Processing...';

    const activeMethod = document.querySelector('.payment-option.active').dataset.method;

    try {
        if (activeMethod === 'card') {
            const { token, error } = await stripe.createToken(card);
            if (error) {
                throw error;
            }
            await processPayment(token.id);
        } else if (activeMethod === 'upi') {
            const upiId = document.getElementById('upiId').value;
            await processUPIPayment(upiId);
        } else {
            await processCOD();
        }

        // Clear cart and redirect to success page
        localStorage.removeItem('cartItems');
        window.location.href = 'order-success.html';
    } catch (error) {
        document.getElementById('card-errors').textContent = error.message;
        button.disabled = false;
        button.textContent = 'Pay Now';
    }
});

async function processPayment(token) {
    // Send to your backend
    const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            token,
            amount: document.getElementById('total').textContent.replace('₹', '')
        })
    });

    if (!response.ok) {
        throw new Error('Payment failed');
    }
}

async function processUPIPayment(upiId) {
    // Implement UPI payment logic
}

async function processCOD() {
    // Implement COD logic
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    loadOrderSummary();
});
