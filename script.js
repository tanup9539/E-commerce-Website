
// Mobile navigation toggle
const bar = document.getElementById('bar');
const navbar = document.getElementById('navbar');
const close = document.getElementById('close');

// to open navbar when bar is clicked
if (bar) {
    bar.addEventListener('click', () => {
        navbar.classList.add('active');
    });
}

//to close navbar when close icon is clicked
if (close) {
    close.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
}

// Add active class to navbar links on click
const navLinks = navbar.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
    });
});

// Smooth scroll to sections (optional)
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        if (link.hash !== "") {
            event.preventDefault();
            const hash = link.hash;
            document.querySelector(hash).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Shop Now button click event
const shopNow = document.getElementById('shopnow');
if (shopNow) {
    shopNow.addEventListener('click', () => {
        window.location.href = 'shop.html';
    });
}

// Animate feature boxes on hover
const featureBoxes = document.querySelectorAll('#feature .fe-box');
featureBoxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.transform = 'scale(1.05)';
    });
    box.addEventListener('mouseout', () => {
        box.style.transform = 'scale(1)';
    });
});

// Add-to-cart button click effect
const cartIcons = document.querySelectorAll('.cart');
cartIcons.forEach(cart => {
    cart.addEventListener('click', () => {
        alert('Item added to cart!');
    });
});

document.getElementById('registration').onsubmit=function(){
    if (document.getElementById('password').value!==document.getElementById('confirmpass').value){
        alert(`Password do not match. Recheck it !`);
        return false;
    }
};