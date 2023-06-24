const carouselContainer = document.querySelector(".carousel-container");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Set the initial index
let currentIndex = 0;

// Add event listeners to the buttons
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + 3) % 3;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % 3;
  updateCarousel();
});

// Function to update the carousel display
function updateCarousel() {
  carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}
