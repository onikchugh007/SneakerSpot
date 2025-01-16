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
