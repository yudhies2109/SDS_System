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
