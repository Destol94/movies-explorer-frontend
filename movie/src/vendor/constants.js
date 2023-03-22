function convectorFilmDuration(duration) {
  const hour = duration > 60 ? Math.trunc(duration / 60) : '';
  const minutes = duration > 60 ? duration % 60 : duration;
  return `${hour && `${hour}ч`} ${minutes}м`;
}

const twoFilms = 2;
const threeFilms = 3;
const shortFilmDuration = 41;

export {convectorFilmDuration , twoFilms, threeFilms, shortFilmDuration};
