const getKeywordsNumeralEnding = (num) => {
  switch (true) {
    case (num > 100):
      return '';
    case (num === 90 || num === 100):
      return '-та';
    case (num === 40):
      return '-ка';
    case ((num < 10 || num > 20) && num % 10 === 1):
      return '-му';
    case ((num < 10 || num > 20) && (num % 10 === 2 || num % 10 === 3 || num % 10 === 4)):
      return '-м';
    case ((num < 10 || num > 20) && (num % 10 === 7 || num % 10 === 8)):
      return '-ми';
    default:
      return '-ти';
  }
};

const getSavedArticleSuffix = (num) => {
  switch (true) {
    case ((num < 10 || num > 20) && num % 10 === 1):
      return 'сохранённая статья';
    case ((num < 10 || num > 20) && (num % 10 === 2 || num % 10 === 3 || num % 10 === 4)):
      return 'сохранённые статьи';
    default:
      return 'сохранённых статей';
  }
};

export { getKeywordsNumeralEnding, getSavedArticleSuffix };
