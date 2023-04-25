import clsx from 'clsx';
import React from 'react';

export interface ICell extends React.PropsWithChildren {
  className?: string;
  onClick?: () => void;
}

export const Cell = ({ className, children, onClick }: ICell): JSX.Element => {
  return (
    <div
      className={clsx(
        'icx-h-12 icx-flex icx-items-center icx-justify-center icx-cursor-pointer icx-rounded-full',
        'hover:icx-bg-gray-100 ',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
