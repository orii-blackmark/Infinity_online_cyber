function countUp(element) {
    var start = 0;
    var end = parseInt(element.getAttribute('data-count'));
    var duration = 2000; // Duration in milliseconds
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var startTime = null;
  
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = timestamp - startTime;
      var percentage = Math.min(progress / duration, 1);
  
      var value = Math.floor(percentage * range * increment + start);
      element.textContent = value;
  
      if (percentage < 1) {
        requestAnimationFrame(step);
      }
    }
  
    requestAnimationFrame(step);
  }
  
  var counterElements = document.querySelectorAll('.counter-value');
  counterElements.forEach(function(element) {
    countUp(element);
  });

  // Get the scroll-top button element
var scrollButton = document.querySelector('.scroll-top-button');

// Function to handle scroll event
function handleScroll() {
  // Check the scroll position
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // If the scroll position is greater than 100 pixels, show the button, otherwise hide it
  if (scrollPosition > 100) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
}

// Function to handle smooth scroll
function scrollToTop() {
  // Scroll to the top of the page with smooth behavior
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Add click event listener to the scroll-top button
scrollButton.addEventListener('click', scrollToTop);



/*
// JavaScript to trigger the animation for each container after a few seconds
document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(
    ".testimonials .column .container"
  );
  const containerCount = containers.length;
  let currentIndex = 0;

  function showContainer(index) {
    containers.forEach(function (container, i) {
      if (i === index) {
        container.style.display = "block";
        container.classList.add("animate-scroll");
      } else {
        container.style.display = "none";
        container.classList.remove("animate-scroll");
      }
    });
  }

  function animateContainers() {
    showContainer(currentIndex);

    currentIndex++;
    if (currentIndex >= containerCount) {
      currentIndex = 0; // Reset index to show the first container again
    }

    setTimeout(animateContainers, 10000); // Delay each container by 10 seconds (10000 milliseconds)
  }

  animateContainers();
});
*/
// JavaScript to trigger the animation for each container
document.addEventListener("DOMContentLoaded", function() {
  const testimonialsContainer = document.querySelector(".testimonials .column");
  const containers = document.querySelectorAll(".testimonials .container");
  const containerCount = containers.length;
  let currentIndex = 0;

  function showContainer(index) {
    containers.forEach(function(container, i) {
      if (i === index) {
        container.style.display = "block";
        container.classList.add("animate-scroll");
      } else {
        container.style.display = "none";
        container.classList.remove("animate-scroll");
      }
    });
  }

  function animateContainers() {
    showContainer(currentIndex);

    currentIndex++;
    if (currentIndex >= containerCount) {
      currentIndex = 0;
    }

    setTimeout(animateContainers, 10000);
  }

  animateContainers();

  // Navigation arrows
  const leftArrow = document.querySelector(".testimonials .left-arrow");
  const rightArrow = document.querySelector(".testimonials .right-arrow");

  leftArrow.addEventListener("click", function() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = containerCount - 1;
    }
    showContainer(currentIndex);
  });

  rightArrow.addEventListener("click", function() {
    currentIndex++;
    if (currentIndex >= containerCount) {
      currentIndex = 0;
    }
    showContainer(currentIndex);
  });
});
