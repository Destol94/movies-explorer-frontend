import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm(props) {
  
  const stateCheckBox = localStorage.getItem('checkboxState');
  const [checkboxState, setCheckboxState] = useState(JSON.parse(stateCheckBox) || false);
  function changeCheckBox() {
    setCheckboxState(!checkboxState);
  }

  const textSearchInput = localStorage.getItem('searchText');
  const [searchText, setSearchText] = useState(textSearchInput || '');
  function handleChangeSearchText(e) {
    setSearchText(e.target.value);
  }
  
  function handleSubmit(e){
    e.preventDefault();
    props.setIsLoading(true);
    props.onLoadMovieList(searchText, checkboxState);
  }
  return (
    <div className="SearchForm">
      <form className="SearchForm__box" onSubmit={handleSubmit}>
        <div className="SearchForm__container-search">
          <input className="SearchForm__input" value={searchText} onChange={handleChangeSearchText} placeholder="Фильм" required />
          <button className="SearchForm__btn-submit" type="submit" >Найти</button>
          <div className="SearchForm__line" />
        </div>
        <FilterCheckbox checkboxState={checkboxState} handleChangeCheckBox={changeCheckBox} />
      </form>
      <div className="line" />
    </div>
  )
}

export default SearchForm;