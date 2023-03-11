import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';



function MoviesCardList(props) {
  return (
    <div className="MoviesCardList">
      <div className="MoviesCardList__container">
        {
          props.movieListRender.map((movie, id) => (
            <MoviesCard movie={movie} key={id} isSaveMovie={props.isSaveMovie}
              handleSaveMovie={props.handleSaveMovie}
              handleDeleteMovie={props.handleDeleteMovie}
              saveMovieList={props.saveMovieList}
            />
          ))
        }
      </div>
      {
        props.movieListRender.length > 3 &&
        <button onClick={props.handleLoadCard} type="button" className="MoviesCardList__btn" >Ещё</button>
      }

    </div>
  )
}
export default MoviesCardList;