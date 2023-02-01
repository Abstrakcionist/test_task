const swiper1 = new Swiper('.swiper1', {
    speed: 1000,
    spaceBetween: 10,
    loop: true,
    autoplay:{
        delay: 5000,
    },
});


const swiper2 = new Swiper('.swiper2', {
    speed: 1000,
    spaceBetween: 10,
    loop: true,
    navigation:{
        nextEl: '.swiper2-button-next',
        prevEl: '.swiper2-button-prev',
    },
});