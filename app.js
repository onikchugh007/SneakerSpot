// Initialize Swiper
const swiper = new Swiper(".heroSwiper", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    effect: "fade",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// Initialize New Arrivals Swiper
const arrivalsSwiper = new Swiper(".arrivalsSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        968: {
            slidesPerView: 3,
        }
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
});

// Handle Featured Brands buttons
document.querySelectorAll('.brand-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const brandName = this.closest('.brand-card')
                             .querySelector('h3').textContent;
        
        // Store selected brand in localStorage
        localStorage.setItem('selectedBrand', brandName);
        // Redirect to collection page with brand filter
        window.location.href = 'collection.html?brand=' + brandName.toLowerCase();
    });
});

// Handle New Arrivals "Add to Cart" buttons
document.querySelectorAll('.arrival-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        if (!localStorage.getItem('isLoggedIn')) {
            window.location.href = 'login.html';
            return;
        }

        const card = this.closest('.arrival-card');
        const productName = card.querySelector('h3').textContent;
        const price = parseInt(card.querySelector('.arrival-price')
                         .textContent.replace('₹', ''));
        const image = card.querySelector('img').src;

        // Create product object
        const product = {
            id: Date.now(), // Unique ID
            name: productName,
            price: price,
            quantity: 1,
            size: 9, // Default size
            images: {
                main: image
            }
        };

        // Add to cart in localStorage
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Update cart count
        updateCartCount();

        // Show success message
        const originalText = this.textContent;
        this.textContent = 'Added to Cart!';
        this.style.background = '#4CAF50';
        this.disabled = true;

        setTimeout(() => {
            this.textContent = originalText;
            this.style.background = '';
            this.disabled = false;
        }, 2000);
    });
});

// Update cart count function (if not already defined)
function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.cart-count').textContent = totalItems;
}

// Products section
const products = [
    { name: 'Air Max Pro', price: '$199' },
    { name: 'Runner Elite', price: '$159' },
    { name: 'Street Style X', price: '$179' }
];

const productGrid = document.querySelector('.product-grid');
products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.price}</p>
    `;
    productGrid.appendChild(productCard);
});
