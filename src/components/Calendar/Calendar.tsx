import {
  add,
  compareAsc,
  differenceInDays,
  endOfMonth,
  format,
  getYear,
  setDate,
  startOfDay,
  startOfMonth,
  sub,
} from 'date-fns';
import { es } from 'date-fns/locale';
import { Dispatch, JSX, SetStateAction } from 'react';
import { Slide } from 'react-awesome-reveal';

import { getDaysWeek } from '../helpers';
import { Cell } from './Cell';

const daysOfWeek = getDaysWeek(5);

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
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <polygon fillRule="evenodd" points="11,38.32 28.609,21 11,3.68 13.72,1 34,21.01 13.72,41 "></polygon>{' '}
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
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <polygon fillRule="evenodd" points="11,38.32 28.609,21 11,3.68 13.72,1 34,21.01 13.72,41 "></polygon>
    </g>
  </svg>
);

export interface ICalendar extends React.PropsWithChildren {
  value?: Date;
  beforeYear?: number;
  afterYear?: number;
  disableAfter?: Date | null;
  disableBefore?: Date | null;
  onChange?: (value: Date) => void;
  showMonths: (value: boolean) => void;
  showYears: (value: boolean) => void;
  viewDate: Date;
  setViewDate: Dispatch<SetStateAction<Date>>;
  showAbove?: boolean;
}

export const Calendar = ({
  value = new Date(),
  onChange,
  showMonths,
  showYears,
  beforeYear = 7,
  afterYear = 7,
  disableAfter,
  disableBefore,
  viewDate,
  setViewDate,
  showAbove = false,
}: ICalendar): JSX.Element => {
  const startDate = startOfMonth(viewDate);
  const endDate = endOfMonth(viewDate);
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
    if (compareAsc(viewDate, sub(new Date(), { years: beforeYear })) === 1) {
      // if (onChange) onChange(sub(value, { months: 1 }));
      setViewDate(sub(viewDate, { months: 1 }));
    }
  };

  const nextMonth = () => {
    if (compareAsc(viewDate, add(new Date(), { years: afterYear })) === -1) {
      // if (onChange) onChange(add(value, { months: 1 }));
      setViewDate(add(viewDate, { months: 1 }));
    }
  };

  const prevYear = () => {
    if (currentYear <= startYears) return;
    setViewDate(sub(viewDate, { years: 1 }));
  };

  const nextYear = () => {
    if (currentYear >= endYears) return;
    setViewDate(add(viewDate, { years: 1 }));
  };

  const handleClickDate = (index: number) => {
    const date = setDate(viewDate, index);

    if (disableBefore) {
      const compareDisable = compareAsc(startOfDay(date), startOfDay(disableBefore));
      if (compareDisable === -1 || compareDisable === 0) return;
    }

    if (disableAfter) {
      if (compareAsc(startOfDay(date), startOfDay(disableAfter)) === 1) return;
    }
    if (onChange) {
      onChange(date);
      setViewDate(date);
    }
  };

  const isPastDisableDate = (date: number) => {
    if (!disableBefore) return false;

    const pastDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), date);
    return pastDate <= disableBefore;
  };

  const isFutureDisableDate = (date: number) => {
    if (!disableAfter) return false;

    const futureDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), date);
    return futureDate > disableAfter;
  };

  return (
    <div
      className={`icx:w-[300px] icx:h-[370px] icx:border icx:rounded-lg icx:p-10 icx:m-1 icx:drop-shadow-xl icx:overflow-auto icx:bg-white icx:absolute icx:z-50 ${showAbove ? 'icx:bottom-full icx:mb-1' : 'icx:top-full icx:mt-1'}`}
    >
      <Slide direction="down">
        <div className="icx:grid icx:grid-cols-7 icx:items-center icx:justify-center icx:text-center">
          <Cell onClick={prevMonth}>{prevIcon}</Cell>
          <Cell onClick={handleShowMonth} className="icx:font-bold icx:text-sm">
            {format(viewDate, 'MMM', { locale: es }).toUpperCase()}
          </Cell>
          <Cell onClick={nextMonth}>{nextIcon}</Cell>
          <Cell />
          <Cell onClick={prevYear}>{prevIcon}</Cell>
          <Cell onClick={handleShowYear} className="icx:font-bold icx:text-sm">
            {format(viewDate, 'yyyy')}
          </Cell>
          <Cell onClick={nextYear}>{nextIcon}</Cell>
          {daysOfWeek.map((day, index) => (
            <Cell className="icx:font-bold" key={index}>
              {day}
            </Cell>
          ))}
          {Array.from({ length: prefixDays }).map((_, index) => (
            <Cell key={index} isActive={false} />
          ))}
          {Array.from({ length: numDays }).map((_, index) => {
            const date = index + 1;
            // const isCurrentDate = date === value.getDate();
            const isCurrentDate =
              date === value.getDate() &&
              viewDate.getMonth() === value.getMonth() &&
              viewDate.getFullYear() === value.getFullYear();
            const isDisabledBefore = isPastDisableDate(date);
            const isDisabledAfter = isFutureDisableDate(date);
            return (
              <Cell
                isActive={isCurrentDate}
                isDisabledBefore={isDisabledBefore}
                isDisabledAfter={isDisabledAfter}
                onClick={() => handleClickDate(date)}
                key={date}
              >
                {date}
              </Cell>
            );
          })}
          {Array.from({ length: suffixDays }).map((_, index) => (
            <Cell key={index} />
          ))}
        </div>
      </Slide>
    </div>
  );
};
