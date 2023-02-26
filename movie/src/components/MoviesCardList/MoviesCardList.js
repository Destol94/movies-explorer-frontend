import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(props) {
  return (
    <div  className="MoviesCardList">
      <div className="MoviesCardList__container">
        {
          props.movieList.map((movie) => (
            <MoviesCard movie={movie} />
          ))
        }
      </div>
      <button type="button" className="MoviesCardList__btn" >Ещё</button>
    </div>
  )
}
export default MoviesCardList;