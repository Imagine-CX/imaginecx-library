import 'animate.css';

import { setMonth } from 'date-fns';
import { useEffect } from 'react';

import { getMonths } from '../helpers';
import { Cell } from './Cell';

export interface IMonth extends React.PropsWithChildren {
  value?: Date;
  onChange?: (value: Date) => void;
  showMonths: (value: boolean) => void;
}

export const MonthView = ({ value = new Date(), onChange, showMonths }: IMonth): JSX.Element => {
  const months = getMonths(3);

  const handleClickMonth = (index: number) => {
    const month = setMonth(value, index);
    onChange && onChange(month);
  };

  const handleClickCell = (date: number) => {
    handleClickMonth(date);
    showMonths(false);
  };

  useEffect(() => {}, [showMonths]);

  return (
    <div className="icx-w-[300px] icx-h-[370px] icx-border icx-rounded-lg icx-p-10 icx-m-3 icx-grid icx-grid-cols-1 icx-items-center icx-justify-center icx-overflow-auto icx-bg-white icx-absolute icx-z-20">
      <div className="icx-grid icx-grid-cols-3 icx-items-center icx-justify-center icx-text-center animate__animated animate__zoomIn animate__faster">
        {months.map((month, index) => {
          const date = index;
          const isCurrentMonth = date === value.getMonth();
          return (
            <Cell
              isActive={isCurrentMonth}
              key={month}
              className="icx-font-bold icx-mt-3 icx-mb-3"
              onClick={() => handleClickCell(date)}
            >
              {month}
            </Cell>
          );
        })}
      </div>
    </div>
  );
};
