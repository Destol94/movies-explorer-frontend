// function validInputs() {
//   const inputs = Array.from(document.querySelectorAll('.RouteWithForm__input'));
//   const spanError = document.querySelector('.RouteWithForm__span-error');

//   const inputsValid = inputs.every(input => input.validity.valid === true);
//   if (inputsValid) {
//     spanError.textContent = '';
//   }
//   else {
//     spanError.textContent = 'Что-то пошло не так...';
//   }
// }

// export default validInputs;


import { useCallback, useState } from "react";

//хук управления формой
export function useForm() {
  const [values, setValues] = useState({});

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, setValues };
}

//хук управления формой и валидации формы
export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}