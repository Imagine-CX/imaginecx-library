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
  label?: string;
}

export const ContCalendar = ({
  beforeYear,
  afterYear,
  disableAfter,
  disableBefore,
  label,
  icon = null,
  ...inputProps
}: IContCalendar): JSX.Element => {
  const [showMonths, setshowMonths] = useState<boolean>(false);
  const [showYears, setShowYears] = useState<boolean>(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const [open, setOpen] = useState<boolean>(false);
  const refOne = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('click', hideOnClickOutside, true);
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
        {...inputProps}
      />

      <div ref={refOne} className="">
        {open && (
          <div className="icx-relative icx-bg-white animate__animated animate__zoomIn animate__faster">
            {showMonths && !showYears ? (
              <MonthView value={currentDate} onChange={setCurrentDate} showMonths={setshowMonths} />
            ) : showYears ? (
              <YearView
                value={currentDate}
                onChange={setCurrentDate}
                showYears={setShowYears}
                beforeYear={beforeYear}
                afterYear={afterYear}
              />
            ) : (
              <Calendar
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
