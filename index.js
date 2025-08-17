const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');

toggle.addEventListener('click', () => {
links.classList.toggle('active');
});

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
if (window.scrollY > 1200) {
    scrollBtn.style.display = "flex";
} else {
    scrollBtn.style.display = "none";
}
});

scrollBtn.addEventListener("click", () => {
window.scrollTo({ top: 0, behavior: "smooth" });
});