import clsx from 'clsx';
import React from 'react';

export interface ICell extends React.PropsWithChildren {
  className?: string;
}

export const Cell = ({ className, children }: ICell): JSX.Element => {
  return (
    <div className={clsx('icx-h-12 icx-flex icx-items-center icx-justify-center icx-border-b', className)}>
      {children}
    </div>
  );
};
