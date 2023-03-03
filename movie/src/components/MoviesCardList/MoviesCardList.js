import MoviesCard from '../MoviesCard/MoviesCard';
import './MoviesCardList.css';



function MoviesCardList(props) {
   
  return (
    <div  className="MoviesCardList">
      <div className="MoviesCardList__container">
        {
          props.movieListRender.map((movie, id) => (
            <MoviesCard movie={movie} key={id} saveMovie={props.saveMovie} />
          ))
        }
      </div>
      <button onClick={props.handleLoadCard} type="button" className="MoviesCardList__btn" >Ещё</button>
    </div>
  )
}
export default MoviesCardList;