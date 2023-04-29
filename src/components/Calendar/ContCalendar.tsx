import { useState } from 'react';

import { Calendar } from './Calendar';
import { MonthView } from './MonthView';

export const ContCalendar = () => {
  const [showMonths, setshowMonths] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <>
      {showMonths ? (
        <MonthView value={currentDate} onChange={setCurrentDate} showMonths={setshowMonths} />
      ) : (
        <Calendar value={currentDate} onChange={setCurrentDate} showMonths={setshowMonths} />
      )}
    </>
  );
};
