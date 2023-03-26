import { useCallback, useState } from "react";

export function useForm() {
  const [values, setValues] = useState({});

  const handleChange = (event) => {
    const target = event.target;
    console.log(target)
    const value = target.value;
    const name = target.name;
    setValues({ ...values, [name]: value });
  };

  return { values, handleChange, setValues };
}

export function useFormWithValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };
  const handleChangeName = (e, setName) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setName(e.target.value);
    if (value.length > 2 && (!/[еЁA-zА-я-\ ]*/.exec(value)[0] || /[еЁA-zА-я-\ ]*/.exec(value)[0] !== value)) {
      setErrors({ ...errors, [name]: 'поле должно состоять из латиницы, кириллицы, пробелов или дефисов' });
      setIsValid(e.target.closest("form").disabled = false);
    } else {
      setErrors({ ...errors, [name]: target.validationMessage });
      setIsValid(target.closest("form").checkValidity());
    }
  };
  const handleChangeEmail = (e, setEmail) => {
    setEmail(e.target.value);
    const isValid = String(e.target.value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    if (!isValid) {
      setErrors({ ...errors, email: 'Некорректный email' });
      setIsValid(e.target.closest("form").disabled = false);
      e.target.classList.add('RouteWithForm__input_invalid');
    }
    else {
      setErrors({ ...errors, email: '' });
      setIsValid(e.target.closest("form").checkValidity());
      e.target.classList.remove('RouteWithForm__input_invalid');
    };
  }
  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, handleChangeName, handleChangeEmail, errors, isValid, resetForm, setValues };
}