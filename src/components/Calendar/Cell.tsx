import clsx from 'clsx';
import React from 'react';

export interface ICell extends React.PropsWithChildren {
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
}

export const Cell = ({ className, children, isActive = false, onClick }: ICell): JSX.Element => {
  return (
    <div
      onClick={isActive ? undefined : onClick}
      className={clsx(
        'icx-h-12 icx-flex icx-items-center icx-justify-center icx-cursor-pointer icx-rounded-full',
        { 'icx-text-white icx-bg-primary-400 hover:icx-bg-primary-500': isActive },
        { 'hover:icx-bg-gray-200 ': !isActive && onClick },
        className,
      )}
    >
      {children}
    </div>
  );
};
