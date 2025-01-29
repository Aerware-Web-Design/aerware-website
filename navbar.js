console.log("Navbar script loaded successfully!");

document.addEventListener("DOMContentLoaded", () => {
    const dropdownButton = document.querySelector("#dropdown-button");
    const navItems = document.querySelector("#nav-items");

    dropdownButton.addEventListener("click", () => {
        navItems.classList.toggle("visible");
    });

    document.addEventListener("click", (event) => {
        if (!navItems.contains(event.target) && !dropdownButton.contains(event.target)) {
            navItems.classList.remove("visible");
        }
    });
});

