const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur)





function onInputBlur() {
    if (inputEl.value.length !== +inputEl.getAttribute('data-length')) {
        inputEl.classList.remove('valid'),
        inputEl.classList.add('invalid')
    }
    else {
         inputEl.classList.remove('invalid'),
        inputEl.classList.add('valid')
    }
}



