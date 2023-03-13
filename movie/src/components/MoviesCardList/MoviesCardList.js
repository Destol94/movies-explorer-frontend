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
              fullSaveMovieList={props.fullSaveMovieList}
            />
          ))
        }
      </div>
      {
        props.movieListRender.length > 3
        &&
        (props.resSearch ?
          props.resSearch.length > props.movieListRender.length
          :
          (props.isLoading ?
            (props.fullSaveMovieList.length > props.movieListRender.length)
            :
            true
          )
        )
        &&
        <button onClick={props.handleLoadCard} type="button" className="MoviesCardList__btn" >Ещё</button>
      }
    </div>
  )
}
export default MoviesCardList;