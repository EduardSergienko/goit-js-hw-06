const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault()

    if (event.currentTarget.elements.email.value === '' || event.currentTarget.elements.password.value === '') {
        alert('Будь ласка, заповніть всі поля форми!')
    }
    else {
         const email = event.currentTarget.elements.email.value
         const password = event.currentTarget.elements.password.value

         const FormData = {
         email, password
    }
        console.log(FormData);
    }
   
    event.currentTarget.reset();
}