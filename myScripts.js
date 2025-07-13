// Slideshow functionality
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Initialize slideshow on page load
document.addEventListener('DOMContentLoaded', function() {
  showSlides(slideIndex);
});

// Image expansion functionality
function expandImage(img) {
  const expandedContainer = document.getElementById('expanded-image-container');
  const expandedImage = document.getElementById('expanded-image');
  
  // Set the source of the expanded image
  expandedImage.src = img.src;
  expandedImage.alt = img.alt;
  
  // Show the expanded image container
  expandedContainer.style.display = 'flex';
  
  // Prevent scrolling of the background
  document.body.style.overflow = 'hidden';
  
  // Add event listener to close on escape key
  document.addEventListener('keydown', closeOnEscape);
}

function closeExpandedImage() {
  const expandedContainer = document.getElementById('expanded-image-container');
  expandedContainer.style.display = 'none';
  document.body.style.overflow = 'auto';
  document.removeEventListener('keydown', closeOnEscape);
  expandedContainer.innerHTML = `
    <span class="close-btn" onclick="closeExpandedImage()">&times;</span>
    <img id="expanded-image" src="" alt="Expanded Image">
  `;
}

function closeOnEscape(e) {
  if (e.key === "Escape") {
    closeExpandedImage();
  }
}

// Close expanded image when clicking outside the image
document.addEventListener('DOMContentLoaded', function() {
  const expandedContainer = document.getElementById('expanded-image-container');
  const expandedImage = document.getElementById('expanded-image');
  
  expandedContainer.addEventListener('click', function(e) {
    if (e.target !== expandedImage) {
      closeExpandedImage();
    }
  });
});

function expandVideo(videoSrc) {
  const expandedContainer = document.getElementById('expanded-image-container');
  const expandedImage = document.getElementById('expanded-image');
  
  expandedImage.outerHTML = `<video id="expanded-image" controls autoplay>
                                <source src="${videoSrc}" type="video/mp4">
                                Your browser does not support the video tag.
                              </video>`;
  expandedContainer.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', closeOnEscape);
}