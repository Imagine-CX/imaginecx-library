import { add, format, getYear, sub } from 'date-fns';
import { es } from 'date-fns/locale';

export const getYears = (before: number, after: number): string[] => {
  const fecha = new Date();
  before = getYear(sub(fecha, { years: before }));
  after = getYear(add(fecha, { years: after }));
  const result = [];

  for (let i = before; i <= after; i++) {
    fecha.setFullYear(i);
    const year = format(fecha, `Y`, { locale: es });
    result.push(year);
  }

  return result;
};
