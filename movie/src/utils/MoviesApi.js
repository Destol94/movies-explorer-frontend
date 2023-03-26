class Api {
  constructor(setting) {
    this._adress = setting.baseUrl;
    this._headers = setting.headers;
  }
  _getResponseDate(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }
  getDefaultMovieList() {
    return fetch('https://api.nomoreparties.co/beatfilm-movies', {
      method: "GET",
      headers: this._headers,
    })
      .then(res => { return this._getResponseDate(res) });
  }
}

const api = new Api ({
  baseUrl: '',
  headers: {
    "Content-Type": "application/json",
  }
});
export default api;