// SCRIPT JS FOR NAVBAR OPACITY

// Ambil elemen navbar
var navbar = document.getElementById('navbar');

// Tambahkan event listener untuk mendeteksi perubahan scroll
window.addEventListener('scroll', function() {
    // Ambil tinggi scroll saat ini
    var scrollPosition = window.scrollY;

    // Tentukan tinggi scroll pada saat perubahan background color
    var changeHeight = 583;

    // Ganti background color ketika tinggi scroll mencapai nilai tertentu
    if (scrollPosition > changeHeight) {
        navbar.style.backgroundColor = "rgba(32, 31, 31, 1)"; /* Ganti dengan warna yang diinginkan */
    } else {
        navbar.style.backgroundColor = "rgba(32, 31, 31, 0.1)"; /* Ganti dengan warna yang diinginkan */
    }
});


// Function to Hide Purpose

let rotated = false;

function rotateImage() {
    const image = document.getElementById('rotatingImage');
    const bg = document.getElementById('purpose-sds');
    const hiddentext = document.getElementById('text-purpose');
    const colortext = document.getElementById('heading-text');

    rotated = !rotated;

    if (rotated) {
        image.style.transform = 'rotate(180deg)';
        bg.style.backgroundColor = '#E79231';
        hiddentext.style.display = 'block';
        colortext.style.color = '#FFF';
    } else {
        image.style.transform = 'rotate(0deg)';
        bg.style.backgroundColor ='#BFBEBE';
        hiddentext.style.display = 'none';
        colortext.style.color = '#070B0F';
    }
}

// Function to Hide Moto

let rotation = false;

function rotateImg() {
    const image = document.getElementById('rotatingImg');
    const bg = document.getElementById('moto-sds');
    const hiddentext = document.getElementById('sds-moto');
    const colortext = document.getElementById('moto-mainheading');


    rotation = !rotation;

    if (rotation) {
        image.style.transform = 'rotate(180deg)';
        bg.style.backgroundColor = '#E79231';
        hiddentext.style.display = 'block';
        colortext.style.color = '#FFF';
    } else {
        image.style.transform = 'rotate(0deg)';
        bg.style.backgroundColor ='#BFBEBE';
        hiddentext.style.display = 'none';
        colortext.style.color = '#070B0F';
    }
}