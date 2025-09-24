// Data for services (categories)
const servicesData = [
    {
        title: "Photo paper - Sticker",
        description: "High-quality photo sticker printing. - Straight Cut",
        image: "./images/services/images/photo-paper-sticker.jpg"
    },
    {
        title: "Bookmarks",
        description: "Silky finish bookmarks - Single or double-sided printing.",
        image: "./images/loading.gif"
    },
    {
        title: "Photocards",
        description: "Available in matte, silky, and high-gloss finishes.",
        image: "./images/loading.gif"
    },
    {
        title: "Mini Lomo Cards",
        description: "Silky or matte finish.",
        image: "./images/loading.gif"
    },
    {
        title: "Polaroid Cards",
        description: "Classic silky or matte finish. Starting Price: LKR 30.00",
        image: "./images/loading.gif"
    },
    {
        title: "Mini Calendar",
        description: "12-card mini calendar in silky or high-gloss finish.",
        image: "./images/loading.gif"
    }
];

// Enhanced products data with categories, finish types, and sizes for filtering
const productsData = [
    {
        title: "Photo paper - Sticker",
        description: "Sticker sheet. Size can customize",
        price: "LKR 320.00",
        priceValue: 320,
        orderNowBtnText: "Order Now",
        image: "./images/loading.gif",
        category: "stickers",
        finish: "photo",
        size: "A4"
    },
    {
        title: "Bookmarks",
        description: "Silky [3.4 cm × 15.2 cm]. - Single side / Double side. Size can customize",
        price: "LKR 200.00",
        priceValue: 200,
        orderNowBtnText: "Order Now",
        image: "./images/loading.gif",
        category: "bookmarks",
        finish: "silky",
        size: "Default"
    },
    {
        title: "Photocard (Matte)",
        description: "A4 size matte finish.",
        price: "LKR 300.00",
        priceValue: 300,
        orderNowBtnText: "Order Now",
        image: "./images/loading.gif",
        category: "photocards",
        finish: "matte",
        size: "Straight Cut"
    },
    {
        title: "Photocard (Silky)",
        description: "[10 cm × 15 cm] silky finish.",
        price: "LKR 100.00",
        priceValue: 100,
        orderNowBtnText: "Order Now",
        image: "./images/loading.gif",
        category: "photocards",
        finish: "silky",
        size: "medium"
    },
    {
        title: "Photocard (High Gloss)",
        description: "[10 cm × 15 cm] high gloss.",
        price: "LKR 80.00",
        priceValue: 80,
        orderNowBtnText: "Order Now",
        image: "./images/loading.gif",
        category: "photocards",
        finish: "high-gloss",
        size: "medium"
    },
    {
        title: "Mini Lomo Card (Silky)",
        description: "[5.4 × 8.6 cm].[1 mm ±]",
        price: "LKR 35.00",
        priceValue: 35,
        orderNowBtnText: "Order Now",
        image: "./images/loading.gif",
        category: "lomo-cards",
        finish: "silky",
        size: "Minimum Qty: 10"
    },
    {
        title: "Mini Lomo Card (Matte)",
        description: "[5.4 × 8.6 cm].[1 mm ±]",
        price: "LKR 30.00",
        priceValue: 30,
        orderNowBtnText: "Order Now",
        image: "./images/loading.gif",
        category: "lomo-cards",
        finish: "matte",
        size: "Minimum Qty: 10"
    },
    {
        title: "Polaroid Card (Silky)",
        description: "[4.6 × 5.4 cm].",
        price: "LKR 35.00",
        priceValue: 35,
        orderNowBtnText: "Order Now",
        image: "./images/loading.gif",
        category: "polaroid-cards",
        finish: "silky",
        size: "medium"
    },
    {
        title: "Polaroid Card (Matte)",
        description: "[4.6 × 5.4 cm].",
        price: "LKR 30.00",
        priceValue: 30,
        orderNowBtnText: "Order Now",
        image: "./images/loading.gif",
        category: "polaroid-cards",
        finish: "matte",
        size: "medium"
    },
    {
        title: "Mini Lomo Pack - 20 Cards (Matte)",
        description: "[5.4 × 8.6 cm].[1 mm ±]",
        price: "LKR 700.00",
        priceValue: 700,
        orderNowBtnText: "Order Now",
        image: "./images/loading.gif",
        category: "packs",
        finish: "Matte",
        size: "pack - Normal Box"
    },
    {
        title: "Mini Lomo Pack - 20 Cards (Matte)",
        description: "[5.4 × 8.6 cm].[1 mm ±]",
        price: "LKR 850.00",
        priceValue: 850,
        orderNowBtnText: "Order Now",
        image: "./images/loading.gif",
        category: "packs",
        finish: "Matte",
        size: "pack - Printerd Box"
    },
    {
        title: "Photo Card Pack - 8 Cards (Silky)",
        description: "[10 × 15 cm].",
        price: "LKR 750.00",
        priceValue: 750,
        orderNowBtnText: "Order Now",
        image: "./images/loading.gif",
        category: "packs",
        finish: "silky",
        size: "pack"
    },
    {
        title: "Photo Card Pack - 8 Cards (High Gloss)",
        description: "[10 × 15 cm].",
        price: "LKR 600.00",
        priceValue: 600,
        orderNowBtnText: "Order Now",
        image: "./images/loading.gif",
        category: "packs",
        finish: "high-gloss",
        size: "pack"
    },
    {
        title: "12 Cards Mini Calendar (Silky)",
        description: "[10 × 15 cm].",
        price: "LKR 1200.00",
        priceValue: 1200,
        orderNowBtnText: "Order Now",
        image: "./images/loading.gif",
        category: "calendars",
        finish: "silky",
        size: "large"
    },
    {
        title: "12 Cards Mini Calendar (High Gloss)",
        description: "[10 × 15 cm].",
        price: "LKR 1000.00",
        priceValue: 1000,
        orderNowBtnText: "Order Now",
        image: "./images/loading.gif",
        category: "calendars",
        finish: "high-gloss",
        size: "large"
    }
];

// Data for testimonials
const testimonialsData = [
    {
        text: "Just wanted to say I really loved the photo card prints! Great quality, fast service, and exactly how I wanted. Thank you so much — will definitely order again! 💖✨",
        author: "Piyumi Dilshika",
        role: "",
        initial: "PD"
    },
    {
        text: "We've been using Cholee for all our business printing needs for years. Their quality is consistently excellent, and their customer service is outstanding.",
        author: "Chanaka Wickramasinghe",
        role: "Business Owner",
        initial: "M"
    },
    {
        text: "I ordered personalized mugs as gifts for my team, and they were thrilled! The print quality was superb, and the mugs arrived quickly. Will definitely order again.",
        author: "Loding...",
        role: "Loding...",
        initial: "J"
    },
    {
        text: "The custom banners they created for our store opening were perfect! They captured exactly what we wanted and drew a lot of attention.",
        author: "Loding...",
        role: "Business Owner",
        initial: "R"
    }
];

// Enhanced companies data with images
const companiesData = [
    {
        name: "TechSolutions Inc.",
        image: "./images/loading.gif"
    },
    {
        name: "Creative Minds Agency",
        image: "./images/loading.gif"
    },
    {
        name: "City Events Planning",
        image: "./images/loading.gif"
    },
    {
        name: "Quality Retail Group",
        image: "./images/loading.gif"
    },
    {
        name: "Prime Hospitality",
        image: "./images/loading.gif"
    },
    {
        name: "Innovate Tech",
        image: "./images/loading.gif"
    },
    {
        name: "Global Marketing Pros",
        image: "./images/loading.gif"
    },
    {
        name: "Elite Business Solutions",
        image: "./images/loading.gif"
    }
];

// Price list data
const priceListData = [
    { category: "Photo paper - Sticker", item: "A4 - size", price: "LKR 250.00" },
    { category: "Bookmarks", item: "silky [3.4 cm × 15.2 cm]", price: "LKR 200.00" },
    { category: "Photocard", item: "matte [A4 - size]", price: "LKR 300.00" },
    { category: "Photocard", item: "silky [10 cm × 15 cm]", price: "LKR 100.00" },
    { category: "Photocard", item: "high-gloss [10 cm × 15 cm]", price: "LKR 80.00" },
    { category: "Mini lomo card", item: "silky [5.4 × 8.6 cm].[1 mm ±]", price: "LKR 35.00" },
    { category: "Mini lomo card", item: "mattte [5.4 × 8.6 cm].[1 mm ±]", price: "LKR 30.00" },
    { category: "Polaroid card", item: "silky [4.6 × 5.4 cm].", price: "LKR 35.00" },
    { category: "Polaroid card", item: "mattte [4.6 × 5.4 cm].", price: "LKR 30.00" },
    { category: "Mini lomo pack - 20 cards - Normal Box", item: "matte [5.4 × 8.6 cm].[1 mm ±]", price: "LKR 700.00" },
    { category: "Mini lomo pack - 20 cards - Printed Box", item: "matte [5.4 × 8.6 cm].[1 mm ±]", price: "LKR 850.00" },
    { category: "Photo card pack - 8 cards", item: "silky [10cm × 15cm]", price: "LKR 750.00" },
    { category: "Photo card pack - 8 cards", item: "high gloss [10cm × 15cm]", price: "LKR 600.00" },
    { category: "12 cards mini calendar", item: "silky [10cm × 15cm]", price: "LKR 1200.00" },
    { category: "12 cards mini calendar", item: "high gloss [10cm × 15cm]", price: "LKR 1000.00" }
];

// Global variables
let testimonialPosition = 0;
let testimonialInterval;
let companyPosition = 0;
let companyInterval;

// Filter state
let currentFilters = {
    category: 'all',
    finish: 'all',
    size: 'all',
    price: 'all',
    sort: 'default',
    search: ''
};

let filtersVisible = false;

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    loadServices();
    loadProducts();
    loadTestimonials();
    loadCompanies();
    setupEventListeners();
    startCarousels();
    animateOnScroll();
    setupProductFilters();
    updateResultsCounter(productsData.length);
});

// Load services function
function loadServices() {
    const servicesContainer = document.getElementById('services-container');
    const moreServicesContainer = document.getElementById('more-services');

    if (!servicesContainer || !moreServicesContainer) return;

    servicesContainer.innerHTML = '';
    moreServicesContainer.innerHTML = '';

    servicesData.forEach((service, index) => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.style.animationDelay = `${index * 0.1 + 0.3}s`;
        serviceCard.innerHTML = `
            <div class="service-img" style="background-image: url('${service.image}');"></div>
            <div class="service-content">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        `;

        if (index < 4) {
            servicesContainer.appendChild(serviceCard);
        } else {
            moreServicesContainer.appendChild(serviceCard);
        }
    });
}

// Enhanced load products function with filtering
function loadProducts(filteredProducts = null) {
    const productsContainer = document.getElementById('products-container');
    const moreProductsContainer = document.getElementById('more-products');

    if (!productsContainer || !moreProductsContainer) return;

    productsContainer.innerHTML = '';
    moreProductsContainer.innerHTML = '';

    const products = filteredProducts || productsData;

    if (products.length === 0) {
        const noResultsDiv = document.createElement('div');
        noResultsDiv.className = 'no-results';
        noResultsDiv.innerHTML = `
            <div class="no-results-content">
                <i class="fas fa-search"></i>
                <h3>No products found</h3>
                <p>Try adjusting your filters or search terms</p>
            </div>
        `;
        productsContainer.appendChild(noResultsDiv);
        return;
    }

    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.style.animationDelay = `${index * 0.1 + 0.3}s`;
        productCard.innerHTML = `
            <div class="product-img" style="background-image: url('${product.image}');"></div>
            <div class="product-content">
                <h3>${product.title}</h3>
                <p>${product.description}</p>
                <div class="product-tags">
                    <span class="tag category-tag">${product.category.replace('-', ' ')}</span>
                    <span class="tag finish-tag">${product.finish}</span>
                    <span class="tag size-tag">${product.size}</span>
                </div>
                <div class="price">${product.price}</div>
                <a href="#contact" class="btn">${product.orderNowBtnText}</a>
            </div>
        `;

        if (index < 8) {
            productsContainer.appendChild(productCard);
        } else {
            moreProductsContainer.appendChild(productCard);
        }
    });

    const showMoreProductsBtn = document.getElementById('show-more-products');
    if (showMoreProductsBtn) {
        if (products.length <= 8) {
            showMoreProductsBtn.style.display = 'none';
        } else {
            showMoreProductsBtn.style.display = 'block';
        }
    }
}

// Load testimonials function
function loadTestimonials() {
    const testimonialsTrack = document.getElementById('testimonials-track');
    if (!testimonialsTrack) return;

    testimonialsTrack.innerHTML = '';

    testimonialsData.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';
        testimonialCard.innerHTML = `
            <div class="testimonial-text">
                <p>${testimonial.text}</p>
            </div>
            <div class="testimonial-author">
                <div class="author-img">${testimonial.initial}</div>
                <div>
                    <h4>${testimonial.author}</h4>
                    <p>${testimonial.role}</p>
                </div>
            </div>
        `;
        testimonialsTrack.appendChild(testimonialCard);
    });
}

// Enhanced load companies function with images
function loadCompanies() {
    const companiesTrack = document.getElementById('companies-track');
    if (!companiesTrack) return;

    companiesTrack.innerHTML = '';

    companiesData.forEach((company, index) => {
        const companyLogo = document.createElement('div');
        companyLogo.className = 'company-logo';
        companyLogo.style.animationDelay = `${index * 0.1 + 0.3}s`;
        companyLogo.innerHTML = `
            <img src="${company.image}" alt="${company.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
            <span style="display:none;">${company.name}</span>
        `;
        companiesTrack.appendChild(companyLogo);
    });
}

// Setup product filters
function setupProductFilters() {
    const filterToggleBtn = document.getElementById('filter-toggle-btn');

    if (filterToggleBtn) {
        filterToggleBtn.addEventListener('click', function (e) {
            e.preventDefault();
            toggleFilters();
        });
    }

    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentFilters.search = e.target.value.toLowerCase();
            if (e.target.value.length > 0 && searchClear) {
                searchClear.style.display = 'flex';
            } else if (searchClear) {
                searchClear.style.display = 'none';
            }
            applyFilters();
        });
    }

    if (searchClear) {
        searchClear.addEventListener('click', () => {
            if (searchInput) {
                searchInput.value = '';
                searchClear.style.display = 'none';
                currentFilters.search = '';
                applyFilters();
                searchInput.focus();
            }
        });
    }

    const categoryFilter = document.getElementById('category-filter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', (e) => {
            currentFilters.category = e.target.value;
            applyFilters();
        });
    }

    const finishFilter = document.getElementById('finish-filter');
    if (finishFilter) {
        finishFilter.addEventListener('change', (e) => {
            currentFilters.finish = e.target.value;
            applyFilters();
        });
    }

    const sizeFilter = document.getElementById('size-filter');
    if (sizeFilter) {
        sizeFilter.addEventListener('change', (e) => {
            currentFilters.size = e.target.value;
            applyFilters();
        });
    }

    const priceFilter = document.getElementById('price-filter');
    if (priceFilter) {
        priceFilter.addEventListener('change', (e) => {
            currentFilters.price = e.target.value;
            applyFilters();
        });
    }

    const sortFilter = document.getElementById('sort-filter');
    if (sortFilter) {
        sortFilter.addEventListener('change', (e) => {
            currentFilters.sort = e.target.value;
            applyFilters();
        });
    }

    const clearFiltersBtn = document.getElementById('clear-filters');
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearAllFilters);
    }
}

// Toggle filters visibility
function toggleFilters() {
    const filtersElement = document.getElementById('products-filters');
    const toggleButton = document.getElementById('filter-toggle-btn');

    if (!filtersElement || !toggleButton) return;

    filtersVisible = !filtersVisible;

    if (filtersVisible) {
        filtersElement.classList.add('active');
        toggleButton.classList.add('active');
        const buttonText = toggleButton.querySelector('span');
        if (buttonText) buttonText.textContent = 'Hide Filters';
    } else {
        filtersElement.classList.remove('active');
        toggleButton.classList.remove('active');
        const buttonText = toggleButton.querySelector('span');
        if (buttonText) buttonText.textContent = 'Filters';
    }
}

// Apply filters function
function applyFilters() {
    let filteredProducts = [...productsData];

    if (currentFilters.category !== 'all') {
        filteredProducts = filteredProducts.filter(product =>
            product.category === currentFilters.category
        );
    }

    if (currentFilters.finish !== 'all') {
        filteredProducts = filteredProducts.filter(product =>
            product.finish === currentFilters.finish
        );
    }

    if (currentFilters.size !== 'all') {
        filteredProducts = filteredProducts.filter(product =>
            product.size === currentFilters.size
        );
    }

    if (currentFilters.price !== 'all') {
        filteredProducts = filteredProducts.filter(product => {
            switch (currentFilters.price) {
                case 'under-100':
                    return product.priceValue < 100;
                case '100-500':
                    return product.priceValue >= 100 && product.priceValue <= 500;
                case 'over-500':
                    return product.priceValue > 500;
                default:
                    return true;
            }
        });
    }

    if (currentFilters.search) {
        filteredProducts = filteredProducts.filter(product =>
            product.title.toLowerCase().includes(currentFilters.search) ||
            product.description.toLowerCase().includes(currentFilters.search)
        );
    }

    switch (currentFilters.sort) {
        case 'price-low':
            filteredProducts.sort((a, b) => a.priceValue - b.priceValue);
            break;
        case 'price-high':
            filteredProducts.sort((a, b) => b.priceValue - a.priceValue);
            break;
        case 'name-asc':
            filteredProducts.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'name-desc':
            filteredProducts.sort((a, b) => b.title.localeCompare(a.title));
            break;
        default:
            break;
    }

    loadProducts(filteredProducts);
    updateResultsCounter(filteredProducts.length);
}

// Clear all filters
function clearAllFilters() {
    currentFilters = {
        category: 'all',
        finish: 'all',
        size: 'all',
        price: 'all',
        sort: 'default',
        search: ''
    };

    const categoryFilter = document.getElementById('category-filter');
    const finishFilter = document.getElementById('finish-filter');
    const sizeFilter = document.getElementById('size-filter');
    const priceFilter = document.getElementById('price-filter');
    const sortFilter = document.getElementById('sort-filter');
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');

    if (categoryFilter) categoryFilter.value = 'all';
    if (finishFilter) finishFilter.value = 'all';
    if (sizeFilter) sizeFilter.value = 'all';
    if (priceFilter) priceFilter.value = 'all';
    if (sortFilter) sortFilter.value = 'default';
    if (searchInput) {
        searchInput.value = '';
        if (searchClear) searchClear.style.display = 'none';
    }

    loadProducts();
    updateResultsCounter(productsData.length);
}

// Update results counter
function updateResultsCounter(count) {
    const counter = document.getElementById('results-counter');
    if (counter) {
        counter.innerHTML = `<i class="fas fa-list"></i> Showing ${count} product${count !== 1 ? 's' : ''}`;
    }
}

// Start auto-scrolling carousels
function startCarousels() {
    const testimonialsTrack = document.getElementById('testimonials-track');
    const companiesTrack = document.getElementById('companies-track');

    if (testimonialsTrack) {
        testimonialInterval = setInterval(() => {
            testimonialPosition = (testimonialPosition + 1) % testimonialsData.length;
            testimonialsTrack.style.transform = `translateX(-${testimonialPosition * 100}%)`;
        }, 5000);
    }

    if (companiesTrack) {
        companyInterval = setInterval(() => {
            companyPosition = (companyPosition + 1) % (companiesData.length - 3);
            companiesTrack.style.transform = `translateX(-${companyPosition * 240}px)`;
        }, 4000);
    }
}

// Animate elements on scroll
function animateOnScroll() {
    const animatedElements = document.querySelectorAll('.service-card, .product-card, .company-logo');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.8s forwards';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// Enhanced Chatbot functionality
function setupChatbot() {
    const chatbotBtn = document.querySelector('.chatbot-btn');
    const chatbotModal = document.getElementById('chatbot-modal');
    const chatClose = document.getElementById('chat-close');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');

    if (chatbotBtn && chatbotModal) {
        chatbotBtn.addEventListener('click', () => {
            chatbotModal.classList.toggle('active');
        });
    }

    if (chatClose && chatbotModal) {
        chatClose.addEventListener('click', () => {
            chatbotModal.classList.remove('active');
        });
    }

    if (chatSend && chatInput) {
        chatSend.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message && chatMessages) {
            addMessage(message, 'user');
            chatInput.value = '';

            addTypingIndicator();

            setTimeout(() => {
                removeTypingIndicator();
                botResponse(message);
            }, 1000 + Math.random() * 1000);
        }
    }

    function addMessage(text, sender) {
        if (!chatMessages) return;
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function addTypingIndicator() {
        if (!chatMessages) return;
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-indicator';
        typingDiv.innerHTML = '<span></span><span></span><span></span>';
        typingDiv.id = 'typing-indicator';
        chatMessages.appendChild(typingDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function removeTypingIndicator() {
        const typing = document.getElementById('typing-indicator');
        if (typing) {
            typing.remove();
        }
    }

    function botResponse(userMessage) {
        let response = "I'm sorry, I didn't understand that. How can I help you with our printing services?";
        const lowerMsg = userMessage.toLowerCase();

        // Helper: find multiple products
        function findProducts(keyword) {
            return productsData.filter(p =>
                p.title.toLowerCase().includes(keyword) ||
                p.category.toLowerCase().includes(keyword)
            );
        }

        // Price / Cost related queries
        if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('how much')) {
            let matches = [];

            if (lowerMsg.includes('photo') && lowerMsg.includes('card')) {
                matches = findProducts("photocard");
            } else if (lowerMsg.includes('calendar')) {
                matches = findProducts("calendar");
            } else if (lowerMsg.includes('lomo')) {
                matches = findProducts("lomo");
            } else if (lowerMsg.includes('sticker')) {
                matches = findProducts("sticker");
            } else if (lowerMsg.includes('polaroid')) {
                matches = findProducts("polaroid");
            } else if (lowerMsg.includes('bookmark')) {
                matches = findProducts("bookmark");
            }

            if (matches.length > 0) {
                response = "Here are the available options:\n\n" +
                    matches.map(p => `- ${p.title}: ${p.price}`).join("\n");
            } else {
                // fallback random product
                const randomProduct = priceListData[Math.floor(Math.random() * priceListData.length)];
                response = `Our ${randomProduct.item} in ${randomProduct.category} costs ${randomProduct.price}.`;
            }

            // Services
        } else if (lowerMsg.includes('service') || lowerMsg.includes('what do you') || lowerMsg.includes('offer')) {
            response = "We offer: " + servicesData.map(s => s.title).join(", ") + ". Which one are you interested in?";

            // Finish types
        } else if (lowerMsg.includes('finish') || lowerMsg.includes('type')) {
            response = "We offer three main finishes: Matte (classic look), Silky (premium feel), and High-Gloss (vibrant colors). Each has its own unique appeal!";

            // Sizes
        } else if (lowerMsg.includes('size') || lowerMsg.includes('dimension')) {
            response = "Sizes available: A4 (large prints), 10×15 cm (standard photo), 4.6×5.4 cm (mini cards), plus packs and calendars.";

            // Delivery
        } else if (lowerMsg.includes('delivery') || lowerMsg.includes('time') || lowerMsg.includes('when')) {
            response = "Standard delivery is 3-5 business days. Rush orders available for urgent needs. We'll keep you updated throughout the process!";

            // Bulk orders
        } else if (lowerMsg.includes('bulk') || lowerMsg.includes('pack') || lowerMsg.includes('quantity')) {
            response = "We offer great bulk pricing! Mini Lomo packs (20 cards) and Photo card packs (8 cards) provide excellent value. Contact us for custom bulk orders!";

            // Greetings
        } else if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
            response = "Hello! Welcome to Cholee Printing and Crafting. I'm here to help you find the perfect printing solution. What can I assist you with today?";

            // Thanks
        } else if (lowerMsg.includes('thank')) {
            response = "You're very welcome! Is there anything else I can help you with regarding our products or services?";

            // Contact / Location
        } else if (lowerMsg.includes('contact') || lowerMsg.includes('location') || lowerMsg.includes('address')) {
            response = "You can reach us at (+94) 77 837 55 05 or cholee.lk@gmail.com. We're open Monday-Friday 9am-10pm, Saturday 10am-5pm. Check our contact section for more details!";

            // Recommendations
        } else if (lowerMsg.includes('recommend') || lowerMsg.includes('suggest') || lowerMsg.includes('best')) {
            response = "For beginners, I'd recommend our Photocards in silky finish - they're popular and affordable. For gifts, mini calendars are perfect. What's the occasion?";
        }

        addMessage(response, 'bot');
    }
}

// Set up event listeners
function setupEventListeners() {
    const showMoreServicesBtn = document.getElementById('show-more-services');
    const showMoreProductsBtn = document.getElementById('show-more-products');
    const themeBtn = document.getElementById('theme-btn');
    const goTopBtn = document.getElementById('go-top-btn');
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('nav');

    // Show more services button
    if (showMoreServicesBtn) {
        const moreServicesContainer = document.getElementById('more-services');
        showMoreServicesBtn.addEventListener('click', function () {
            if (moreServicesContainer.style.display === 'grid') {
                moreServicesContainer.style.display = 'none';
                this.textContent = 'Show More Services';
            } else {
                moreServicesContainer.style.display = 'grid';
                this.textContent = 'Show Less Services';
            }
        });
    }

    // Show more products button
    if (showMoreProductsBtn) {
        const moreProductsContainer = document.getElementById('more-products');
        showMoreProductsBtn.addEventListener('click', function () {
            if (moreProductsContainer.style.display === 'grid') {
                moreProductsContainer.style.display = 'none';
                this.textContent = 'Show More Products';
            } else {
                moreProductsContainer.style.display = 'grid';
                this.textContent = 'Show Less Products';
            }
        });
    }

    // Theme toggle button
    if (themeBtn) {
        themeBtn.addEventListener('click', function () {
            document.body.classList.toggle('light-theme');
            const icon = this.querySelector('i');
            if (document.body.classList.contains('light-theme')) {
                icon.className = 'fas fa-moon';
            } else {
                icon.className = 'fas fa-sun';
            }
        });
    }

    // Go to top button
    window.addEventListener('scroll', function () {
        if (goTopBtn) {
            if (window.pageYOffset > 300) {
                goTopBtn.classList.add('visible');
            } else {
                goTopBtn.classList.remove('visible');
            }
        }
    });

    if (goTopBtn) {
        goTopBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Mobile menu toggle
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function () {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }

    // Testimonial navigation
    const testimonialNextBtn = document.getElementById('testimonial-next');
    const testimonialPrevBtn = document.getElementById('testimonial-prev');
    const testimonialsTrack = document.getElementById('testimonials-track');

    if (testimonialNextBtn && testimonialsTrack) {
        testimonialNextBtn.addEventListener('click', () => {
            clearInterval(testimonialInterval);
            testimonialPosition = (testimonialPosition + 1) % testimonialsData.length;
            testimonialsTrack.style.transform = `translateX(-${testimonialPosition * 100}%)`;
            testimonialInterval = setInterval(() => {
                testimonialPosition = (testimonialPosition + 1) % testimonialsData.length;
                testimonialsTrack.style.transform = `translateX(-${testimonialPosition * 100}%)`;
            }, 5000);
        });
    }

    if (testimonialPrevBtn && testimonialsTrack) {
        testimonialPrevBtn.addEventListener('click', () => {
            clearInterval(testimonialInterval);
            testimonialPosition = (testimonialPosition - 1 + testimonialsData.length) % testimonialsData.length;
            testimonialsTrack.style.transform = `translateX(-${testimonialPosition * 100}%)`;
            testimonialInterval = setInterval(() => {
                testimonialPosition = (testimonialPosition + 1) % testimonialsData.length;
                testimonialsTrack.style.transform = `translateX(-${testimonialPosition * 100}%)`;
            }, 5000);
        });
    }

    // Company navigation
    const companyNextBtn = document.getElementById('company-next');
    const companyPrevBtn = document.getElementById('company-prev');
    const companiesTrack = document.getElementById('companies-track');

    if (companyNextBtn && companiesTrack) {
        companyNextBtn.addEventListener('click', () => {
            clearInterval(companyInterval);
            companyPosition = (companyPosition + 1) % (companiesData.length - 3);
            companiesTrack.style.transform = `translateX(-${companyPosition * 240}px)`;
            companyInterval = setInterval(() => {
                companyPosition = (companyPosition + 1) % (companiesData.length - 3);
                companiesTrack.style.transform = `translateX(-${companyPosition * 240}px)`;
            }, 4000);
        });
    }

    if (companyPrevBtn && companiesTrack) {
        companyPrevBtn.addEventListener('click', () => {
            clearInterval(companyInterval);
            companyPosition = (companyPosition - 1 + (companiesData.length - 3)) % (companiesData.length - 3);
            companiesTrack.style.transform = `translateX(-${companyPosition * 240}px)`;
            companyInterval = setInterval(() => {
                companyPosition = (companyPosition + 1) % (companiesData.length - 3);
                companiesTrack.style.transform = `translateX(-${companyPosition * 240}px)`;
            }, 4000);
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement && menuToggle && nav) {
                // Close mobile menu if open
                menuToggle.classList.remove('active');
                nav.classList.remove('active');

                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });


    // Setup chatbot
    setupChatbot();

}

