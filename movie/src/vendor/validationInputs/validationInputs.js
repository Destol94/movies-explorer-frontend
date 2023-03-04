function validInputs() {
  const inputs = Array.from(document.querySelectorAll('.RouteWithForm__input'));
  const spanError = document.querySelector('.RouteWithForm__span-error');

  const inputsValid = inputs.every(input => input.validity.valid === true);
  if (inputsValid) {
    spanError.textContent = '';
  }
  else {
    spanError.textContent = 'Что-то пошло не так...';
  }
}

export default validInputs;