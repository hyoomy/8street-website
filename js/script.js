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

// js/script.js の既存のJavaScriptコードの最後に追加

// スクロールで要素をフェードインさせる機能
const fadeInSections = document.querySelectorAll('.fade-in-section');

const observerOptions = {
    root: null, // ビューポートをルートとして使用
    rootMargin: '0px',
    threshold: 0.1 // 要素が10%見えたらコールバックを実行
};

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 要素がビューポートに入ったら
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // 一度表示されたら監視を停止
        }
    });
}, observerOptions);

fadeInSections.forEach(section => {
    sectionObserver.observe(section);
});

// js/script.js の既存のJavaScriptコードの最後に追加

// スクロール時のヘッダー背景変化
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { // 50pxスクロールしたら
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});