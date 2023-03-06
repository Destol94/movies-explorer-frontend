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
  return checkResposne(res);
}

export const autorization = async(email, password) => {
  const res = fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "email": `${email}`,
      "password": `${password}`
    })
  })
  return checkResposne(res);
}

const checkResposne = res => {
  return res.ok ? res.json() : Promise.reject(`${res.statusText}`);
}

// class MainApi {
//   constructor(setting) {
//     this._adress = setting.baseUrl;
//     this._headers = setting.headers;
//   }

//   _getResponseDate(res) {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(`Ошибка: ${res.status}`);
//   }
//   createUser() {

//   }
//   saveMovie(card) {
//     return fetch(`${this._adress}/movie/${card}`, {
//       method: "POST",
//       headers: this._headers,
//     })
//       .then(res => { return this._getResponseDate(res) })
//   }
//   deleteMovie(id) {
//     return fetch(`${this._adress}/movie/${id}`, {
//       method: "DELETE",
//       headers: this._headers
//     })
//       .then(res => { return this._getResponseDate(res) })
//   }
// }

// const mainApi = new MainApi({
//   baseUrl: 'http://localhost:3001',
//   headers: {
//     "Content-Type": "application/json",
//   }
// })
// export default mainApi;