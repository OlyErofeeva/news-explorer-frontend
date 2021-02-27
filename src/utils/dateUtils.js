const daysToMsec = (daysNum) => daysNum * 24 * 60 * 60 * 1000;

const dateToDisplay = (date) => `${new Date(Date.parse(date)).toLocaleString('ru', {
  month: 'long',
  day: 'numeric',
})}, ${new Date(Date.parse(date)).toLocaleString('ru', {
  year: 'numeric',
})}`;

export { daysToMsec, dateToDisplay };
