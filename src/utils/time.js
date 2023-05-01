import moment from 'moment';

const getFormattedDate = (date = Date.now()) => {
  const formattedDate = moment(date).format('YYYY-MM-DD');
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

export { getTimestamp, getFormattedDate, today };
