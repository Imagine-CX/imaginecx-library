import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export const getYears = (): string[] => {
  const fecha = new Date();
  const result = [];

  for (let i = 2000; i <= 2050; i++) {
    fecha.setFullYear(i);
    const year = format(fecha, `Y`, { locale: es });
    result.push(year);
  }

  return result;
};
