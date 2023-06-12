document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel-slide");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentSlide = 0;
  
    function showSlide(n) {
      slides[currentSlide].style.display = "none";
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].style.display = "block";
    }
  
    function nextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function prevSlide() {
      showSlide(currentSlide - 1);
    }
  
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
  
    setInterval(nextSlide, 3000); // Rolagem automática a cada 3 segundos
  });
  