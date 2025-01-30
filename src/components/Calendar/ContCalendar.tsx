import { format } from 'date-fns';
import { InputHTMLAttributes, JSX, useEffect, useRef, useState } from 'react';

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
  labelClassName?: string;
  currentDate: Date | undefined;
  disabled?: boolean;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>> | React.Dispatch<React.SetStateAction<Date | undefined>>;
  onChangeCalendar?: (value: Date) => void;
}

export const ContCalendar = ({
  beforeYear,
  afterYear,
  disableAfter,
  disableBefore,
  title,
  labelClassName,
  currentDate,
  setCurrentDate,
  onChangeCalendar,
  icon = null,
  disabled,
  ...inputProps
}: IContCalendar): JSX.Element => {
  const [showMonths, setshowMonths] = useState<boolean>(false);
  const [showYears, setShowYears] = useState<boolean>(false);
  const [viewDate, setViewDate] = useState(currentDate || new Date());

  // const [currentDate, setCurrentDate] = useState(new Date());

  const [open, setOpen] = useState<boolean>(false);
  const refOne = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('click', hideOnClickOutside, true);
    if (onChangeCalendar && currentDate) onChangeCalendar(currentDate);
  }, []);

  const hideOnClickOutside = (e: Event) => {
    if (refOne.current && !refOne.current.contains(e.target as Node)) {
      if (open && e.target !== refOne.current) {
        if (disableBefore && currentDate && setCurrentDate && currentDate < disableBefore) {
          setCurrentDate(new Date());
        }
        setOpen(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', hideOnClickOutside, true);
    return () => {
      document.removeEventListener('click', hideOnClickOutside, true);
    };
  }, [open]);

  return (
    <>
      <div>
        <InputField
          value={!currentDate ? '' : format(currentDate, 'dd/MM/yyyy')}
          readOnly
          className={`${disabled ? 'icx-cursor-not-allowed' : ' icx-cursor-pointer'}`}
          onClick={() => setOpen((open) => !open)}
          icon={icon}
          title={title}
          labelClassName={labelClassName}
          disabled={disabled}
          {...inputProps}
        />
        <div ref={refOne}>
          {open && (
            <div className="icx-relative icx-bg-white">
              {showMonths && !showYears ? (
                <MonthView key="month" value={viewDate} onChange={setViewDate} showMonths={setshowMonths} />
              ) : showYears ? (
                <YearView
                  key="year"
                  value={viewDate}
                  onChange={setViewDate}
                  showYears={setShowYears}
                  beforeYear={beforeYear}
                  afterYear={afterYear}
                />
              ) : (
                <Calendar
                  key="calendar"
                  value={currentDate}
                  onChange={setCurrentDate}
                  viewDate={viewDate}
                  setViewDate={setViewDate}
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
      </div>
    </>
  );
};
