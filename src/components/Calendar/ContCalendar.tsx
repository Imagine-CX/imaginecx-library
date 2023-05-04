import { useState } from 'react';

import { Calendar } from './Calendar';
import { MonthView } from './MonthView';
import { YearView } from './YearView';

export interface IContCalendar extends React.PropsWithChildren {
  beforeYear?: number;
  afterYear?: number;
  disableAfter?: Date | null;
  disableBefore?: Date | null;
}

export const ContCalendar = ({ beforeYear, afterYear, disableAfter, disableBefore }: IContCalendar): JSX.Element => {
  const [showMonths, setshowMonths] = useState(false);
  const [showYears, setShowYears] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <>
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
    </>
  );
};
