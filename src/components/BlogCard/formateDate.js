import { formatDistanceToNow, lightFormat } from 'date-fns';

export const newDate = date => {
  return formatDistanceToNow(date, { addSuffix: true });
};
export const newDateClock = date => {
  return lightFormat(date, 'MM/dd/yyyy, HH:mm aa');
};
