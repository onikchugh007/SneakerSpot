const products = [
    {
        id: 1,
        name: 'Nike Air Max',
        price: 4999,
        images: {
            main: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
            side: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
            top: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
            back: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff'
        },
        sizes: [7, 8, 9, 10, 11]
    },
    {
        id: 2,
        name: 'Adidas Ultra',
        price: 3499,
        images: {
            main: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5',
            side: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb',
            top: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842',
            back: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3'
        },
        sizes: [6, 7, 8, 9, 10]
    },
    {
        id: 3,
        name: 'Puma RS-X',
        price: 2999,
        images: {
            main: 'https://images.unsplash.com/photo-1609250291996-fdebe6020a8f',
            side: 'https://images.unsplash.com/photo-1621665421558-831f91fd0500',
            top: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5',
            back: 'https://images.unsplash.com/photo-1621665421419-79146ee26a6b'
        },
        sizes: [7, 8, 9, 10]
    },
    {
        id: 4,
        name: 'Nike Zoom',
        price: 5999,
        images: {
            main: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519',
            side: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
            top: 'https://images.unsplash.com/photo-1584735175315-9d5df23d2800',
            back: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb'
        },
        sizes: [7, 8, 9, 10, 11, 12]
    },
    {
        id: 5,
        name: 'Adidas NMD',
        price: 4499,
        images: {
            main: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb',
            side: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5',
            top: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842',
            back: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3'
        },
        sizes: [6, 7, 8, 9, 10]
    },
    {
        id: 6,
        name: 'Nike Air Force 1',
        price: 6999,
        images: {
            main: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842',
            side: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
            top: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519',
            back: 'https://images.unsplash.com/photo-1584735175315-9d5df23d2800'
        },
        sizes: [7, 8, 9, 10, 11]
    },
    {
        id: 7,
        name: 'Puma Future Rider',
        price: 3299,
        images: {
            main: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3',
            side: 'https://images.unsplash.com/photo-1584735175315-9d5df23d2800',
            top: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb',
            back: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5'
        },
        sizes: [6, 7, 8, 9, 10]
    },
    {
        id: 8,
        name: 'Adidas Superstar',
        price: 4799,
        images: {
            main: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5',
            side: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519',
            top: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
            back: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb'
        },
        sizes: [7, 8, 9, 10]
    },
    {
        id: 9,
        name: 'Nike Jordan 1 High',
        price: 12999,
        images: {
            main: 'https://images.unsplash.com/photo-1586525198428-225f6f12cff5',
            side: 'https://images.unsplash.com/photo-1586525198428-225f6f12cff5',
            top: 'https://images.unsplash.com/photo-1586525198428-225f6f12cff5',
            back: 'https://images.unsplash.com/photo-1586525198428-225f6f12cff5'
        },
        sizes: [7, 8, 9, 10, 11]
    },
    {
        id: 10,
        name: 'Adidas Yeezy',
        price: 15999,
        images: {
            main: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa',
            side: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa',
            top: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa',
            back: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa'
        },
        sizes: [6, 7, 8, 9, 10]
    },
    {
        id: 11,
        name: 'New Balance 574',
        price: 7999,
        images: {
            main: 'https://images.unsplash.com/photo-1539185441755-769473a23570',
            side: 'https://images.unsplash.com/photo-1539185441755-769473a23570',
            top: 'https://images.unsplash.com/photo-1539185441755-769473a23570',
            back: 'https://images.unsplash.com/photo-1539185441755-769473a23570'
        },
        sizes: [7, 8, 9, 10, 11]
    },
    {
        id: 12,
        name: 'Vans Old Skool',
        price: 4999,
        images: {
            main: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77',
            side: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77',
            top: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77',
            back: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77'
        },
        sizes: [6, 7, 8, 9, 10]
    },
    {
        id: 13,
        name: 'Converse Chuck 70',
        price: 5999,
        images: {
            main: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3',
            side: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3',
            top: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3',
            back: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3'
        },
        sizes: [6, 7, 8, 9, 10, 11]
    },
    {
        id: 14,
        name: 'Reebok Classic',
        price: 6499,
        images: {
            main: 'https://images.unsplash.com/photo-1549298916-b41d501d3772',
            side: 'https://images.unsplash.com/photo-1549298916-b41d501d3772',
            top: 'https://images.unsplash.com/photo-1549298916-b41d501d3772',
            back: 'https://images.unsplash.com/photo-1549298916-b41d501d3772'
        },
        sizes: [7, 8, 9, 10]
    },
    {
        id: 15,
        name: 'Under Armour HOVR',
        price: 8999,
        images: {
            main: 'https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3',
            side: 'https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3',
            top: 'https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3',
            back: 'https://images.unsplash.com/photo-1605034313761-73ea4a0cfbf3'
        },
        sizes: [7, 8, 9, 10, 11]
    },
    {
        id: 16,
        name: 'ASICS Gel-Lyte III',
        price: 7499,
        images: {
            main: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86',
            side: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86',
            top: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86',
            back: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86'
        },
        sizes: [6, 7, 8, 9, 10]
    },
    {
        id: 17,
        name: 'Nike Air Jordan 4',
        price: 13999,
        images: {
            main: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a',
            side: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a',
            top: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a',
            back: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a'
        },
        sizes: [7, 8, 9, 10, 11]
    },
    {
        id: 18,
        name: 'Nike Dunk Low',
        price: 8999,
        images: {
            main: 'https://images.unsplash.com/photo-1612015670817-0127d21628d4',
            side: 'https://images.unsplash.com/photo-1612015670817-0127d21628d4',
            top: 'https://images.unsplash.com/photo-1612015670817-0127d21628d4',
            back: 'https://images.unsplash.com/photo-1612015670817-0127d21628d4'
        },
        sizes: [6, 7, 8, 9, 10]
    },
    {
        id: 19,
        name: 'Adidas Forum Low',
        price: 7499,
        images: {
            main: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f',
            side: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f',
            top: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f',
            back: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f'
        },
        sizes: [7, 8, 9, 10]
    },
    {
        id: 20,
        name: 'Nike SB Zoom',
        price: 6999,
        images: {
            main: 'https://images.unsplash.com/photo-1580902394724-b08ff9ba7e8a',
            side: 'https://images.unsplash.com/photo-1580902394724-b08ff9ba7e8a',
            top: 'https://images.unsplash.com/photo-1580902394724-b08ff9ba7e8a',
            back: 'https://images.unsplash.com/photo-1580902394724-b08ff9ba7e8a'
        },
        sizes: [6, 7, 8, 9, 10, 11]
    },
    {
        id: 21,
        name: 'Puma Slipstream',
        price: 5999,
        images: {
            main: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5',
            side: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5',
            top: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5',
            back: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5'
        },
        sizes: [7, 8, 9, 10]
    }
];

// Add these new products to the existing products array
const additionalProducts = [
    {
        id: 22,
        name: 'Nike Air Huarache',
        price: 9499,
        images: {
            main: 'https://images.unsplash.com/photo-1551116198-01d550c9809c',
            side: 'https://images.unsplash.com/photo-1551116198-01d550c9809c',
            top: 'https://images.unsplash.com/photo-1551116198-01d550c9809c',
            back: 'https://images.unsplash.com/photo-1551116198-01d550c9809c'
        },
        sizes: [7, 8, 9, 10, 11]
    },
    {
        id: 23,
        name: 'Adidas ZX 750',
        price: 6799,
        images: {
            main: 'https://images.unsplash.com/photo-1544441893-675973e31985',
            side: 'https://images.unsplash.com/photo-1544441893-675973e31985',
            top: 'https://images.unsplash.com/photo-1544441893-675973e31985',
            back: 'https://images.unsplash.com/photo-1544441893-675973e31985'
        },
        sizes: [6, 7, 8, 9, 10]
    },
    {
        id: 24,
        name: 'Puma Suede Classic',
        price: 5299,
        images: {
            main: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b',
            side: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b',
            top: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b',
            back: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b'
        },
        sizes: [7, 8, 9, 10]
    },
    // Add more sneakers with unique IDs from 25-41
    {
        id: 25,
        name: 'Nike React Vision',
        price: 11999,
        images: {
            main: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9',
            side: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9',
            top: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9',
            back: 'https://images.unsplash.com/photo-1582588678413-dbf45f4823e9'
        },
        sizes: [7, 8, 9, 10, 11]
    },
    // ... Continue adding more products with different images and details
    {
        id: 41,
        name: 'Reebok Zig Kinetica',
        price: 8499,
        images: {
            main: 'https://images.unsplash.com/photo-1465877783223-4eba513e27c6',
            side: 'https://images.unsplash.com/photo-1465877783223-4eba513e27c6',
            top: 'https://images.unsplash.com/photo-1465877783223-4eba513e27c6',
            back: 'https://images.unsplash.com/photo-1465877783223-4eba513e27c6'
        },
        sizes: [7, 8, 9, 10]
    }
];

// Add new products to the existing products array
products.push(...additionalProducts);

// Find and update product with ID 23
const productToUpdate = products.find(p => p.id === 23);
if (productToUpdate) {
    productToUpdate.images = {
        main: 'https://images.unsplash.com/photo-1544441893-675973e31985',
        side: 'https://images.unsplash.com/photo-1579338559194-a162d19bf842',
        top: 'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb',
        back: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3'
    };
}

const cart = {
    items: [],
    total: 0
};

let selectedSize = null;

function displayProducts(products) {
    const grid = document.getElementById('collectionGrid');
    grid.innerHTML = products.map(product => `
        <div class="product-card" onclick="showProductDetail(${product.id})">
            <div class="product-image">
                <img src="${product.images.main}" alt="${product.name}">
                <div class="product-overlay">
                    <h3>${product.name}</h3>
                    <p class="product-price">₹${product.price}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.items.push(product);
    cart.total += product.price;
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = cart.items.length;
    
    const cartItems = document.querySelector('.cart-items');
    cartItems.innerHTML = cart.items.map(item => `
        <div class="cart-item">
            <img src="${item.images.main}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
                <p>${item.name}</p>
                <p>Size: ${item.size}</p>
                <p>₹${item.price}</p>
            </div>
            <button onclick="removeFromCart(${cart.items.indexOf(item)})" class="remove-item">×</button>
        </div>
    `).join('');
    
    document.getElementById('cartTotal').textContent = cart.total;
}

function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const similarProducts = getSimilarProducts(product);
    
    const modal = document.getElementById('productModal');
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal" onclick="closeModal()">&times;</span>
            <div class="product-views">
                <div class="main-view">
                    <img src="${product.images.main}" alt="${product.name}" id="mainImage">
                </div>
                <div class="thumbnail-views">
                    ${Object.entries(product.images).map(([view, url]) => `
                        <img src="${url}" 
                             alt="${view} view" 
                             onclick="changeMainImage('${url}')"
                             class="thumb-img">
                    `).join('')}
                </div>
            </div>
            <div class="product-details">
                <h2>${product.name}</h2>
                <p class="price">₹${product.price}</p>
                <div class="size-selector">
                    <h3>Select Size</h3>
                    <div class="size-options">
                        ${product.sizes.map(size => `
                            <button class="size-btn" onclick="selectSize(${size})">${size}</button>
                        `).join('')}
                    </div>
                </div>
                <button class="add-to-cart-btn" onclick="addToCartFromModal(${product.id})">
                    Add to Cart
                </button>
            </div>
            <div class="similar-products">
                <h3>You May Also Like</h3>
                <div class="similar-products-grid">
                    ${similarProducts.map(similar => `
                        <div class="similar-product-card" onclick="showProductDetail(${similar.id})">
                            <img src="${similar.images.main}" alt="${similar.name}">
                            <div class="similar-product-info">
                                <h4>${similar.name}</h4>
                                <p>₹${similar.price}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    modal.style.display = "block";
}

function getSimilarProducts(currentProduct) {
    // Get products in similar price range (±1000) and different brand
    return products
        .filter(p => 
            p.id !== currentProduct.id && 
            Math.abs(p.price - currentProduct.price) <= 1000 &&
            !p.name.includes(currentProduct.name.split(' ')[0])
        )
        .slice(0, 4); // Show only 4 similar products
}

function changeMainImage(url) {
    document.getElementById('mainImage').src = url;
}

function closeModal() {
    document.getElementById('productModal').style.display = "none";
    selectedSize = null;
}

function selectSize(size) {
    selectedSize = size;
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.toggle('selected', btn.textContent == size);
    });
}

function addToCartFromModal(productId) {
    if (!localStorage.getItem('isLoggedIn')) {
        window.location.href = 'login.html';
        return;
    }

    if (!selectedSize) {
        alert('Please select a size');
        return;
    }

    const product = products.find(p => p.id === productId);
    const cartItem = {
        ...product,
        size: selectedSize,
        quantity: 1
    };
    
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItem = cartItems.find(item => item.id === productId && item.size === selectedSize);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push(cartItem);
    }
    
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartCount();
    closeModal();
}

function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.cart-count').textContent = totalItems;
}

// Update cart icon click handler
document.querySelector('.cart-icon').addEventListener('click', () => {
    window.location.href = 'cart.html';
});

// Initialize cart count
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    // ...existing initialization code...
});

function removeFromCart(index) {
    cart.total -= cart.items[index].price;
    cart.items.splice(index, 1);
    updateCartDisplay();
}

// Initialize page
displayProducts(products);

// Filter functionality
document.getElementById('priceFilter').addEventListener('change', (e) => {
    let filtered = [...products]; // Create a copy of products array
    
    switch(e.target.value) {
        case 'highToLow':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'lowToHigh':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'newArrivals':
            filtered = products.filter(product => product.isNew); // You can add isNew property to products
            break;
        default:
            filtered = products;
    }
    displayProducts(filtered);
});

// Add search functionality
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    displayProducts(filtered);
});

// Cart popup toggle
document.querySelector('.cart-icon').addEventListener('click', () => {
    document.getElementById('cartPopup').classList.toggle('active');
});

// Add price range filter functionality
document.getElementById('priceRange').addEventListener('input', function(e) {
    const maxPrice = this.value;
    document.getElementById('priceValue').textContent = maxPrice;
    
    const filtered = products.filter(product => product.price <= maxPrice);
    displayProducts(filtered);
});

// Update filter functionality to work with both brand and price filters
function applyFilters() {
    const selectedBrand = document.getElementById('brandFilter').value;
    const maxPrice = document.getElementById('priceRange').value;
    const sortBy = document.getElementById('priceFilter').value;
    
    let filtered = products.filter(product => {
        const matchesBrand = selectedBrand === 'all' || product.name.toLowerCase().includes(selectedBrand);
        const matchesPrice = product.price <= maxPrice;
        return matchesBrand && matchesPrice;
    });
    
    // Apply sorting
    switch(sortBy) {
        case 'highToLow':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'lowToHigh':
            filtered.sort((a, b) => a.price - b.price);
            break;
    }
    
    displayProducts(filtered);
}

// Update event listeners
document.getElementById('brandFilter').addEventListener('change', applyFilters);
document.getElementById('priceFilter').addEventListener('change', applyFilters);
document.getElementById('priceRange').addEventListener('input', applyFilters);

// Update price range input handling
document.getElementById('priceRange').addEventListener('input', function(e) {
    const value = this.value;
    document.getElementById('priceValue').value = value;
    document.getElementById('minPrice').value = 0;
    applyFilters();
});

document.getElementById('priceValue').addEventListener('change', function(e) {
    let value = parseInt(this.value);
    if (isNaN(value)) value = 0;
    if (value > 20000) value = 20000;
    if (value < 0) value = 0;
    this.value = value;
    document.getElementById('priceRange').value = value;
    applyFilters();
});
