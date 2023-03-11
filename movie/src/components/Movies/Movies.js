import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';


function Movies(props) {
  return (
    <div className="Movies">
      <Header loggedIn={props.loggedIn} handlerOpenNavBar={props.onNavBar} />
      <SearchForm onLoadMovieList={props.onLoadMovieList} setIsLoading={props.setIsLoading} />
      {
        props.isLoading ? 
        <Preloader /> :
        props.movieList.length !== 0 &&
        <MoviesCardList
          movieListRender={props.movieList}
          isSaveMovie={props.isSaveMovie}
          handleLoadCard={props.onAddMovieList}
          handleSaveMovie={props.handleSaveMovie}
          handleDeleteMovie={props.handleDeleteMovie}
          saveMovieList={props.saveMovieList}
        />
      }

      <Footer />
    </div>
  )
}
export default Movies;