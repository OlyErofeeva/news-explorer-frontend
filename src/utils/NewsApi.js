import { NEWS_API_KEY, NEWS_API_LANG, NEWS_API_PAGE_SIZE } from '../configs/newsApiSettings';

const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  const { status, statusText } = res;
  return res.json()
    .then((info) => Promise.reject(new Error(`Что-то пошло не так: ${info.message} (${status} ${statusText})`)));
};

class NewsApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  /**
   * getArticles example response:
    {
      "status": "ok",
      "totalResults": 75,
      "articles": [
        {
          "source": {
              "id": null,
              "name": "Meduza"
          },
          "author": null,
          "title": "article title",
          "description": "article description",
          "url": "https://meduza.io/news/2021/02/18/...",
          "urlToImage": "https://meduza.io/imgly/share/...",
          "publishedAt": "2021-02-18T15:33:40Z",
          "content": "some text"
        },
        {...article-2...},
        {...article-3...},
        {...etc...},
      ]
    }
   * @param {string} keyword
   * @param {string} from, example: '2021-02-18'
   * @param {string} to, example: '2021-02-19'
   */

  getArticles(keyword, from, to) {
    return fetch(`${this._baseUrl}&q=${keyword}&from=${from}&to=${to}`, {
      method: 'GET',
      headers: this._headers,
    }).then((res) => handleResponse(res));
  }
}

const newsApi = new NewsApi({
  baseUrl: `https://nomoreparties.co/news/v2/everything?language=${NEWS_API_LANG}&pageSize=${NEWS_API_PAGE_SIZE}&apiKey=${NEWS_API_KEY}`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default newsApi;
