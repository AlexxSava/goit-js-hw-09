const formEl = document.querySelector('.feedback-form');
const emailInputEl = document.querySelector('.input-email');
const messageInputEl = document.querySelector('.input-message');

const STORAGE_KEY = 'feedback-form-state';

const localData = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (localData) {
  emailInputEl.value = localData.email || '';
  messageInputEl.value = localData.message || '';
}

const getTrimmedValue = value => value.value.trim();

const handleFormInput = () => {
  const currentData = {
    email: getTrimmedValue(emailInputEl),
    message: getTrimmedValue(messageInputEl),
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentData));
};

const handleFormSubmit = event => {
  event.preventDefault();

  const email = getTrimmedValue(emailInputEl);
  const message = getTrimmedValue(messageInputEl);

  if (email && message) {
    console.log({ email, message });

    localStorage.removeItem(STORAGE_KEY);

    emailInputEl.value = '';
    messageInputEl.value = '';
  }
};

formEl.addEventListener('input', handleFormInput);
formEl.addEventListener('submit', handleFormSubmit);
