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

// Находим второй элемент в списке категорий
const secondCatEl = firstCatEl.nextElementSibling

// Выводим название категории
const secondCatElTitle = secondCatEl.firstElementChild.textContent
console.log(`Category: ${secondCatElTitle}`);

// Ищем список подкатегорий и выводим их количество
const secondCatSubEl = secondCatEl.lastElementChild
console.log(`Elements: ${secondCatSubEl.children.length}`);

// Находим третий элемент в списке категорий
const thirdCatEl = secondCatEl.nextElementSibling

// Выводим название категории
const thirdCatElTitle = thirdCatEl.firstElementChild.textContent
console.log(`Category: ${thirdCatElTitle}`);

// Ищем список подкатегорий и выводим их количество
const thirdCatSubEl = thirdCatEl.lastElementChild
console.log(`Elements: ${thirdCatSubEl.children.length}`);