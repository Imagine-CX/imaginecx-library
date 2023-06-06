import 'animate.css';

import { format } from 'date-fns';
import { useEffect, useRef, useState } from 'react';

import { InputField } from '../Forms';
import { Calendar } from './Calendar';
import { MonthView } from './MonthView';
import { YearView } from './YearView';

export interface IContCalendar {
  beforeYear?: number;
  afterYear?: number;
  disableAfter?: Date | null;
  disableBefore?: Date | null;
  icon?: JSX.Element | null;
  label?: string;
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>;
  onChange?: (value: Date) => void;
}

export const ContCalendar = ({
  beforeYear,
  afterYear,
  disableAfter,
  disableBefore,
  label,
  currentDate,
  setCurrentDate,
  onChange,
  icon = null,
}: IContCalendar): JSX.Element => {
  const [showMonths, setshowMonths] = useState<boolean>(false);
  const [showYears, setShowYears] = useState<boolean>(false);
  // const [currentDate, setCurrentDate] = useState(new Date());

  const [open, setOpen] = useState<boolean>(false);
  const refOne = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('click', hideOnClickOutside, true);
    onChange && onChange(currentDate);
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
        label={label}
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
