import { add, differenceInDays, endOfMonth, format, getYear, setDate, startOfMonth, sub } from 'date-fns';
import { es } from 'date-fns/locale';

import { getDaysWeek } from '../helpers';
import { Cell } from './Cell';

const daysOfWeek = getDaysWeek(6);

const nextIcon: JSX.Element = (
  <svg
    width="14px"
    height="14px"
    fill="#000000"
    version="1.1"
    baseProfile="tiny"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 42 42"
    xmlSpace="preserve"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      {' '}
      <polygon fill-rule="evenodd" points="11,38.32 28.609,21 11,3.68 13.72,1 34,21.01 13.72,41 "></polygon>{' '}
    </g>
  </svg>
);
const prevIcon: JSX.Element = (
  <svg
    width="14px"
    height="14px"
    fill="#000000"
    version="1.1"
    baseProfile="tiny"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 42 42"
    xmlSpace="preserve"
    transform="rotate(180)"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      {' '}
      <polygon fill-rule="evenodd" points="11,38.32 28.609,21 11,3.68 13.72,1 34,21.01 13.72,41 "></polygon>{' '}
    </g>
  </svg>
);

export interface ICalendar extends React.PropsWithChildren {
  value?: Date;
  beforeYear?: number;
  afterYear?: number;
  onChange?: (value: Date) => void;
  showMonths: (value: boolean) => void;
  showYears: (value: boolean) => void;
}

export const Calendar = ({
  value = new Date(),
  onChange,
  showMonths,
  showYears,
  beforeYear = 5,
  afterYear = 5,
}: ICalendar): JSX.Element => {
  const startDate = startOfMonth(value);
  const endDate = endOfMonth(value);
  const numDays = differenceInDays(endDate, startDate) + 1;

  const prefixDays = startDate.getDay();
  const suffixDays = 6 - endDate.getDay();

  const currentYear = getYear(value);
  const startYears = getYear(sub(new Date(), { years: beforeYear }));
  const endYears = getYear(add(new Date(), { years: afterYear }));

  const handleShowMonth = () => {
    showMonths(true);
  };

  const handleShowYear = () => {
    showYears(true);
  };

  const prevMonth = () => {
    onChange && onChange(sub(value, { months: 1 }));
  };

  const nextMonth = () => {
    onChange && onChange(add(value, { months: 1 }));
  };

  const prevYear = () => {
    if (currentYear <= startYears) return;
    onChange && onChange(sub(value, { years: 1 }));
  };

  const nextYear = () => {
    if (currentYear >= endYears) return;
    onChange && onChange(add(value, { years: 1 }));
  };

  const handleClickDate = (index: number) => {
    const date = setDate(value, index);
    onChange && onChange(date);
  };

  const currentDate = new Date();

  const isPastDate = (date: number) => {
    const pastDate = new Date(value.getFullYear(), value.getMonth(), date + 1);
    return pastDate <= currentDate;
  };

  // const isFutureDisableDate = (date: number) => {
  //   const futureDate = new Date(value.getFullYear(), value.getMonth(), date);
  //   return futureDate > disabledAfterTo;
  // };

  return (
    <div className="icx-w-[400px] icx-h-[470px] icx-border icx-rounded-lg icx-p-10 icx-m-3 icx-drop-shadow-xl icx-overflow-auto">
      <div className="icx-grid icx-grid-cols-7 icx-items-center icx-justify-center icx-text-center animate__animated animate__zoomIn animate__faster">
        <Cell onClick={prevMonth}>{prevIcon}</Cell>
        <Cell onClick={handleShowMonth} className="icx-font-bold icx-text-sm">
          {format(value, 'MMM', { locale: es }).toUpperCase()}
        </Cell>
        <Cell onClick={nextMonth}>{nextIcon}</Cell>
        <Cell />
        <Cell onClick={prevYear}>{prevIcon}</Cell>
        <Cell onClick={handleShowYear} className="icx-font-bold icx-text-sm">
          {format(value, 'yyyy')}
        </Cell>
        <Cell onClick={nextYear}>{nextIcon}</Cell>

        {daysOfWeek.map((day) => (
          <Cell className="icx-font-bold" key={day}>
            {day}
          </Cell>
        ))}

        {Array.from({ length: prefixDays }).map((_, index) => (
          <Cell key={index} isActive={false} />
        ))}

        {Array.from({ length: numDays }).map((_, index) => {
          const date = index + 1;
          const isCurrentDate = date === value.getDate();
          const isDisabled = isPastDate(date);
          return (
            <Cell isActive={isCurrentDate} isDisabled={isDisabled} onClick={() => handleClickDate(date)} key={date}>
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
