// javascript file for button navigations

document.addEventListener("DOMContentLoaded", () => {
    // Create the navigation buttons HTML
    const navHTML = `
        <div class="nav-buttons">
            <a href="homepage.html" aria-label="Navigate to Home">Home</a>
            <a href="#projects" aria-label="Navigate to Projects">Projects</a>
            <a href="#hobbies" aria-label="Navigate to Hobbies">Hobbies</a>
            <a href="#contact" aria-label="Navigate to Contact Info">Contact Info</a>
        </div>
    `;

    // Select the sticky box and append the buttons
    const stickyBox = document.querySelector(".sticky-box");
    stickyBox.insertAdjacentHTML("beforeend", navHTML);
});

