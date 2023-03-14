// Add an event listener for when the window loads
window.addEventListener("load", () => {
  // Select the loader element
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.classList.add("loader--hidden");
    loader.addEventListener("transitionend", () => {
      // Remove the loader element from the document body
      document.body.removeChild(loader);
    });
  }, 2000);
  // Add the "loader--hidden" class to the loader element, which will hide it

  // Add an event listener for when the "transitionend" event fires on the loader element
});
