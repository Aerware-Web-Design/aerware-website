document.addEventListener('DOMContentLoaded', function() {
    // Select the menu toggle button and navigation links
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Add click event listener to the menu toggle
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active'); // Toggle the "active" class on the nav-links
    });
});

