import { getYear, setYear, sub } from 'date-fns';
import React, { JSX } from 'react';
import { Slide } from 'react-awesome-reveal';

import { getYears } from '../helpers';
import { Cell } from './Cell';

export interface IYearView extends React.PropsWithChildren {
  value?: Date;
  beforeYear?: number;
  afterYear?: number;
  onChange?: (value: Date) => void;
  showYears: (value: boolean) => void;
}

export const YearView = ({
  value = new Date(),
  onChange,
  showYears,
  beforeYear = 5,
  afterYear = 5,
}: IYearView): JSX.Element => {
  const anteriores: number = getYear(sub(new Date(), { years: beforeYear }));
  const years = getYears(beforeYear, afterYear);

  const handleClickYear = (index: number) => {
    const year = setYear(value, index);
    if (onChange) onChange(year);
  };

  const handleClickCell = (date: number) => {
    handleClickYear(date);
    showYears(false);
  };

  return (
    <div className="icx-w-[300px] icx-h-[370px] icx-border icx-rounded-lg icx-p-8 icx-m-3 icx-grid icx-grid-cols-1 icx-items-center icx-justify-center icx-overflow-auto icx-bg-white icx-absolute icx-z-50">
      <Slide direction="down">
        <div className="icx-grid icx-grid-cols-3 icx-items-center icx-justify-center icx-text-center">
          {years.map((year, index) => {
            const date = index + anteriores;
            const isCurrentYear = date === value.getFullYear();
            return (
              <Cell
                isActive={isCurrentYear}
                key={year}
                className="icx-font-bold icx-mt-3 icx-mb-3"
                onClick={() => handleClickCell(date)}
              >
                {year}
              </Cell>
            );
          })}
        </div>
      </Slide>
    </div>
  );
};
