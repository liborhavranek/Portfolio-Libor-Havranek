document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-card");
      } else {
        entry.target.classList.remove("show-card");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".fade-in");
  hiddenElements.forEach((element) => {
    observer.observe(element);
  });

  if (window.innerWidth < 1200) {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.classList.remove("card-hover");
    });
  }
});