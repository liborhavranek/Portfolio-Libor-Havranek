function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function fillProgressBar(progressBar) {
  const progressBarWidth = progressBar.offsetWidth;
  const progressBarPosition = progressBar.getBoundingClientRect().top;
  const targetWidth = progressBar.getAttribute("data-percent");
  const progressBarFilledClass = "filled";

  if (!progressBar.classList.contains(progressBarFilledClass)) {
    const scrollY = window.scrollY || window.pageYOffset;
    const scrollPercent =
      (scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100;

    if (scrollPercent >= targetWidth) {
      progressBar.style.width = targetWidth + "%";
      progressBar.classList.add(progressBarFilledClass);
    } else {
      progressBar.style.width = "0%";
      progressBar.classList.remove(progressBarFilledClass);

      setTimeout(() => {
        progressBar.style.width = targetWidth + "%";
        progressBar.classList.add(progressBarFilledClass);
      }, 100);
    }
  }
}

function handleScroll() {
  const progressBars = document.querySelectorAll(".bar");

  progressBars.forEach((progressBar) => {
    if (isInViewport(progressBar)) {
      fillProgressBar(progressBar);
    }
  });
}

window.addEventListener("scroll", handleScroll);