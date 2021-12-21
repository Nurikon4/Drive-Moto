
$(function () {
    $('.banner__slider').slick({
        dots: true,
        prevArrow: '<button class="banner__slider-btn banner__slider-btnprev"><img src="images/arrow-left.svg" alt="arrow-left"></button>',
        nextArrow: '<button class="banner__slider-btn banner__slider-btnnext"><img src="images/arrow-right.svg" alt="arrow-left"></button>',
        autoplay: true,
    })

    $('.tab').on('click', function (e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('tab-item--active');
        $($(this).closest('.tabs-wrapper').siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab-item--active')
        $($(this).attr('href')).addClass('tabs-content--active')

        $('.product-slider').slick('setPosition')
    })

    $('.product-item-favorite').on('click', function () {
        $(this).toggleClass('product-item-favorite--active')
    })

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider-btn product-slider-btnprev"><img src="images/arrow-black-left.svg" alt="arrow-left"></button>',
        nextArrow: '<button class="product-slider-btn product-slider-btnnext"><img src="images/arrow-black-right.svg" alt="arrow-left"></button>',
        autoplay: true,
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 1201,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 870,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 590,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    })

    $('.filter-style').styler()

    $('.filter__item-drop, .filter__extra').on('click', function () {
        $(this).toggleClass('filter__item-drop--active')
        $(this).next().slideToggle('200')
    })

    $('.js-range-slider').ionRangeSlider({
        type: "double",
        min: 100000,
        max: 500000,
    })

    $('.filter-btn__send').on('click', function () {
        $(this).toggleClass('filter-btn__send--active')
    })

    $('.catalog__filter-btngrid').on('click', function () {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btnline ').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').removeClass('product-item__wrapper--list')
    })

    $('.catalog__filter-btnline').on('click', function () {
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').addClass('product-item__wrapper--list')
    })

    $('.rate-yo').rateYo({
        ratedFill: '#1c62cd',
        spacing: '7px',
        normalFill: '#c4c4c4'
    })

    $('.menu__btn').on('click', function () {
        $('.menu-mobile__list').toggleClass('menu-mobile__list--active')
    })

    $('.footer__top-title').on('click', function () {
        $(this).next().slideToggle()
    })

    $('.footer__topdrop').on('click', function () {
        $(this).toggleClass('footer__topdrop--active')
    })

    $('.aside__btn').on('click', function () {
        $(this).next().slideToggle()
    })
});


// Registr & Login form

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container-forms");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

// Author

let nameS = document.getElementById('name');
let pw = document.getElementById('pw');

function store() {
    localStorage.setItem('name', nameS.value);
    localStorage.setItem('pw', pw.value);
}


function check() {

    let storedName = localStorage.getItem('name');
    let storedPw = localStorage.getItem('pw');

    let userName = document.getElementById('userName');
    let userPw = document.getElementById('userPw');

    let userList = document.querySelector('.user__list');

    if (userName.value == storedName && userPw.value == storedPw) {
        setTimeout(function () { document.location.href = "index.html"; }, 500);
        alert('Вы успешно авторизовались!');
        
    } else {
        alert('Неправильный логин или пароль!');
    }
}