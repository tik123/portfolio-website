// === 1. Smooth Scrolling for Navigation ===
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// === 2. Back to Top Button ===
const toTopBtn = document.createElement('button');
toTopBtn.id = 'to-top';
toTopBtn.textContent = '↑';
document.body.appendChild(toTopBtn);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        toTopBtn.style.display = 'block';
    } else {
        toTopBtn.style.display = 'none';
    }
});

toTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// === 3. Scroll Animation — Fade In Cards ===
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-card, .project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
});

// === 4. Welcome Message ===
console.log("🚀 Portfolio loaded successfully!");
console.log("Built with HTML, CSS & JavaScript by Tika Ram Thapa Magar");
console.log("📧 Contact: bejaythapa11@gmail.com");
