# Portofolio Web Pribadi - Miracle Kaligis

Proyek ini adalah website portofolio pribadi statis yang dibangun sepenuhnya menggunakan teknologi inti web (**HTML5, CSS3, dan JavaScript**) tanpa bergantung pada *library* atau *framework* eksternal seperti Bootstrap, Tailwind, atau jQuery. 

Website ini dirancang untuk menampilkan profil, hasil karya (galeri), catatan/artikel (blog), serta informasi kontak, sekaligus memenuhi spesifikasi tugas mata kuliah Pengembangan Web di program studi Informatika, Universitas Sam Ratulangi (UNSRAT).

## ✨ Fitur Utama

- **Desain Modern & Responsif:** Menggunakan tata letak *CSS Grid* dan *Flexbox* yang beradaptasi dengan sempurna di berbagai ukuran layar (Desktop, Tablet, dan Mobile).
- **Efek Glassmorphism:** Elemen antarmuka (kartu, navigasi) dirancang dengan efek kaca tembus pandang bergaya elegan dipadukan dengan aksen warna neon.
- **Animasi Murni Vanilla JS & CSS:**
  - *Typing Effect* (Efek mengetik otomatis) di halaman Beranda.
  - *Scroll Reveal Animation* (Elemen muncul perlahan saat di-scroll) menggunakan `IntersectionObserver` API.
  - *Floating & Glowing Animation* pada foto profil.
- **Clean URL (URL Bersih):** Konfigurasi menggunakan file `.htaccess` untuk menghilangkan ekstensi `.html` pada bilah alamat browser, sehingga URL terlihat jauh lebih profesional (contoh: `/gallery` bukan `/gallery.html`).

## 🛠️ Teknologi yang Digunakan

- **HTML5:** Struktur semantik web.
- **CSS3:** Penataan gaya, variabel kustom (*Custom Properties*), dan animasi *Keyframes*.
- **JavaScript (ES6+):** Manipulasi DOM murni untuk interaktivitas (menu navigasi *mobile*, animasi ketik, efek *scroll*, dan *alert* formulir).
- **Apache (.htaccess):** Konfigurasi server lokal/hosting untuk *URL rewriting*.

## 📂 Struktur Direktori
```text
📁 Tugas-Web/
├── 📁 img/                 # Direktori penyimpanan aset gambar/foto
│   ├── profil.jpg
│   ├── foto1.jpg
│   └── ...
├── 📄 .htaccess            # Aturan URL Rewrite & keamanan direktori
├── 📄 style.css            # File stylesheet utama
├── 📄 script.js            # Logika interaktivitas Javascript murni
├── 📄 index.html           # Halaman Beranda (Home)
├── 📄 gallery.html         # Halaman Galeri Karya
├── 📄 blog.html            # Halaman Artikel/Catatan Digital
├── 📄 contact.html         # Halaman Informasi Data Diri & Formulir Kontak
└── 📄 README.md            # Dokumentasi proyek (File ini)