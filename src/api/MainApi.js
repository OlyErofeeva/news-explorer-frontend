const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  const { status, statusText } = res;
  return res.json()
    .then((info) => Promise.reject(new Error(`Что-то пошло не так: ${info.message} (${status} ${statusText})`)));
};

class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  /**
   * signUp example response:
    {
      "_id": "602eade7c4057e1615b00000"
    }

   * @param {string} password
   * @param {string} email
   * @param {string} name
   */

  signUp(email, password, name) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password, name }),
    }).then((res) => handleResponse(res));
  }

  /**
   * signIn example response:
    {
      "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjUx"
    }

   * @param {string} password
   * @param {string} email
   */

  signIn(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({ email, password }),
    }).then((res) => handleResponse(res));
  }

  /**
   * getCurrentUserInfo example response:
    {
      "_id": "600c4231c4057e1615b01219",
      "email": "example@yandex.ru",
      "name": "Johnny Silverhand",
      "__v": 0
    }

   * @param {string} token
   */

  getCurrentUserInfo(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => handleResponse(res));
  }

  /**
   * getBookmarkedArticles example response:
    [
      {
        "_id": "602553d8c4057e1615b0121a",
        "keyword": "keyword",
        "title": "title",
        "text": "text",
        "date": "timestamp",
        "source": "source",
        "link": "https://article-url.example.com/",
        "image": "https://img-url.example.com/",
        "__v": 0
      },
      {
        "_id": "602553d8c4057e1615b0121b",
        "keyword": "keyword-2",
        "title": "title-2",
        "text": "text-2",
        "date": "timestamp-2",
        "source": "source-2",
        "link": "https://article-2-url.example.com/",
        "image": "https://img-2-url.example.com/",
        "__v": 0
      }
    ]

   * @param {string} token
   */

  getBookmarkedArticles(token) {
    return fetch(`${this._baseUrl}/articles`, {
      method: 'GET',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => handleResponse(res));
  }

  /**
   * createArticleBookmark example response:
    {
      "_id": "602ed019c4057e1615b0121f"
    }

   * @param {string} token
   * @param {object} article
   */

  createArticleBookmark(token, article) {
    return fetch(`${this._baseUrl}/articles`, {
      method: 'POST',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        keyword: article.keyword,
        title: article.title,
        text: article.text,
        date: article.date,
        source: article.source,
        link: article.link,
        image: article.image,
      }),
    }).then((res) => handleResponse(res));
  }

  removeArticleBookmark(token, articleId) {
    return fetch(`${this._baseUrl}/articles/${articleId}`, {
      method: 'DELETE',
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => handleResponse(res));
  }
}

const mainApi = new MainApi({
  baseUrl: 'https://api.oly-news.students.nomoredomains.icu',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default mainApi;
