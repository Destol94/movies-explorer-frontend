const BASE_URL = 'http://localhost:3001';

export const registration = async (name, email, password) => {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "name": `${name}`,
      "email": `${email}`,
      "password": `${password}`
    })
  })
  return checkResponse(res);
}

export const autorization = async (email, password) => {
  const res = await fetch(`${BASE_URL}/signin`, {
    method: "POST",
    credentials: 'include',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "email": `${email}`,
      "password": `${password}`
    })
  })
  return checkResponse(res);
}

export const loadMovieList = async () => {
  const res = await fetch(`${BASE_URL}/movies`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  })
  return checkResponse(res);
}

export const saveMovie = async (movie) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    nameRU,
    nameEN } = movie;
  const res = await fetch(`${BASE_URL}/movies`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "country": `${country}`,
      "director": `${director}`,
      "duration": `${duration}`,
      "year": `${year}`,
      "description": `${description}`,
      "image": `https://api.nomoreparties.co/${image.url}`,
      "trailerLink": `${trailerLink}`,
      "nameRU": `${nameRU}`,
      "nameEN": `${nameEN}`,
      "thumbnail": `https://api.nomoreparties.co/${image.formats.thumbnail.url}`,
      "movieId": `${movie.id}`
    })
  })
  return checkResponse(res);
}

export const deleteMovie = async(id) => {
  const res = await fetch(`${BASE_URL}/movies/${id}`, {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
  })
  return checkResponse(res);
}

export const changeProfile = async (email, name) => {
  const res = await fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "email": `${email}`,
      "name": `${name}`
    })
  })
  return checkResponse(res);
}

export const checkToken = async () => {
  const res = await fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
  })
  return checkResponse(res);
}


export const logout = async() => {
  const res = await fetch(`${BASE_URL}/signout`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
  })
  return checkResponse(res);
}
const checkResponse = res => {
  return res.ok ? res.json() : Promise.reject(`${res.statusText}`);
}