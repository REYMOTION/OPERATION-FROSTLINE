document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.style.scrollBehavior = 'smooth';
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 14, 23, 0.98)';
        } else {
            navbar.style.background = 'rgba(10, 14, 23, 0.95)';
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
            }
        });
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.game-card, .specialist-card, .map-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    const glitchText = document.querySelector('.glitch');
    setInterval(() => {
        glitchText.style.textShadow = `
            ${Math.random() * 8 - 4}px ${Math.random() * 8 - 4}px 0 rgba(0, 200, 255, 0.7),
            ${Math.random() * 8 - 4}px ${Math.random() * 8 - 4}px 0 rgba(255, 255, 255, 0.5)
        `;
        
        setTimeout(() => {
            glitchText.style.textShadow = '0 0 30px rgba(0, 200, 255, 0.3)';
        }, 60);
    }, 2500);
    

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', (e) => {
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            button.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
});
// 🎥 Trailer Modal
const trailerBtn = document.querySelector('.btn-secondary');
const modal = document.getElementById('trailerModal');
const closeBtn = document.querySelector('.close-btn');
const trailerVideo = document.getElementById('trailerVideo');

trailerBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    // إعادة تحميل الفيديو مع autoplay
    trailerVideo.src = "https://www.youtube-nocookie.com/embed/joCTzfucGrw?autoplay=1";
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    // إيقاف الفيديو عند الإغلاق
    trailerVideo.src = "https://www.youtube-nocookie.com/embed/joCTzfucGrw";
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        trailerVideo.src = "https://www.youtube-nocookie.com/embed/joCTzfucGrw";
    }
});
