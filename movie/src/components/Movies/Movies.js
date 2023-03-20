import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';


function Movies(props) {
  return (
    <div className="Movies">
      <Header loggedIn={props.loggedIn} handlerOpenNavBar={props.onNavBar} />
      <SearchForm
        searchMovies={props.searchMovies}
        isSaveMovie={props.isSaveMovie}
        checkboxState={props.checkboxState}
        setCheckboxState={props.setCheckboxState}
        searchText={props.searchText}
        setSearchText={props.setSearchText}
      />
      <MoviesCardList
        movieListRender={props.movieList}
        isSaveMovie={props.isSaveMovie}
        handleLoadCard={props.onAddMovieList}
        handleSaveMovie={props.handleSaveMovie}
        handleDeleteMovie={props.handleDeleteMovie}
        fullSaveMovieList={props.fullSaveMovieList}
        resSearch={props.resSearch}
      />
      <Footer />
    </div>
  )
}
export default Movies;