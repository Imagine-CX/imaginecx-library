import { add, format, lastDayOfWeek } from 'date-fns';
import { es } from 'date-fns/locale';

export const getDaysWeek = (formatQty: number) => {
  let formatDays = 'EEEEE';

  if (formatQty) {
    formatDays = '';
    for (let x = 0; x < formatQty; x++) {
      formatDays += 'E';
    }
  }

  const lastDayWeek = 7;
  const firstDayWeek = 1;
  const result = [];

  for (let dayWeek = firstDayWeek; dayWeek <= lastDayWeek; dayWeek++) {
    const day = add(lastDayOfWeek(new Date()), { days: dayWeek });
    result.push(format(day, formatDays, { locale: es }).toUpperCase());
  }
  return result;
};
