import React from 'react';

export interface IHeader extends React.HTMLAttributes<HTMLDivElement> {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | string;
}

export const Header: React.FC<IHeader> = ({ children, variant, ...divProps }) => {
  // console.log(variant);
  return (
    <div className={`${variant}`} {...divProps}>
      {children}
    </div>
  );
};
