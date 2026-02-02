const products = [
    {
        id: 1,
        name: "Wireless Noise Cancelling Headphones",
        price: 299.99,
        category: "Electronics",
        image: "assets/images/product-headphones.png",
        rating: 4.8,
        description: "Premium sound quality with active noise cancellation for immersive listening.",
        detailPage: "product-details/wireless-noise-cancelling-headphones.html"
    },
    {
        id: 2,
        name: "Smart Fitness Watch",
        price: 149.50,
        category: "Wearables",
        image: "assets/images/product-watch.png",
        rating: 4.5,
        description: "Track your fitness goals with this advanced smart watch featuring heart rate monitoring.",
        detailPage: "product-details/smart-fitness-watch.html"
    },
    {
        id: 3,
        name: "Ergonomic Office Chair",
        price: 249.00,
        category: "Furniture",
        image: "assets/images/product-chair.png",
        rating: 4.7,
        description: "Comfortable ergonomic chair designed for long hours of work.",
        detailPage: "product-details/ergonomic-office-chair.html"
    },
    {
        id: 4,
        name: "Mechanical Gaming Keyboard",
        price: 89.99,
        category: "Electronics",
        image: "assets/images/product-keyboard.png",
        rating: 4.6,
        description: "RGB backlit mechanical keyboard with tactile switches for the ultimate gaming experience.",
        detailPage: "product-details/mechanical-gaming-keyboard.html"
    },
    {
        id: 5,
        name: "Running Shoes Air Pro",
        price: 120.00,
        category: "Fashion",
        image: "assets/images/product-shoes.jpg",
        rating: 4.3,
        description: "Lightweight and breathable running shoes for professionals.",
        detailPage: "product-details/running-shoes-air-pro.html"
    },
    {
        id: 6,
        name: "Modern Coffee Table",
        price: 180.00,
        category: "Furniture",
        image: "assets/images/product-table.jpg",
        rating: 4.4,
        description: "Minimalist coffee table that fits perfectly in any modern living room.",
        detailPage: "product-details/modern-coffee-table.html"
    },
    {
        id: 7,
        name: "4K Action Camera",
        price: 199.99,
        category: "Electronics",
        image: "assets/images/product-camera.jpg",
        rating: 4.2,
        description: "Capture your adventures in stunning 4K resolution.",
        detailPage: "product-details/4k-action-camera.html"
    },
    {
        id: 8,
        name: "Leather Backpack",
        price: 79.99,
        category: "Fashion",
        image: "assets/images/product-backpack.jpg",
        rating: 4.5,
        description: "Stylish and durable leather backpack for daily commute.",
        detailPage: "product-details/leather-backpack.html"
    },
    {
        id: 9,
        name: "I-Phone",
        price: 99.00,
        category: "Electronics",
        image: "assets/images/product-i-phone.jpg",
        rating: 4.6,
        description: "Apple company's latest smartphone.",
        detailPage: "product-details/iphone.html"
    },
    {
        id: 10,
        name: "Classic Denim Caps",
        price: 85.00,
        category: "Fashion",
        image: "assets/images/product-caps.jpg",
        rating: 4.4,
        description: "Timeless denim caps perfect for any casual outfit.",
        detailPage: "product-details/classic-denim-caps.html"
    },
    {
        id: 11,
        name: "Minimalist Bookshelf",
        price: 150.00,
        category: "Furniture",
        image: "assets/images/product-bookshelf.jpg",
        rating: 4.7,
        description: "Elegant wooden bookshelf to organize your collection.",
        detailPage: "product-details/minimalist-bookshelf.html"
    },
    {
        id: 12,
        name: "VR Headset",
        price: 349.99,
        category: "Electronics",
        image: "assets/images/product-vr.jpg",
        rating: 4.8,
        description: "Immersive virtual reality headset for gaming and entertainment.",
        detailPage: "product-details/vr-headset.html"
    }
];


function formatCurrency(price) {
    return `$${price.toFixed(2)}`;
}

function addToCart(id) {
    console.log("Added to cart:", id);
    alert("Product added to cart!");
}
