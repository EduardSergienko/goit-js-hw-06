
const inputEl = document.querySelector('#name-input');
const nameOut = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputNameIn)

function onInputNameIn(event) {
nameOut.textContent = event.currentTarget.value
    
    if (event.currentTarget.value === '') {
      nameOut.textContent =  'Anonymous'
    }
    
   
}

