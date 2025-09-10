// Logo bounce on page load
document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector("main img");
    logo.style.opacity = "0";
    logo.style.transform = "scale(0.5)";

    setTimeout(() => {
        logo.style.transition = "all 1s ease";
        logo.style.opacity = "1";
        logo.style.transform = "scale(1)";
    }, 300);
});

// Input search animation (fake search demo)
const searchInput = document.querySelector("main input");

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        alert(`Searching for "${searchInput.value}" near you... 🍽️`);
        searchInput.value = "";
    }
});

// Smooth scroll for header links (dummy smooth effect)
document.querySelectorAll("header ul li a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
