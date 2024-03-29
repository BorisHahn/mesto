class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._config = {headers:options.headers};
  }

  getUserData() {
    return fetch(this._baseUrl + '/users/me', this._config)
      .then(res => this._getResponseData(res));
  }

  getCards() {
    return fetch(this._baseUrl + '/cards', this._config)
      .then(res => this._getResponseData(res));
  }

  setUserData(body) {
    const config = Object.assign({body: JSON.stringify(body), method: 'PATCH'}, this._config);
    return fetch(this._baseUrl + '/users/me', config)
      .then(res => this._getResponseData(res));
  }

  addNewCard(body) {
    const config = Object.assign({body: JSON.stringify(body), method: 'POST'}, this._config);
    return fetch(this._baseUrl + '/cards', config)
      .then(res => this._getResponseData(res));
  }

  deleteCard(id) {
    const config = Object.assign({method: 'DELETE'}, this._config);
    return fetch(this._baseUrl + `/cards/${id}`, config)
      .then(res => this._getResponseData(res));
  }

  likeCard(id) {
    const config = Object.assign({method: 'PUT'}, this._config);
    return fetch(this._baseUrl + `/cards/likes/${id}`, config)
      .then(res => this._getResponseData(res));
  }

  dislikeCard(id) {
    const config = Object.assign({method: 'DELETE'}, this._config);
    return fetch(this._baseUrl + `/cards/likes/${id}`, config)
      .then(res => this._getResponseData(res));
  }

  setNewAvatar(body) {
    const config = Object.assign({body: JSON.stringify(body), method: 'PATCH'}, this._config);
    return fetch(this._baseUrl + '/users/me/avatar', config)
      .then(res => this._getResponseData(res));
  }

  _getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`); 
    } 
    return res.json();
  }
}

const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/cohort-47',
  headers: {
    authorization: 'd0ac06bd-d482-4ba5-981e-c7cee51801d4',
    'Content-Type': 'application/json'
  }
}); 


export default api;