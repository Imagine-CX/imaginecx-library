import { setYear } from 'date-fns';
import React from 'react';

import { getYears } from '../helpers';
import { Cell } from './Cell';

export interface IYearView extends React.PropsWithChildren {
  value?: Date;
  onChange?: (value: Date) => void;
  showYears: (value: boolean) => void;
}

export const YearView = ({ value = new Date(), onChange, showYears }: IYearView): JSX.Element => {
  const years = getYears();

  const handleClickYear = (index: number) => {
    const month = setYear(value, index);
    onChange && onChange(month);
  };

  const handleClickCell = (date: number) => {
    handleClickYear(date);
    showYears(false);
  };

  return (
    <div className="icx-w-[400px] icx-h-[450px] icx-border icx-rounded-lg icx-p-10 icx-m-3 icx-grid icx-grid-cols-1 icx-items-center icx-justify-center icx-overflow-auto">
      <div className="icx-grid icx-grid-cols-3 icx-items-center icx-justify-center icx-text-center animate__animated animate__zoomIn animate__faster">
        {years.map((year, index) => {
          const date = index + 2000;
          const isCurrentYear = date === value.getFullYear();
          return (
            <Cell isActive={isCurrentYear} key={year} className="icx-font-bold" onClick={() => handleClickCell(date)}>
              {year}
            </Cell>
          );
        })}
      </div>
    </div>
  );
};
