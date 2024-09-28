
document.addEventListener("DOMContentLoaded", function() {
    const typingText = document.querySelector('.typing');
    typingText.style.width = '0'; // Mulai dari 0
    setTimeout(() => {
        typingText.style.animation = 'typing 2s steps(32, end) forwards, blink-caret 0.25s step-end infinite';
    }, 200); // Tunggu 500ms sebelum memulai animasi
});

document.addEventListener("DOMContentLoaded", function() {
    const newPage = document.querySelector('.new-page');
    newPage.classList.add('slide-in'); // Tambahkan kelas untuk memicu animasi

    const circle = document.querySelector('.circle');
    circle.style.animation = 'swipe 1s forwards, glow 1s infinite alternate'; // Memicu animasi lingkaran
});

