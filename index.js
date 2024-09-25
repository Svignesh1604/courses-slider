// script.js

const courseContent = document.querySelector('.course-content');
let isHovered = false;

// Pause the sliding on hover
courseContent.addEventListener('mouseover', () => {
    isHovered = true;
});

courseContent.addEventListener('mouseout', () => {
    isHovered = false;
});

function autoSlide() {
    if (!isHovered) {
        courseContent.style.transform = `translateX(-${600}px)`; // Slide each card by 600px
    }
}

// Auto slide every 15 seconds
setInterval(autoSlide, 15000);
