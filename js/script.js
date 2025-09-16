// Data for services (categories)
const servicesData = [
    {
        title: "Photo paper - Sticker",
        description: "High-quality photo sticker printing on A4 size sheets.",
        image: "./images/services/images/photo-paper-sticker.jpg"
    },
    {
        title: "Bookmarks",
        description: "Silky finish bookmarks [3.4 cm × 15.2 cm]. - Single or double-sided printing.",
        image: "./images/loading.gif"
    },
    {
        title: "Photocards",
        description: "Available in matte, silky, and high-gloss finishes (A4 or 10 × 15 cm).",
        image: "./images/loading.gif"
    },
    {
        title: "Mini Lomo Cards",
        description: "Silky or matte finish [8.5 × 5.5 cm].",
        image: "./images/loading.gif"
    },
    {
        title: "Polaroid Cards",
        description: "Classic silky or matte [10 × 15 cm] finish.",
        image: "./images/loading.gif"
    },
    {
        title: "Mini Calendar",
        description: "12-card mini calendar in silky or high-gloss finish [10 × 15 cm].",
        image: "./images/loading.gif"
    }
];

// Enhanced products data with categories, finish types, and sizes for filtering
const productsData = [
    {
        title: "Photo paper - Sticker",
        description: "A4 size photo sticker sheet.",
        price: "LKR 250.00",
        priceValue: 250,
        orderNowBtnText: "Order Now",
        image: "./images/loading.gif",
        category: "stickers",
        finish: "photo",
        size: "A4"
    },
    {
        title: "Bookmarks",
        description: "Silky [3.4 cm × 15.2 cm].",
        price: "LKR 200.00",
        priceValue: 200,
        orderNowBtnText: "Order Now",
        image: "./images/loading.gif",
        category: "bookmarks",
        finish: "silky",
        size: "small"
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
        size: "A4"
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
        description: "[8.5 × 5.5 cm].",
        price: "LKR 30.00",
        priceValue: 30,
        orderNowBtnText: "Order Now",
        image: "./images/loading.gif",
        category: "lomo-cards",
        finish: "silky",
        size: "small"
    },
    {
        title: "Mini Lomo Card (Matte)",
        description: "[8.5 × 5.5 cm].",
        price: "LKR 25.00",
        priceValue: 25,
        orderNowBtnText: "Order Now",
        image: "./images/loading.gif",
        category: "lomo-cards",
        finish: "matte",
        size: "small"
    },
    {
        title: "Polaroid Card (Silky)",
        description: "[10 × 15 cm].",
        price: "LKR 100.00",
        priceValue: 100,
        orderNowBtnText: "Order Now",
        image: "./images/loading.gif",
        category: "polaroid-cards",
        finish: "silky",
        size: "medium"
    },
    {
        title: "Polaroid Card (Matte)",
        description: "[10 × 15 cm].",
        price: "LKR 80.00",
        priceValue: 80,
        orderNowBtnText: "Order Now",
        image: "./images/loading.gif",
        category: "polaroid-cards",
        finish: "matte",
        size: "medium"
    },
    {
        title: "Mini Lomo Pack - 20 Cards (Silky)",
        description: "[8.5 × 5.5 cm].",
        price: "LKR 550.00",
        priceValue: 550,
        orderNowBtnText: "Order Now",
        image: "./images/loading.gif",
        category: "packs",
        finish: "silky",
        size: "pack"
    },
    {
        title: "Mini Lomo Pack - 20 Cards (High Gloss)",
        description: "[8.5 × 5.5 cm].",
        price: "LKR 500.00",
        priceValue: 500,
        orderNowBtnText: "Order Now",
        image: "./images/loading.gif",
        category: "packs",
        finish: "high-gloss",
        size: "pack"
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
        text: "Loding...",
        author: "Loding...",
        role: "Loding...",
        initial: "S"
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

// Price list data from the image
const priceListData = [
    { category: "Photo paper - Sticker", item: "A4 - size", price: "LKR 250.00" },
    { category: "Bookmarks", item: "silky [3.4 cm × 15.2 cm]", price: "LKR 200.00" },
    { category: "Photocard", item: "matte [A4 - size]", price: "LKR 300.00" },
    { category: "Photocard", item: "silky [10 cm × 15 cm]", price: "LKR 100.00" },
    { category: "Photocard", item: "high-gloss [10 cm × 15 cm]", price: "LKR 80.00" },
    { category: "Mini lomo card", item: "silky [8.5 cm × 5.5 cm]", price: "LKR 30.00" },
    { category: "Mini lomo card", item: "mattte [8.5 cm × 5.5 cm]", price: "LKR 25.00" },
    { category: "Polaroid card", item: "silky [10 cm × 15 cm]", price: "LKR 100.00" },
    { category: "Polaroid card", item: "mattte [10 cm × 15 cm]", price: "LKR 80.00" },
    { category: "Mini lomo pack - 20 cards", item: "silky [8.5cm × 5.5cm]", price: "LKR 550.00" },
    { category: "Mini lomo pack - 20 cards", item: "high gloss [8.5cm × 5.5cm]", price: "LKR 500.00" },
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
document.addEventListener('DOMContentLoaded', function() {
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
        filterToggleBtn.addEventListener('click', function(e) {
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
        
        if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('how much')) {
            if (lowerMsg.includes('photo') || lowerMsg.includes('card')) {
                response = "Our photocards range from LKR 80 to LKR 300 depending on size and finish. Would you like specific pricing for a particular product?";
            } else if (lowerMsg.includes('calendar')) {
                response = "Our 12-card mini calendars are LKR 1000 (high gloss) to LKR 1200 (silky finish). Perfect for personalized gifts!";
            } else if (lowerMsg.includes('lomo')) {
                response = "Mini Lomo cards are LKR 25-30 each, or get our 20-card pack for LKR 500-550. Great value for bulk orders!";
            } else {
                const randomProduct = priceListData[Math.floor(Math.random() * priceListData.length)];
                response = `Our ${randomProduct.item} ${randomProduct.category} costs ${randomProduct.price}. Check our products section for the full price list!`;
            }
        } else if (lowerMsg.includes('service') || lowerMsg.includes('what do you') || lowerMsg.includes('offer')) {
            response = "We offer photo paper stickers, bookmarks, photocards, mini lomo cards, polaroid cards, and mini calendars. All available in different finishes like matte, silky, and high-gloss. What interests you most?";
        } else if (lowerMsg.includes('finish') || lowerMsg.includes('type')) {
            response = "We offer three main finishes: Matte (classic look), Silky (premium feel), and High-Gloss (vibrant colors). Each has its own unique appeal!";
        } else if (lowerMsg.includes('size') || lowerMsg.includes('dimension')) {
            response = "We have various sizes: A4 for larger prints, 10×15cm for standard photos, and 8.5×5.5cm for mini cards. What size works best for your project?";
        } else if (lowerMsg.includes('delivery') || lowerMsg.includes('time') || lowerMsg.includes('when')) {
            response = "Standard delivery is 3-5 business days. Rush orders available for urgent needs. We'll keep you updated throughout the process!";
        } else if (lowerMsg.includes('bulk') || lowerMsg.includes('pack') || lowerMsg.includes('quantity')) {
            response = "We offer great bulk pricing! Mini Lomo packs (20 cards) and Photo card packs (8 cards) provide excellent value. Contact us for custom bulk orders!";
        } else if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
            response = "Hello! Welcome to Cholee Printing and Crafting. I'm here to help you find the perfect printing solution. What can I assist you with today?";
        } else if (lowerMsg.includes('thank')) {
            response = "You're very welcome! Is there anything else I can help you with regarding our products or services?";
        } else if (lowerMsg.includes('contact') || lowerMsg.includes('location') || lowerMsg.includes('address')) {
            response = "You can reach us at (555) 123-4567 or info@choleeprinting.com. We're open Monday-Friday 9am-6pm, Saturday 10am-4pm. Check our contact section for more details!";
        } else if (lowerMsg.includes('recommend') || lowerMsg.includes('suggest') || lowerMsg.includes('best')) {
            response = "For beginners, I'd recommend our photocards in silky finish - they're popular and affordable. For gifts, mini calendars are perfect. What's the occasion?";
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
        showMoreServicesBtn.addEventListener('click', function() {
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
        showMoreProductsBtn.addEventListener('click', function() {
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
        themeBtn.addEventListener('click', function() {
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
    window.addEventListener('scroll', function() {
        if (goTopBtn) {
            if (window.pageYOffset > 300) {
                goTopBtn.classList.add('visible');
            } else {
                goTopBtn.classList.remove('visible');
            }
        }
    });
    
    if (goTopBtn) {
        goTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // Mobile menu toggle
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
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
        anchor.addEventListener('click', function(e) {
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