// Script file for functionality

document.getElementById('burger').addEventListener('click', function () {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Auto-rotate carousel
const carousel = document.getElementById('product-carousel');
let scrollInterval = setInterval(() => {
    carousel.scrollLeft += carousel.offsetWidth;
    if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
        carousel.scrollLeft = 0;
    }
}, 3000);

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form submitted. We will get back to you shortly!');
});




// .......................................Map.....................................

// Initialize the map and set its view to a specified location and zoom level
var map = L.map('map').setView([25.4521, 81.8463], 13); // Example: Prayagraj

// Add a tile layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '© OpenStreetMap'
}).addTo(map);

// Add a marker to the specified location
var marker = L.marker([25.4521, 81.8463]).addTo(map)
.bindPopup('<b>Hello!</b><br>This is Prayagraj.').openPopup();


// ......................................property for changing image in recommended product..................................

document.addEventListener('DOMContentLoaded', () => {
    const hoverImages = document.querySelectorAll('#hoverContainer img');
    const mainImage = document.querySelector('#mainImage');

    // Set the first image as active by default
    hoverImages[0].parentElement.classList.add('border-pink-500');

    hoverImages.forEach((image) => {
        image.addEventListener('mouseover', () => {
            mainImage.src = image.src;
            resetActiveImg();
            image.parentElement.classList.add('border-pink-500');
        });
    });

    function resetActiveImg() {
        hoverImages.forEach((img) => {
            img.parentElement.classList.remove('border-pink-500');
        });
    }

    const hoverImages2 = document.querySelectorAll('#hoverContainer2 img');
    const mainImage2 = document.querySelector('#mainImage2');

    // Set the first image as active by default
    hoverImages2[0].parentElement.classList.add('border-pink-500');

    hoverImages2.forEach((image) => {
        image.addEventListener('mouseover', () => {
            mainImage2.src = image.src;
            resetActiveImg();
            image.parentElement.classList.add('border-pink-500');
        });
    });

    function resetActiveImg() {
        hoverImages2.forEach((img) => {
            img.parentElement.classList.remove('border-pink-500');
        });
    }

    const hoverImages3 = document.querySelectorAll('#hoverContainer3 img');
    const mainImage3 = document.querySelector('#mainImage3');

    // Set the first image as active by default
    hoverImages3[0].parentElement.classList.add('border-pink-500');

    hoverImages3.forEach((image) => {
        image.addEventListener('mouseover', () => {
            mainImage3.src = image.src;
            resetActiveImg();
            image.parentElement.classList.add('border-pink-500');
        });
    });

    function resetActiveImg() {
        hoverImages3.forEach((img) => {
            img.parentElement.classList.remove('border-pink-500');
        });
    }
});
