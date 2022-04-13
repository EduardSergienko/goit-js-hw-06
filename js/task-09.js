function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const changeBtnEl = document.querySelector('.change-color');

const boxEl = document.querySelector('.widget');
const bodyEl = document.querySelector('body');
const boxSpanEl = document.querySelector('.color');


changeBtnEl.addEventListener('click', onChangeColorBtnClick)

function onChangeColorBtnClick(){
  bodyEl.style.backgroundColor = getRandomHexColor()
  
  boxSpanEl.textContent = getRandomHexColor()

}

