let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelector('.slides');
  const totalSlides = slides.children.length;
  
  // Adjust the currentSlide index to loop around if necessary
  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }
  
  // Transform the slides container to show the current slide
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.getElementById('nextBtn').addEventListener('click', function() {
  showSlide(currentSlide + 1);
});

document.getElementById('prevBtn').addEventListener('click', function() {
  showSlide(currentSlide - 1);
});