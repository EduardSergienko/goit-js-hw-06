const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// Створюємо елементи за допомогою map()
const items = ingredients.map((item) => {
  
const ingItem = document.createElement('li')
  ingItem.textContent = item
  ingItem.classList.add('item')

  return ingItem
})

// Знаходимо список в розмітці
const listEl = document.querySelector('#ingredients');

// Розпиляємо та додаємо елементи
listEl.append(...items)


