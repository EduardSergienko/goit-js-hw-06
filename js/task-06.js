const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur)

// ==========Короткий запис функції================

function onInputBlur() {
     inputEl.value.length !== +inputEl.getAttribute('data-length') ? inputEl.classList.add('invalid') : inputEl.classList.replace('invalid', 'valid')
    }
  


// function onInputBlur() {
//     if (inputEl.value.length < +inputEl.getAttribute('data-length')) {
//         inputEl.classList.add('invalid')
//     }
//     else if (inputEl.value.length === +inputEl.getAttribute('data-length')) {
//         inputEl.classList.replace('invalid', 'valid')
//     }
//     else {
//         inputEl.classList.replace('valid', 'invalid')
//     }
// }



// =============Альтернативи==========================
    
// function onInputBlur() {
//     if (inputEl.value.length < +inputEl.getAttribute('data-length') || inputEl.value.length > +inputEl.getAttribute('data-length')) {
//         inputEl.classList.add('invalid')
//     }
//     else {
//         inputEl.classList.replace('invalid', 'valid')
//     }
// }




// function onInputBlur() {
//     if (inputEl.value.length !== +inputEl.getAttribute('data-length')) {
//         inputEl.classList.add('invalid')
//     }
//     else {
//         inputEl.classList.replace('invalid', 'valid')
//     }
// }