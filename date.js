const getDate = () => {
  let today = new Date();
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  let day = today.toLocaleDateString('en-US', options);
  return day;
};
const getDay = () => {
  const today = new Date();
  const options = {
    weekday: 'long'
  };
  let day = today.toLocaleDateString('en-US', options);
  return day;
};
module.exports = {
  mDate: getDate,
  mDay: getDay
};
