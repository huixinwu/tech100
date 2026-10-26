
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    // Handle the navigation toggle button
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");

        // Update the button text
        if (navMenu.classList.contains("active")) {
            navToggle.textContent = "X";
        } else {
            navToggle.textContent = "☰";
        }
    });

    // Check the window width when it is resized
    window.addEventListener("resize", () => {
        if (window.innerWidth > 1100) {
            navMenu.classList.remove("active");
            navToggle.textContent = "☰";
        }
    });

    // Check the window width when the page first loads
    if (window.innerWidth > 1100) {
        navMenu.classList.remove("active");
        navToggle.textContent = "☰";
    }
});

// module 5 o inactive link
let inactiveLinks = document.querySelectorAll('.linkinactive');
inactiveLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        alert('This link is currently inactive.');
    });
});