// ===== Dark/Light Mode Toggle =====
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

// Apply saved theme from localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light-mode');
  modeToggle.checked = true;
} else {
  body.classList.remove('light-mode');
  modeToggle.checked = false;
}

// Toggle and save theme
modeToggle.addEventListener('change', () => {
  body.classList.toggle('light-mode');
  const newTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
  localStorage.setItem('theme', newTheme);
});


// ===== Image Slider Logic =====
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let slideInterval;

// Show slide by index
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    slide.style.opacity = '0';
    slide.style.transition = 'opacity 1s ease-in-out';
    dots[i].classList.remove('active');
  });

  slides[index].classList.add('active');
  slides[index].style.opacity = '1';
  dots[index].classList.add('active');
}

// Start auto-sliding
function startSlider() {
  slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 6000);
}

// Manual dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    clearInterval(slideInterval); // Pause auto-slide on manual click
    currentSlide = index;
    showSlide(currentSlide);
    startSlider(); // Restart slider after interaction
  });
});

// Initialize slider
showSlide(currentSlide);
startSlider();
