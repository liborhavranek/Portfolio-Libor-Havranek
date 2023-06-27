const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // Stop observing the element after adding the "show" class
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden-left, .hidden-right");
hiddenElements.forEach((element) => {
  observer.observe(element);
});
