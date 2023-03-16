import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm(props) {
  function changeCheckBox() {
    props.setCheckboxState(!props.checkboxState);
  }
  const [errorText, setErrorText] = useState('');
  function handleChangeSearchText(e) {
    props.setSearchText(e.target.value);
    if (e.target.value.length < 2) {
      setErrorText('Нужно ввести ключевое слово');
    } else { setErrorText(e.target.validationMessage) }
  }
  const [isFound, setIsFound] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    const resLenght = props.searchMovies(props.searchText, props.checkboxState);
    if (resLenght === 0) {
      setIsFound(true);
    }
  }
  return (
    <div className="SearchForm">
      <form className="SearchForm__box" onSubmit={handleSubmit}>
        <div className="SearchForm__container-search">
          <input className="SearchForm__input" value={props.searchText} onChange={handleChangeSearchText} placeholder="Фильм" required maxLength="20" />
          <button className="SearchForm__btn-submit" type="submit" >Найти</button>
          <div className="SearchForm__line" />
        </div>
        <FilterCheckbox checkboxState={props.checkboxState} handleChangeCheckBox={changeCheckBox} />
        <span className="SearchForm__box_span-error">{errorText}</span>
        {
          isFound && <span className="SearchForm__box-found">Ничего не найдено</span>
        }
      </form>
      <div className="line" />
    </div>
  )
}

export default SearchForm;