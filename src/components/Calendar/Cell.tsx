import clsx from 'clsx';
import React from 'react';

export interface ICell extends React.PropsWithChildren {
  className?: string;
  onClick?: () => void;
  isActive?: boolean;
  isDisabledBefore?: boolean;
  isDisabledAfter?: boolean;
  value?: Date;
}

export const Cell = ({
  className,
  children,
  isActive = false,
  isDisabledBefore = false,
  isDisabledAfter = false,
  onClick,
}: ICell): JSX.Element => {
  return (
    <div
      onClick={isActive && isDisabledBefore && isDisabledAfter ? undefined : onClick}
      className={clsx(
        'icx-h-12 icx-flex icx-items-center icx-justify-center icx-cursor-pointer icx-rounded-full',
        {
          'icx-text-white icx-bg-primary-400 hover:icx-bg-primary-500':
            isActive && !isDisabledBefore && !isDisabledAfter,
        },
        { 'hover:icx-bg-gray-200 ': !isActive && !isDisabledBefore && !isDisabledAfter && onClick },
        { 'icx-text-gray-300': isDisabledBefore || isDisabledAfter },
        className,
      )}
    >
      {children}
    </div>
  );
};
