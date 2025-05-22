

// Custom cursor mengikuti mouse
let cursor = document.querySelector('.cursor');

window.onmousemove = (e) => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
};

// Gambar di section .home bergerak mengikuti mouse
let homeImg = document.querySelector('.home .home-img');

document.querySelector('.home').onmousemove = (e) => {
    homeImg.style.top = e.pageY + 'px';
    homeImg.style.left = e.pageX + 'px';
};

// Ganti gambar navbar-img saat hover link navbar
document.querySelectorAll('.navbar a').forEach(link => {
    link.onmouseenter = () => {
        let newSrc = link.getAttribute('data-src');
        if (newSrc) {
            document.querySelector('.navbar-img img').src = newSrc;
        }
    };

    link.onmouseleave = () => {
        document.querySelector('.navbar-img img').src = 'image.k/p.jpg';
    };

    // Sembunyikan navbar dan gambar saat klik link
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        navbarimg.classList.remove('active');
    });
});

// Toggle tombol menu untuk membuka/menutup navbar
let navbar = document.querySelector('.navbar');
let navbarimg = document.querySelector('.navbar-img');

document.querySelector('#menu-btn').onclick = () => {
    const isActive = navbar.classList.toggle('active');
    navbarimg.classList.toggle('active', isActive);
};

// Tutup navbar dan gambar saat scroll halaman
window.onscroll = () => {
    navbar.classList.remove('active');
    navbarimg.classList.remove('active');
};
