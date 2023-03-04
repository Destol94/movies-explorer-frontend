import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm(props) {
  
  function handleSubmit(e){
    debugger;
    e.preventDefault();
    props.onLoadMovieList();
  }
  return (
    <div className="SearchForm">
      <form className="SearchForm__box" onSubmit={handleSubmit}>
        <div className="SearchForm__container-search">
          <input className="SearchForm__input" placeholder="Фильм" required />
          <button className="SearchForm__btn-submit" type="submit" >Найти</button>
          <div className="SearchForm__line" />
        </div>
        <FilterCheckbox />
      </form>
      <div className="line" />
    </div>
  )
}

export default SearchForm;