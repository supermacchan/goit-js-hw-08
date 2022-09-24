import throttle from 'lodash.throttle';

const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');
const user = {
    email: '',
    message: '',
}

emailInput.addEventListener('input', throttle(onEmailInput, 500));
messageInput.addEventListener('input', throttle(onMessageInput, 500));

function onEmailInput(e) {
    user.email = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(user));
}

function onMessageInput(e) {
    user.message = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(user));
}


