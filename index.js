// let slideIndex = 0;
// showSlides();

// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName('slider');
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = 'none';
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {
//         slideIndex = 1;
//     }
//     slides[slideIndex - 1].style.display = 'block';
//     setTimeout(showSlides, 10000); // Change image every 10 seconds

//     let dots = document.getElementsByClassName('dot');
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(' active', '');
//     }
//     dots[slideIndex - 1].className += ' active';
// }

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
