const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-links a:not(.nav-button)");

window.addEventListener("scroll", () => {
  let current = "home";

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 180) current = section.id;
  });

  navItems.forEach(item => {
    item.classList.toggle("active", item.getAttribute("href") === `#${current}`);
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
