import './FilterCheckbox.css';

function FilterCheckbox(props) {
  return (
    <div className="FilterCheckbox">
      <label className="FilterCheckbox__label">
        <input type="checkbox" className="FilterCheckbox__input" checked={props.checkboxState} onChange={props.handleChangeCheckBox} />
        <p className="FilterCheckbox__text">Короткометражки</p>
      </label>
    </div>
  )
}

export default FilterCheckbox;