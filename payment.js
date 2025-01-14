document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('paymentForm');
    const cardNumber = document.getElementById('cardNumber');
    const expiry = document.getElementById('expiry');
    const cvv = document.getElementById('cvv');

    // Format card number with spaces
    cardNumber.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        let formattedValue = '';
        for(let i = 0; i < value.length; i++) {
            if(i > 0 && i % 4 === 0) {
                formattedValue += ' ';
            }
            formattedValue += value[i];
        }
        e.target.value = formattedValue;
    });

    // Format expiry date
    expiry.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        if(value.length > 2) {
            value = value.substr(0, 2) + '/' + value.substr(2);
        }
        e.target.value = value;
    });

    // Allow only numbers in CVV
    cvv.addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your payment processing logic here
        alert('Payment submitted! (This is just a demo)');
    });
});
