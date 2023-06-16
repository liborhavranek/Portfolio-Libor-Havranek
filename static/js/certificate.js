function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function showCertificates() {
    const certificateDivs = document.querySelectorAll('.certificate-div');
    certificateDivs.forEach((div, index) => {
        if (isInViewport(div)) {
            div.classList.add('show');
        } else {
            div.classList.remove('show');
        }
    });
}

window.addEventListener('scroll', showCertificates);