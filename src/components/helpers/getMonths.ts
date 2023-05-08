import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export const getMonths = (formatM: number | null = null): string[] => {
  let formatMonth = 'LLLL';

  if (formatM) {
    formatMonth = '';
    for (let j = 0; j < formatM; j++) {
      formatMonth += 'L';
    }
  }

  const result = [];
  const fecha = new Date();

  for (let i = 0; i < 12; i++) {
    fecha.setMonth(i);
    const month = format(fecha, `${formatMonth}`, { locale: es }).toUpperCase();
    result.push(month);
  }

  return result;
};
