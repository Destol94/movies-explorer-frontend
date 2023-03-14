import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';


function Movies(props) {
  const setLoading = () => { return props.setIsLoading(true) };

  return (
    <div className="Movies">
      <Header loggedIn={props.loggedIn} handlerOpenNavBar={props.onNavBar} />
      <SearchForm
        searchMovies={props.searchMovies}
        setIsLoading={setLoading}
        isLoading={props.isLoading}
        isSaveMovie={props.isSaveMovie}
        checkboxState={props.checkboxState}
        setCheckboxState={props.setCheckboxState}
        searchText={props.searchText}
        setSearchText={props.setSearchText}
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
            isLoading={props.isLoading}
          />
      }

      <Footer />
    </div>
  )
}
export default Movies;