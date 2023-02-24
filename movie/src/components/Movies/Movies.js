import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';

function Movies(props) {
  return (
    <div className="Movies">
      <Header loggedIn={props.loggedIn} />
      <SearchForm />
    </div>
  )
}
export default Movies;