function toggleForm(formType) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    if (formType === 'login') {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
    } else {
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
    }
}

// Handle Login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;

    // Simulate login (replace with actual backend call)
    if (email && password) {
        localStorage.setItem('userName', email.split('@')[0]);
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = document.referrer || 'index.html';
    }
});

// Handle Register
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;

    // Simulate registration (replace with actual backend call)
    if (name && email && password) {
        localStorage.setItem('userName', name);
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = document.referrer || 'index.html';
    }
});
