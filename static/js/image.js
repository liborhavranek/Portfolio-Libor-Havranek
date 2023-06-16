window.addEventListener('scroll', function() {
    var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    var imgOffset = document.querySelector('.certificate-image').offsetTop;
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;

    if (scrollPos > imgOffset - windowHeight/2) {
        document.querySelector('.certificate-image').classList.add('zoom-effect');
    } else {
        document.querySelector('.certificate-image').classList.remove('zoom-effect');
    }
});