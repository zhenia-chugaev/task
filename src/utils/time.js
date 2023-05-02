import moment from 'moment';

const MSEC_PER_DAY = 86_400_000;

const getFormattedDate = (date = Date.now()) => {
  const formattedDate = moment(date).format(moment.HTML5_FMT.DATE);
  return formattedDate;
};

const getTimestamp = (formattedDate) => {
  const date = new Date(formattedDate);
  const timestamp = moment(date).valueOf();
  return timestamp;
};

const today = () => {
  const formattedDate = getFormattedDate(new Date());
  const timestamp = getTimestamp(formattedDate);
  return timestamp;
};

const daysInMonth = (date = Date.now()) => moment(date).daysInMonth();

const getDay = (date = Date.now()) => new Date(date).getDate();

const getDayName = (date = Date.now()) => moment(date).format('ddd');

export {
  MSEC_PER_DAY,
  getTimestamp, getDay,
  getFormattedDate, getDayName,
  daysInMonth,
  today,
};
