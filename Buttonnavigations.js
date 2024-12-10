// navigation_buttons.js

// Event listeners for navigation buttons
document.addEventListener("DOMContentLoaded", () => {
    // Home button
    const homeButton = document.querySelector("a[href='#home']");
    homeButton.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToSection("#home-section");
    });

    // Projects button
    const projectsButton = document.querySelector("a[href='#projects']");
    projectsButton.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToSection("#projects-section");
    });

    // Hobbies button
    const hobbiesButton = document.querySelector("a[href='#hobbies']");
    hobbiesButton.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToSection("#hobbies-section");
    });

    // Contact Info button
    const contactButton = document.querySelector("a[href='#contact']");
    contactButton.addEventListener("click", (e) => {
        e.preventDefault();
        scrollToSection("#contact-section");
    });
});

// Scroll to the respective section
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}
