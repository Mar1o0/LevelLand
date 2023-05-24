window.addEventListener('scroll', function () {
    var headerTop = document.querySelector('.header-top');
    var headerTopHeight = headerTop.offsetHeight;
    var scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition >= headerTopHeight) {
        headerTop.classList.add('fixed');
        headerTop.classList.add('show'); // добавляем класс "show" для плавного спуска
    } else {
        headerTop.classList.remove('fixed');
        headerTop.classList.remove('show'); // удаляем класс "show"
    }
});
