function convectorFilmDuration(duration) {
  const hour = duration > 60 ? Math.trunc(duration / 60) : '';
  const minutes = duration > 60 ? duration % 60 : duration;
  return `${hour && `${hour}ч`} ${minutes}м`;
}

const twoFilmsAdd = 2;
const threeFilmsAdd = 3;
const shortFilmDuration = 41;

export {convectorFilmDuration , twoFilmsAdd, threeFilmsAdd, shortFilmDuration};
