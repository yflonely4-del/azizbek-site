// Находим главный контейнер и все вкладки меню
const container = document.querySelector(".navbarContainer");
const navItems = document.querySelectorAll(".nav-item");

// Добавляем событие клика для каждой вкладки
navItems.forEach((item) => {
  item.addEventListener("click", () => {
    // 1. Находим текущую активную вкладку и убираем у неё класс 'active'
    const currentActive = document.querySelector(".nav-item.active");
    if (currentActive) {
      currentActive.classList.remove("active");
    }

    // 2. Добавляем класс 'active' той вкладке, на которую кликнули
    item.classList.add("active");

    // 3. Берем цвет из атрибута data-color нажатой вкладки
    const newColor = item.getAttribute("data-color");

    // 4. Меняем цвет фона у главного контейнера
    if (container && newColor) {
      container.style.backgroundColor = newColor;
    }
  });
});
