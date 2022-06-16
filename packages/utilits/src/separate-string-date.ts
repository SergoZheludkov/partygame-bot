interface SeparateDate {
  day: number;
  month: number;
  year: number;
}
type SeparateStringDate = (date: string) => SeparateDate;

export const separateStringDate: SeparateStringDate = (date) => {
  const [day, month, year] = date.split('.').map(Number);
  return { day, month, year };
};
