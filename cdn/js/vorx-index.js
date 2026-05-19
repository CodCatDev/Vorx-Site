window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        nav.classList.add('scrl');
    } else {
        nav.classList.remove('scrl');
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, { 
    threshold: 0.2 
});

document.querySelectorAll('.view').forEach((el) => {
    observer.observe(el);
});