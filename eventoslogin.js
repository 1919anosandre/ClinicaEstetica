
//galeria das promoçoes e lançamentos do site
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.querySelectorAll(".slide-login");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
}

function plusSlides(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    let slides = document.querySelectorAll(".slide-login");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// script.js
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("animation-container");
  
    function createHeart() {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.left = Math.random() * 100 + "vw"; // Posicionamento aleatório na horizontal
      heart.style.animationDuration = Math.random() * 2 + 3 + "s"; // Duração aleatória
      container.appendChild(heart);
  
      // Remover coração após a animação
      setTimeout(() => {
        heart.remove();
      }, 5000);
    }
  
    // Criar vários corações
    setInterval(createHeart, 300);
  });
  function togglePassword() {
    const passwordInput = document.getElementById('password');
    const toggleIcon = document.querySelector('.toggle-password');

    // Alterna o tipo do input e o ícone
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.textContent = '🙈'; // Ícone de olho fechado
    } else {
        passwordInput.type = 'password';
        toggleIcon.textContent = '👁️'; // Ícone de olho aberto
    }
}