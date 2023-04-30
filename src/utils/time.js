import { format, getTime } from 'date-fns';

const getFormattedDate = (date = Date.now()) => {
  const formattedDate = format(date, 'yyyy-MM-dd');
  return formattedDate;
};

const getTimestamp = (formattedDate) => {
  const timestamp = getTime(new Date(formattedDate));
  return timestamp;
};

const today = () => {
  const formattedDate = getFormattedDate(new Date());
  const timestamp = getTimestamp(formattedDate);
  return timestamp;
};

export { getTimestamp, getFormattedDate, today };
