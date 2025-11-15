// FOOTER YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// LAST MODIFIED
document.getElementById("lastModified").textContent = document.lastModified;

// HAMBURGER MENU
const btn = document.getElementById("hamburgerBtn");
const nav = document.getElementById("navMenu");

btn.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    btn.textContent = btn.textContent === "☰" ? "✖" : "☰";
});
