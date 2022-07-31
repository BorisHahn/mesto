class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._config = {headers:options.headers};
  }

  getUserData() {
    return fetch(this._baseUrl + '/users/me', this._config)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      });
  }

  getCards() {
    return fetch(this._baseUrl + '/cards', this._config)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      });
  }

  setUserData(body) {
    const config = Object.assign({body: JSON.stringify(body), method: 'PATCH'}, this._config);
    return fetch(this._baseUrl + '/users/me', config)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      });
  }

  addNewCard(body) {
    const config = Object.assign({body: JSON.stringify(body), method: 'POST'}, this._config);
    return fetch(this._baseUrl + '/cards', config)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      });
  }

  deleteCard(id) {
    const config = Object.assign({method: 'DELETE'}, this._config);
    return fetch(this._baseUrl + `/cards/${id}`, config)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      });
  }

  likeCard(id) {
    const config = Object.assign({method: 'PUT'}, this._config);
    return fetch(this._baseUrl + `/cards/likes/${id}`, config)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      });
  }

  dislikeCard(id) {
    const config = Object.assign({method: 'DELETE'}, this._config);
    return fetch(this._baseUrl + `/cards/likes/${id}`, config)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      });
  }

  setNewAvatar(body) {
    const config = Object.assign({body: JSON.stringify(body), method: 'PATCH'}, this._config);
    return fetch(this._baseUrl + '/users/me/avatar', config)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      });
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