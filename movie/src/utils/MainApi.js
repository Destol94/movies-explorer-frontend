class MainApi {
  constructor(setting) {
    this._adress = setting.baseUrl;
    this._headers = setting.headers;
  }

}
const mainApi = new MainApi({
  baseUrl: '',
  headers: {
    "Content-Type": "application/json",
  }
})
export default mainApi;