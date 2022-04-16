// Посчитано и выведено в консоль количество категорий в ul#categories
const categoriesEl = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesEl.children.length}`);


const categoryItems = document.querySelectorAll('.item');


categoryItems.forEach((category) => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Category: ${category.lastElementChild.children.length}`);
})