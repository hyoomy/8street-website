// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Close mobile nav if open
            const mobileNav = document.querySelector('.mobile-nav');
            if (mobileNav.classList.contains('active')) {
                mobileNav.classList.remove('active');
            }

            window.scrollTo({
                top: targetElement.offsetTop - document.querySelector('header').offsetHeight, // Adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Mobile navigation toggle
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.mobile-nav');

hamburgerMenu.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});

// Optional: Close mobile nav when clicking outside (or on scroll)
window.addEventListener('scroll', () => {
    if (mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
    }
});

// Hero section background image cycling (Smooth Fade)
const heroSectionImages = document.querySelectorAll('.hero-bg-image'); // (A)
let currentImageIndex = 0; // (B)

function changeHeroBackgroundSmoothly() { // (C)
    // 現在のアクティブな画像から active クラスを削除
    if (heroSectionImages[currentImageIndex]) { // (D)
        heroSectionImages[currentImageIndex].classList.remove('active');
    }

    // 次の画像のインデックスを計算
    currentImageIndex = (currentImageIndex + 1) % heroSectionImages.length; // (E)

    // 新しい画像に active クラスを追加して表示
    if (heroSectionImages[currentImageIndex]) { // (F)
        heroSectionImages[currentImageIndex].classList.add('active');
    }
}
setInterval(changeHeroBackgroundSmoothly, 3000); // (G)