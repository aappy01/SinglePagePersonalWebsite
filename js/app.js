// function to hamburger menu for mobile responsiveness

const menuIcon = document.querySelector(".menuIcon");
const sideBar = document.querySelector(".nav");
let menuOpen = false; // Start with the menu closed

menuIcon.addEventListener("click", () => {
  // Toggle the menuOpen variable every time the menuIcon is clicked
  menuOpen = !menuOpen;

  if (menuOpen) {
    menuIcon.classList.add("active");
    sideBar.classList.add("active");
  } else {
    menuIcon.classList.remove("active");
    sideBar.classList.remove("active");
  }
});

document.querySelectorAll(".navItemList").forEach((n) => n.addEventListener("click", () => {
  menuOpen = false; // Close the menu when a menu item is clicked
  menuIcon.classList.remove("active");
  sideBar.classList.remove("active");
}));



// Function to get the index of the current section in view
function getCurrentSectionIndex() {
  const sections = document.querySelectorAll('.section');
  let currentIndex = 0;

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= window.innerHeight) {
      currentIndex = index;
    }
  });

  return currentIndex;
}

// function to Handle page count

let currentSectionIndex = 0;

function updateCountingNumber() {
  const countingSpan = document.querySelector('.count#counting');
  const sections = document.querySelectorAll('.section');
  const windowHeight = window.innerHeight;

  sections.forEach((section, index) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.top <= windowHeight / 2) {
      currentSectionIndex = index;
    }
  });

  // Update the counting number based on the current section index
  const countingNumber = currentSectionIndex + 1;
  const paddedCountingNumber = countingNumber.toString().padStart(2, '0');
  countingSpan.textContent = paddedCountingNumber;
}

// Attach the updateCountingNumber function to the scroll event
window.addEventListener('scroll', updateCountingNumber);

// Initial update of the counting number
updateCountingNumber();
