import 'animate.css';

import { format } from 'date-fns';
import { InputHTMLAttributes, useEffect, useRef, useState } from 'react';

import { InputField } from '../Forms';
import { Calendar } from './Calendar';
import { MonthView } from './MonthView';
import { YearView } from './YearView';

export interface IContCalendar extends InputHTMLAttributes<HTMLInputElement> {
  beforeYear?: number;
  afterYear?: number;
  disableAfter?: Date | null;
  disableBefore?: Date | null;
  icon?: JSX.Element | null;
  title?: string;
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  onChangeCalendar?: (value: Date) => void;
}

export const ContCalendar = ({
  beforeYear,
  afterYear,
  disableAfter,
  disableBefore,
  title,
  currentDate,
  setCurrentDate,
  onChangeCalendar,
  icon = null,
  ...inputProps
}: IContCalendar): JSX.Element => {
  const [showMonths, setshowMonths] = useState<boolean>(false);
  const [showYears, setShowYears] = useState<boolean>(false);
  // const [currentDate, setCurrentDate] = useState(new Date());

  const [open, setOpen] = useState<boolean>(false);
  const refOne = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('click', hideOnClickOutside, true);
    onChangeCalendar && onChangeCalendar(currentDate);
  }, []);

  const hideOnClickOutside = (e: Event) => {
    if (refOne.current && !refOne.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  return (
    <>
      <InputField
        value={format(currentDate, 'dd/MM/yyyy')}
        readOnly
        className="icx-cursor-pointer"
        onClick={() => setOpen((open) => !open)}
        icon={icon}
        title={title}
        {...inputProps}
      />

      <div ref={refOne}>
        {open && (
          <div className="icx-relative icx-bg-white animate__animated animate__zoomIn animate__faster">
            {showMonths && !showYears ? (
              <MonthView key="month" value={currentDate} onChange={setCurrentDate} showMonths={setshowMonths} />
            ) : showYears ? (
              <YearView
                key="year"
                value={currentDate}
                onChange={setCurrentDate}
                showYears={setShowYears}
                beforeYear={beforeYear}
                afterYear={afterYear}
              />
            ) : (
              <Calendar
                key="calendar"
                value={currentDate}
                onChange={setCurrentDate}
                showMonths={setshowMonths}
                showYears={setShowYears}
                beforeYear={beforeYear}
                afterYear={afterYear}
                disableAfter={disableAfter}
                disableBefore={disableBefore}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
};
