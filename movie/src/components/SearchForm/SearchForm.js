import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  return (
    <form className="SearchForm" >
      <input className="" placeholder="Фильм" />
      <button type="submit" >Найти</button>
      <FilterCheckbox />
    </form>
  )
}

export default SearchForm;