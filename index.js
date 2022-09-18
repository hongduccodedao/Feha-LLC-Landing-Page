// Show slide
let slides = document.getElementsByClassName('slider');
let dots = document.getElementsByClassName('dot');

// thay đổi slide mỗi 5s
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
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
    setTimeout(showSlides, 5000);
}

// hiển thị trang 404 nếu không tìm thấy trang
function notFound() {
    window.location.href = '404.html';
}

// hiển thị trang loading khi chuyển trang
function loading() {
    window.location.href = 'loading.html';
}