// Посчитано и выведено в консоль количество категорий в ul#categories
const categoriesEl = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesEl.children.length}`);


// Находим первый элемент в списке категорий
const firstCatEl = categoriesEl.firstElementChild

// Выводим название категории
const firstCatElTitle = firstCatEl.firstElementChild.textContent
console.log(`Category: ${firstCatElTitle}`);

// Ищем список подкатегорий и выводим их количество
const firstCatSubEl = firstCatEl.lastElementChild
console.log(`Elements: ${firstCatSubEl.children.length}`);


