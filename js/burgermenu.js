// Получаем ссылку на элементы меню
const burgerMenu = document.getElementById('burger-menu');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-btn');

// Функция для открытия меню
function openMenu() {
    overlay.classList.add('open');
}

// Функция для закрытия меню
function closeMenu() {
    overlay.classList.remove('open');
}

// Добавляем обработчики событий
burgerMenu.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);