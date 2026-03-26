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
  const [showAbove, setShowAbove] = useState<boolean>(false);

  // const [currentDate, setCurrentDate] = useState(new Date());

  const [open, setOpen] = useState<boolean>(false);
  const refOne = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

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

  // Check if there's enough space below the input field
  const checkPosition = () => {
    if (containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();

      // Use a fixed height if calendar is not yet rendered
      const calendarHeight = calendarRef.current?.offsetHeight || 370; // Default height of calendar

      // Calculate space below the input
      const spaceBelow = window.innerHeight - containerRect.bottom;

      // If there's not enough space below, show above
      if (spaceBelow < calendarHeight + 10) {
        // 10px buffer
        setShowAbove(true);
      } else {
        setShowAbove(false);
      }
    }
  };

  // Handle opening the calendar
  const handleOpenCalendar = () => {
    if (!disabled) {
      const newOpenState = !open;
      setOpen(newOpenState);

      if (newOpenState) {
        // Check position immediately
        checkPosition();

        // And check again after render to be sure
        setTimeout(checkPosition, 0);
      }
    }
  };

  // Recalculate position on window resize
  useEffect(() => {
    const handleResize = () => {
      if (open) {
        checkPosition();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [open]);

  useEffect(() => {
    document.addEventListener('click', hideOnClickOutside, true);
    return () => {
      document.removeEventListener('click', hideOnClickOutside, true);
    };
  }, [open]);

  return (
    <>
      <div ref={containerRef} className="icx:relative">
        <InputField
          value={!currentDate ? '' : format(currentDate, 'dd/MM/yyyy')}
          readOnly
          className={`${disabled ? 'icx:cursor-not-allowed' : ' icx:cursor-pointer'}`}
          onClick={handleOpenCalendar}
          icon={icon}
          title={title}
          labelClassName={labelClassName}
          disabled={disabled}
          {...inputProps}
        />
        <div ref={refOne}>
          {open && (
            <div ref={calendarRef} className="">
              {showMonths && !showYears ? (
                <MonthView
                  key="month"
                  value={viewDate}
                  onChange={setViewDate}
                  showMonths={setshowMonths}
                  showAbove={showAbove}
                />
              ) : showYears ? (
                <YearView
                  key="year"
                  value={viewDate}
                  onChange={setViewDate}
                  showYears={setShowYears}
                  beforeYear={beforeYear}
                  afterYear={afterYear}
                  showAbove={showAbove}
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
                  showAbove={showAbove}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
