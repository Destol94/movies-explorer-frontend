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
  const handleChangeName = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    if (value.length > 2 && (!/[еЁA-zА-я-\ ]*/.exec(value)[0] || /[еЁA-zА-я-\ ]*/.exec(value)[0] !== value)) {
      setErrors({...errors, [name]: 'поле должно состоять из латиницы, кириллицы, пробелов или дефисов'});
      setIsValid(false);
    } else {setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());}
  };
  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, handleChangeName, errors, isValid, resetForm, setValues };
}