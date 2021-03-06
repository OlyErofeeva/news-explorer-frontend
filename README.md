# News Explorer

### Фронтенд приложения для поиска новостей и сохранения статей в личном кабинете.

https://oly-news.students.nomoredomains.icu/

Powered by News API: https://newsapi.org/

### REST API:

* https://api.oly-news.students.nomoredomains.icu
* репозиторий: https://github.com/OlyErofeeva/news-explorer-api

## Используемый стек:

* React JS (functional components)
* CSS
* БЭМ
* Webpack

## Команды, которые можно запустить, находясь в директории проекта:

### `npm run dev`

:gear: Запускает приложение в режиме разработки

### `npm run start`

:toolbox: Собирает продакшен-версию в папку `build`


## Планы по доработке проекта:

* Удалять дублирующиеся статьи из ответа News API
* Доработать функцию сокращения заголовков и текста в карточках: 
* * сделать разные значения допустимой длины строки в зависимости от ширины вьюпорта
* * сокращать текст до ближайшего пробела (если он есть)
* Рендерить по 4 карточки на разрешениях, где сетка перестраивается в 2 колонки. По кнопке "Показать еще" дорисовывать еще по 4.
* Использовать хуки useCallback и useReducer, где необходимо
* Сделать плавные анимации отрисовки появления карточек, мобильного хедера и т.д.
* Заменить текст ошибки "Failed to fetch" на более подходящий
* Доработать кейс, когда после удаления карточки со страницы Сохраненных статей она все еще отмечена закладкой на главной странице
* Прописать PropTypes и убрать исключение для линтера
* Переписать css классы с использованием библиотеки classnames
* Вынести в микс стили для типографики и, возможно, отступы секций
* Добавить запрос на подтверждение выхода из приложения и удаления сохраненных новостей
* Для keyword-ов из 2 и более слов есть смысл писать с заглавной каждое слово (Elon Musk вместо Elon musk)
* Для авторизации вместо localStorage использовать cookies
