// 1. NAVIGASI MOBILE (HAMBURGER MENU)
const menuToggle = document.getElementById('mobile-menu');
const navigasiBar = document.querySelector('.navigasi_bar');

if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        navigasiBar.classList.toggle('tampil');
    });
}

// 2. EFEK TEKS MENGETIK OTOMATIS (MURNI JAVASCRIPT TANPA LIBRARY)
const teksElement = document.getElementById("teks-mengetik");
if (teksElement) {
    const kataKunci = ["Web Developer", "Game Developer", "Media Production Specialist"];
    let urutanKata = 0;
    let urutanHuruf = 0;
    let teksSaatIni = "";
    let huruf = "";
    let sedangMenghapus = false;

    function efekKetik() {
        if (urutanKata === kataKunci.length) {
            urutanKata = 0;
        }
        teksSaatIni = kataKunci[urutanKata];

        if (sedangMenghapus) {
            huruf = teksSaatIni.slice(0, --urutanHuruf);
        } else {
            huruf = teksSaatIni.slice(0, ++urutanHuruf);
        }

        teksElement.textContent = huruf;

        let kecepatan = 100;
        if (sedangMenghapus) {
            kecepatan /= 2;
        }

        if (!sedangMenghapus && huruf.length === teksSaatIni.length) {
            kecepatan = 1500;
            sedangMenghapus = true;
        } else if (sedangMenghapus && huruf.length === 0) {
            sedangMenghapus = false;
            urutanKata++;
            kecepatan = 500;
        }

        setTimeout(efekKetik, kecepatan);
    }
    
    setTimeout(efekKetik, 1000);
}

// 3. ANIMASI SCROLL REVEAL (INTERSECTION OBSERVER)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('muncul-scroll');
        }
    });
});

const hiddenElements = document.querySelectorAll('.sembunyi-scroll');
hiddenElements.forEach((el) => observer.observe(el));

// 4. PENANGANAN FORM KONTAK
const formKontak = document.getElementById('formKontak');
if(formKontak) {
    formKontak.addEventListener('submit', function(event) {
        event.preventDefault(); 
        const nama = document.getElementById('nama').value;
        alert(`Pesan berhasil dikirim!\nTerima kasih, ${nama}. Saya akan segera merespons pesan Anda.`);
        formKontak.reset();
    });
}