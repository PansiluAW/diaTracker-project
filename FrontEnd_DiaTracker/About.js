// This function selects all elements with the 'fade-in' class and checks if they are in the viewport
function fadeInOnScroll() {
  // Select all elements with the 'fade-in' class
  const elements = document.querySelectorAll('.fade-in');
  // Iterate through each element
  elements.forEach(element => {
  // If the element is in the viewport, remove the 'fade-in' class
  if (isElementInViewport(element)) {
  element.classList.remove('fade-in');
  }
  });
  }
  
  // This function checks if the element is in the viewport
  function isElementInViewport(element) {
  // Get the dimensions of the element
  const rect = element.getBoundingClientRect();
  // Check if the element is in the viewport
  return (
  rect.top >= 0 &&
  rect.left >= 0 &&
  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
  }
  
  // When the window is scrolled, call the fadeInOnScroll function
  window.addEventListener('scroll', fadeInOnScroll);
  
  // When the window is loaded, call the fadeInOnScroll function
  window.addEventListener('load', fadeInOnScroll);
  
  // Overall, this code creates a fade-in effect for elements with the 'fade-in' class when they come into view.
  // It achieves this by checking if the element is in the viewport and removing the 'fade-in' class if it is.
  // The code listens for both the scroll and load events to ensure that all elements are checked and the effect is applied properly.
  
  
