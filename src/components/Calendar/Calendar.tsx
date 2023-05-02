import { add, differenceInDays, endOfMonth, format, setDate, startOfMonth, sub } from 'date-fns';
import { es } from 'date-fns/locale';

import { getDaysWeek } from '../helpers';
import { Cell } from './Cell';

const daysOfWeek = getDaysWeek(6);

export interface ICalendar extends React.PropsWithChildren {
  value?: Date;
  onChange?: (value: Date) => void;
  showMonths: (value: boolean) => void;
  showYears: (value: boolean) => void;
}

export const Calendar = ({ value = new Date(), onChange, showMonths, showYears }: ICalendar): JSX.Element => {
  const startDate = startOfMonth(value);
  const endDate = endOfMonth(value);
  const numDays = differenceInDays(endDate, startDate) + 1;

  const prefixDays = startDate.getDay();
  const suffixDays = 6 - endDate.getDay();

  // const handleChangeMonth = (event: any) => {
  //   event.preventDefault();
  //   const month = event.target.value;
  //   const newMonth = toDate(value.setMonth(month));
  //   onChange && onChange(newMonth);
  // };

  const handleShowMonth = () => {
    showMonths(true);
  };

  const handleShowYear = () => {
    showYears(true);
  };

  const prevMonth = () => onChange && onChange(sub(value, { months: 1 }));
  const nextMonth = () => onChange && onChange(add(value, { months: 1 }));
  const prevYear = () => onChange && onChange(sub(value, { years: 1 }));
  const nextYear = () => onChange && onChange(add(value, { years: 1 }));

  const handleClickDate = (index: number) => {
    const date = setDate(value, index);
    onChange && onChange(date);
  };

  return (
    <div className="icx-w-[400px] icx-h-[450px] icx-border icx-rounded-lg icx-p-10 icx-m-3 icx-drop-shadow-xl icx-overflow-auto">
      <div className="icx-grid icx-grid-cols-7 icx-items-center icx-justify-center icx-text-center animate__animated animate__zoomIn animate__faster">
        <Cell onClick={prevMonth}>{'<'}</Cell>
        <Cell onClick={handleShowMonth} className="icx-font-bold icx-text-sm">
          {format(value, 'MMMM', { locale: es }).toUpperCase()}
        </Cell>
        <Cell onClick={nextMonth}>{'>'}</Cell>
        <Cell />
        <Cell onClick={prevYear}>{'<'}</Cell>
        <Cell onClick={handleShowYear} className="icx-font-bold icx-text-sm">
          {format(value, 'yyyy')}
        </Cell>
        <Cell onClick={nextYear}>{'>'}</Cell>

        {daysOfWeek.map((day) => (
          <Cell className="icx-font-bold" key={day}>
            {day}
          </Cell>
        ))}

        {Array.from({ length: prefixDays }).map((_, index) => (
          <Cell key={index} />
        ))}

        {Array.from({ length: numDays }).map((_, index) => {
          const date = index + 1;
          const isCurrentDate = date === value.getDate();
          return (
            <Cell isActive={isCurrentDate} onClick={() => handleClickDate(date)} key={date}>
              {date}
            </Cell>
          );
        })}

        {Array.from({ length: suffixDays }).map((_, index) => (
          <Cell key={index} />
        ))}
      </div>
    </div>
  );
};
