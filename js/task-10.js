// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. 


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('#controls > input');

const createBtnEl = document.querySelector('[data-create]');

const destroyBtnEl = document.querySelector('[data-destroy]');

const newBoxes = document.querySelector('#boxes');



createBtnEl.addEventListener('click', () => createBoxes(inputEl.value))
destroyBtnEl.addEventListener('click', destroyBoxes)

let startSize = 30

function createBoxes(amount) {
  
  let elements = document.createDocumentFragment()
  for (let i = 0; i < amount; i+=1) {
    
    let element = document.createElement('div')
    startSize +=10
    element.style.cssText = `width: ${startSize}px; height: ${startSize}px; background-color: ${getRandomHexColor()}`
    
    elements.append(element);
    
  }
  newBoxes.append(elements);

}

function destroyBoxes() {
  newBoxes.innerHTML = ''
  inputEl.value = ''
  startSize = 30
}
