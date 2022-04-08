// Обираємо необхідні посилання

const decremBtn = document.querySelector('[data-action="decrement"]');
const incremBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

// встановлюємо значення лічильника по замовчуванню
let counterVal = 0

// Вішаємо прослушку
incremBtn.addEventListener('click', onIncremBtnClick)
decremBtn.addEventListener('click',onDecremBtnClick)


// Функція -
function onDecremBtnClick() {
    
 valueEl.textContent = counterVal -= 1
    
    
 // Функція +
}
function onIncremBtnClick() {
    
    valueEl.textContent = counterVal += 1
    
    
}