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


// =================Функція===========================

// // Створюємо функцію

// const makeListItems = array => {
//  return array.map((item) => {
  
// const ingItem = document.createElement('li')
//   ingItem.textContent = item
//   ingItem.classList.add('item')

//   return ingItem
// })
// }
// // Викликаємо функцію
// const items = makeListItems(ingredients)
 
// // Знаходимо список в розмітці
// const listEl = document.querySelector('#ingredients');

// // Розпиляємо та додаємо елементи
// listEl.append(...items)