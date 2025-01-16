
document.addEventListener('DOMContentLoaded', () => {
    const orderAmount = localStorage.getItem('orderTotal') || '0';
    document.getElementById('orderAmount').textContent = `₹${orderAmount}`;
    document.getElementById('orderId').textContent = '#ORD' + Math.random().toString(36).substr(2, 9).toUpperCase();
    
    // Clear cart data
    localStorage.removeItem('cartItems');
    localStorage.removeItem('orderTotal');
});