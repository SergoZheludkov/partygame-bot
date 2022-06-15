import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

type GetFormattedDate = (date: string) => string;
export const getFormattedDate: GetFormattedDate = (date) => format(parseISO(date), 'dd / MM / yyyy');
