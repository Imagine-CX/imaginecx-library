import { add, differenceInDays, endOfMonth, format, setDate, startOfMonth, sub, toDate } from 'date-fns';

import { getDaysWeek, getMonths } from '../helpers';
import { Cell } from './Cell';

const daysOfWeek = getDaysWeek(6);
const months = getMonths(3);

export interface ICalendar extends React.PropsWithChildren {
  value?: Date;
  onChange?: (value: Date) => void;
}

export const Calendar = ({ value = new Date(), onChange }: ICalendar): JSX.Element => {
  const startDate = startOfMonth(value);
  const endDate = endOfMonth(value);
  const numDays = differenceInDays(endDate, startDate) + 1;

  const prefixDays = startDate.getDay();
  const suffixDays = 6 - endDate.getDay();

  const handleChangeMonth = (event: any) => {
    event.preventDefault();
    const month = event.target.value;
    const newMonth = toDate(value.setMonth(month));
    onChange && onChange(newMonth);
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
    <div className="icx-w-[400px] icx-border icx-rounded-xl icx-p-8 icx-m-3 icx-drop-shadow-lg">
      <div className="icx-grid icx-grid-cols-7 icx-items-center icx-justify-center icx-text-center">
        <Cell onClick={prevMonth}>{'<'}</Cell>
        {/* <Cell>{format(value, 'MMMM')}</Cell> */}
        <Cell>
          <select name="" id="months" onChange={handleChangeMonth}>
            {months.map((mes, index) => (
              <option value={index} key={mes}>
                {' '}
                {mes}
              </option>
            ))}
          </select>
        </Cell>
        <Cell onClick={nextMonth}>{'>'}</Cell>
        <Cell />
        <Cell onClick={prevYear}>{'<'}</Cell>
        <Cell>{format(value, 'yyyy')}</Cell>
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
