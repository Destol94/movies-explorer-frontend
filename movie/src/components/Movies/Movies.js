import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';


function Movies(props) {
  console.log(props.isLoading);
  function setLoading () {
    props.setIsLoading(true);
  }
  return (
    <div className="Movies">
      <Header loggedIn={props.loggedIn} handlerOpenNavBar={props.onNavBar} />
      <SearchForm
        searchMovies={props.searchMovies}
        setIsLoading={setLoading}
      />
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
            fullSaveMovieList={props.fullSaveMovieList}
            resSearch={props.resSearch}
          />
      }

      <Footer />
    </div>
  )
}
export default Movies;