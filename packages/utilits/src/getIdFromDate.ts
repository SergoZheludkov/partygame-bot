import format from 'date-fns/format';

type GetIdFromDate = (date: Date) => number;
export const getIdFromDate: GetIdFromDate = (date) => Number(format(date, 'yyyyMMdd'));
