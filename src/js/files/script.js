// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

// Добавление формы поиска в header
document.addEventListener("click", formHeaderActive);
function formHeaderActive(e) {
  const formHeader = document.querySelector(`.form-header`);
  const headerItem = document.querySelector(`.header`);
  const targetElement = e.target;
  if (targetElement.closest(`.user-header__search`)) {
    formHeader.classList.add("form-header__active");
    headerItem.classList.add("header__active");
    e.preventDefault();
  } else if (targetElement.closest(`.form-header`)) {
    formHeader.classList.add("form-header__active");
    headerItem.classList.add("header__active");
    e.preventDefault();
  } else if (!targetElement.closest(`.user-header__search`)) {
    formHeader.classList.remove("form-header__active");
    headerItem.classList.remove("header__active");
    e.preventDefault();
  }
}
