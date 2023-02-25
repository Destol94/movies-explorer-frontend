import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';

function MoviesCardList(props) {
  return (
    <div className="MoviesCardList">
      {
        props.movieList.map((movie)=> (
          <MoviesCard movie={movie} />
        ))
      }
    </div>
  )
}
export default MoviesCardList;