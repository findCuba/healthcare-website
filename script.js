document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });
    });
    
    // Dynamic year update in footer
    const footer = document.querySelector("footer p");
    const currentYear = new Date().getFullYear();
    footer.textContent = `© ${currentYear} Healthcare Business. All Rights Reserved.`;
    
    // Animate sections on scroll
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.3 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
});
