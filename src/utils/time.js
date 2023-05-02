import moment from 'moment';

const MSEC_PER_DAY = 86_400_000;

const daysInMonth = (date = Date.now()) => moment(date).daysInMonth();

const getFormattedDate = (date = Date.now()) => {
  const formattedDate = moment(date).format('YYYY-MM-DD');
  return formattedDate;
};

const getTimestamp = (formattedDate) => {
  const date = new Date(formattedDate);
  const timestamp = moment(date).valueOf();
  return timestamp;
};

const getDay = (date = Date.now()) => new Date(date).getDate();

const getDayName = (date = Date.now()) => moment(date).format('ddd');

const today = () => {
  const formattedDate = getFormattedDate(new Date());
  const timestamp = getTimestamp(formattedDate);
  return timestamp;
};

export {
  MSEC_PER_DAY,
  getTimestamp, getDay,
  getFormattedDate, getDayName,
  daysInMonth,
  today,
};
