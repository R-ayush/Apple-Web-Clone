var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
});

let nav_list = document.getElementById('nav-list')
        let openMenu = document.querySelector('.menuopen')
        let cross = document.querySelector('.cross')
        openMenu.addEventListener('click', () => {
            nav_list.style.opacity = '100%'
            openMenu.style.display = 'none'
        })
        cross.addEventListener('click', () => {
            nav_list.style.opacity = '0%';
            setTimeout(() => {
                openMenu.style.display = 'block'
            }, 400)
        })