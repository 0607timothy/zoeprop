const header = document.querySelector("header")

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 80)
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open')
}


// buat slider
// Buat slider galeri foto
document.addEventListener('DOMContentLoaded', function() {
    // ... kode header sticky dan toggle menu Anda ...

    const galleryContainer = document.querySelector('.gallery-container');
    const galleryWrapper = document.querySelector('.gallery-wrapper');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const galleryLinks = document.querySelectorAll('.gallery-grid a');
    const numImages = galleryLinks.length;
    const visibleImages = 3; // Jumlah gambar yang terlihat tanpa perlu scroll penuh

    if (galleryContainer && galleryWrapper && prevBtn && nextBtn && numImages > visibleImages) {
        let currentIndex = 0;
        const imageWidth = galleryLinks[0].offsetWidth + 15; // Lebar satu gambar + gap

        function updateButtons() {
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= numImages - visibleImages;
        }

        function slideTo(index) {
            galleryWrapper.style.transform = `translateX(-${index * imageWidth}px)`;
            currentIndex = index;
            updateButtons();
        }

        nextBtn.addEventListener('click', function() {
            if (currentIndex < numImages - visibleImages) {
                slideTo(currentIndex + 1);
            }
        });

        prevBtn.addEventListener('click', function() {
            if (currentIndex > 0) {
                slideTo(currentIndex - 1);
            }
        });

        updateButtons();
    } else if (galleryContainer) {
        // Jika gambar kurang atau sama dengan jumlah yang terlihat, sembunyikan kontrol
        const controls = galleryContainer.querySelector('.gallery-controls');
        if (controls) {
            controls.style.display = 'none';
        }
    }
});




// Ini untuk filter properti 
document.addEventListener('DOMContentLoaded', function() {
    const filterLinks = document.querySelectorAll('.new-property-link');
    const propertyItems = document.querySelectorAll('.property-mini .row-link');
    const judulProperti = document.getElementById('judul-properti');

    // Set "Semua Properti" sebagai judul awal
    if (judulProperti) {
        judulProperti.textContent = 'Semua Properti';
    }

    // Set "Semua" sebagai filter aktif saat halaman dimuat
    const semuaLink = document.querySelector('.new-property-link[data-type="semua"]');
    if (semuaLink) {
        semuaLink.classList.add('active');
    }

    filterLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const filterType = this.getAttribute('data-type');

            // Hapus kelas active dari semua link filter
            filterLinks.forEach(l => l.classList.remove('active'));

            // Tambahkan kelas active ke link yang diklik
            this.classList.add('active');

            // Perbarui judul properti
            if (judulProperti) {
                if (filterType === 'semua') {
                    judulProperti.textContent = 'Semua Properti';
                } else if (filterType === 'apartement') {
                    judulProperti.textContent = 'Apartement'; // Sesuai permintaan bos
                } else if (filterType === 'usaha') {
                    judulProperti.textContent = 'Properti Usaha'; // Lebih deskriptif
                } else {
                    judulProperti.textContent = filterType.charAt(0).toUpperCase() + filterType.slice(1);
                }
            }

            // Filter properti
            propertyItems.forEach(item => {
                const propertyType = item.getAttribute('data-property-type');
                if (filterType === 'semua' || propertyType === filterType) {
                    item.style.display = 'block'; // Tampilkan
                } else {
                    item.style.display = 'none'; // Sembunyikan
                }
            });
        });
    });
});