import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  return (
    <div className="SearchForm">
      <form className="SearchForm__box" >
        <input className="SearchForm__input" placeholder="Фильм" />
        <button className="SearchForm__btn-submit" type="submit" >Найти</button>
        <div className="SearchForm__line"></div>
        <FilterCheckbox />
      </form>
      <div className="line" />
    </div>
  )
}

export default SearchForm;