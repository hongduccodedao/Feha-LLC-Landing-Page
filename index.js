// button toggle light/night mode
const button = document.querySelector('.mode');
const container = document.querySelector('.container');
const textDesc = document.querySelector('.text-desc');
const currentTheme = localStorage.getItem('theme');

button.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" /></svg>`;
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-[#455a64]" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
        </svg>`;
    }
});

// Show slide
let slides = document.getElementsByClassName('slider');
let dots = document.getElementsByClassName('dot');

// mỗi 5 giây tự chuyển slide
let slideIndex = 0;
showSlides();

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 5000);

    // hiển thị dot đang được active
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[slideIndex - 1].className += ' active';

    // khi click vào dot thì chuyển slide tương ứng và hiển thị dot đang được active
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', function () {
            for (let j = 0; j < dots.length; j++) {
                dots[j].className = dots[j].className.replace(' active', '');
                slides[j].style.display = 'none';
            }
            dots[i].className += ' active';
            slides[i].style.display = 'block';
        });
    }
}

// Hiển thị trang 404 khi gặp lỗi
window.addEventListener('error', function (e) {
    window.location.href = '404.html';
});

// Hiển thị trang loading khi load trang
window.addEventListener('load', function () {
    window.location.href = 'loading.html';
});