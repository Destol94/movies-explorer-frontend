import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';


function Movies(props) {
  const testMovie = [
    {
    },
    {
    },{
    },{
    },
  ]
    

return (
  <div className="Movies">
    <Header loggedIn={props.loggedIn} />
    <SearchForm />
    <MoviesCardList movieList={testMovie} />
  </div>
)
}
export default Movies;