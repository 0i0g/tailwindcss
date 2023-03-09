import moment from 'moment';

export type DateRange = {
  startDate: moment.Moment | null;
  endDate: moment.Moment | null;
};
