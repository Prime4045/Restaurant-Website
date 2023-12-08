const searchIcon = document.querySelector('.bx-search');

const search = document.querySelector('.search-icon')
const searchBox = document.querySelector('.search-box')

search.addEventListener('click', function () {
    searchBox.classList.toggle('active');
    searchIcon.classList.toggle('bx-x');
});

const cartIcon = document.querySelector('.bx-cart');

const cart = document.querySelector('.cartIcon')
const cartItems = document.querySelector('.cartItems')

cart.addEventListener('click', function () {
    cartItems.classList.toggle('active');
    cartIcon.classList.toggle('bx-x');
});

const inlineSearch = document.querySelector('.icons li input')
const iconsWidth = document.querySelector('.signUp-icons')

window.onscroll = function () { myFunction() };

let navbar = document.querySelector('.nav_bar')
let sticky = navbar.offsetTop;

function myFunction() {
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky")
        inlineSearch.classList.add('inline')
        iconsWidth.style.width = '16%'
        inlineSearch.classList.remove("search-box")
        inlineSearch.classList.remove("search-box")
    } else {
        navbar.classList.remove("sticky");
        inlineSearch.classList.remove("inline")
        inlineSearch.classList.add("search-box")
        iconsWidth.style.width = '8%'
    }
}

const mainDishBox = document.querySelector('.mainDish-box');
const startersBox = document.querySelector('.starters-box');
const dessertsBox = document.querySelector('.desserts-box');
const drinksBox = document.querySelector('.drinks-box');
const mainDishes = document.querySelector('.main-dishes')
const starters = document.querySelector('.starters-dish')
const desserts = document.querySelector('.desserts-dish')
const drinks = document.querySelector('.drinks')


mainDishBox.addEventListener('click', () => {
    mainDishes.style.display = 'grid'
    starters.style.display = "none"
    desserts.style.display = "none"
    drinks.style.display = "none"
})

startersBox.addEventListener('click', () => {
    mainDishes.style.display = 'none'
    starters.style.display = "grid"
    desserts.style.display = "none"
    drinks.style.display = "none"
})


dessertsBox.addEventListener('click', () => {
    mainDishes.style.display = 'none'
    desserts.style.display = "grid"
    drinks.style.display = "none"
    starters.style.display = "none"
})


drinksBox.addEventListener('click', () => {
    mainDishes.style.display = 'none'
    drinks.style.display = "grid"
    starters.style.display = "none"
    desserts.style.display = "none"
})

lightGallery(document.querySelector('.image-gallery'))

const section2 = document.querySelector('#Reservation')

document.querySelector('.ResNavLink').addEventListener('click', (e) =>{
    e.preventDefault()
    section2.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})
document.querySelector('.ResFooterLink').addEventListener('click', (e) =>{
    e.preventDefault()
    section2.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})

const section5 = document.querySelector('#dish')

document.querySelector('.head-nav-dish').addEventListener('click', (e) =>{
    e.preventDefault()
    section5.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})
document.querySelector('.foot-nav-dish').addEventListener('click', (e) =>{
    e.preventDefault()
    section5.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
})



// addEventListener('click', function(e){
//     e.preventDefault()
//     // document.querySelector(e.getAttribute('href')).scrollIntoView({
//     //     behavior: 'smooth'
//     // });
//     console.log(getAttribute('href'))
