import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className="FilterCheckbox">
      <label className="FilterCheckbox__label">
        <input type="checkbox" className="FilterCheckbox__input" />
        <p className="FilterCheckbox__text">Короткометражки</p>
      </label>
    </div>
  )
}

export default FilterCheckbox;