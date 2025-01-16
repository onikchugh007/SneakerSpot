document.addEventListener('DOMContentLoaded', () => {
    // Check payment method first
    const paymentMethod = localStorage.getItem('paymentMethod');
    
    // Redirect COD orders to success page
    if (paymentMethod === 'cod') {
        window.location.href = 'order-success.html';
        return;
    }

    // Set amount and show appropriate payment form
    const amount = localStorage.getItem('orderTotal') || '0';
    
    document.getElementById('payAmount').textContent = amount;
    
    // Show relevant payment form
    if (paymentMethod === 'upi') {
        document.getElementById('cardPayment').style.display = 'none';
        document.getElementById('upiPayment').style.display = 'block';
    }

    // Card number formatting
    document.getElementById('cardNumber').addEventListener('input', (e) => {
        let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        let formatted = '';
        for(let i = 0; i < value.length; i++) {
            if(i > 0 && i % 4 === 0) formatted += ' ';
            formatted += value[i];
        }
        e.target.value = formatted;
        document.getElementById('cardNumberPreview').textContent = formatted || '•••• •••• •••• ••••';
    });

    // Card name preview
    document.getElementById('cardName').addEventListener('input', (e) => {
        document.getElementById('cardNamePreview').textContent = e.target.value.toUpperCase() || 'CARD HOLDER';
    });

    // Expiry date formatting
    document.getElementById('cardExpiry').addEventListener('input', (e) => {
        let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        if(value.length > 2) {
            value = value.substr(0, 2) + '/' + value.substr(2);
        }
        e.target.value = value;
        document.getElementById('cardExpiryPreview').textContent = value || 'MM/YY';
    });

    // Handle form submissions
    document.getElementById('cardForm').addEventListener('submit', processPayment);
    document.getElementById('upiForm').addEventListener('submit', processPayment);
    
    // Handle UPI app buttons
    document.querySelectorAll('.upi-app-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            processPayment(e, btn.dataset.app);
        });
    });
});

async function processPayment(e, upiApp = null) {
    e.preventDefault();
    const button = e.target.querySelector('.pay-btn') || e.target;
    
    try {
        button.disabled = true;
        button.textContent = 'Processing...';
        
        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Clear cart and redirect to success
        localStorage.removeItem('cartItems');
        window.location.href = 'order-success.html';
    } catch (error) {
        alert('Payment failed. Please try again.');
        button.disabled = false;
        button.textContent = 'Pay Now';
    }
}
