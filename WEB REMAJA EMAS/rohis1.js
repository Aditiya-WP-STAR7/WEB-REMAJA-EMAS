// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
};

// Toggle class active untuk gift
const gift = document.querySelector('.gift');
document.querySelector('#gift').onclick = (e) => {
    gift.classList.toggle('active');
    e.preventDefault();
};

// Toggle class active untuk user
const user = document.querySelector('.user');
document.querySelector('#user').onclick = (e) => {
    user.classList.toggle('active');
    e.preventDefault();
};

// Toggle class active untuk user
const app = document.querySelector('.app');
document.querySelector('#app').onclick = (e) => {
    app.classList.toggle('active');
    e.preventDefault();
};

// Toggle class active untuk gRID
const grid = document.querySelector('.grid');
document.querySelector('#grid').onclick = (e) => {
    grid.classList.toggle('active');
    e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');
const dr = document.querySelector('#grid');
const ac = document.querySelector('#gift');
const bc = document.querySelector('#app');
const dc = document.querySelector('#user');

document.addEventListener('click', function (e) {
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }

    if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    }

    if (!dr.contains(e.target) && !grid.contains(e.target)) {
        grid.classList.remove('active');
    }

    if (!ac.contains(e.target) && !gift.contains(e.target)) {
        gift.classList.remove('active');
    }

    if (!bc.contains(e.target) && !app.contains(e.target)) {
        app.classList.remove('active');
    }

    if (!dc.contains(e.target) && !user.contains(e.target)) {
        user.classList.remove('active');
    }
});

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');
const arrowleft = document.querySelector('#arrow-left');
const menu = document.querySelector('#hamburger-menu');

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    };
});

// klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
};


// klik di luar modal
window.onclick = (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
};