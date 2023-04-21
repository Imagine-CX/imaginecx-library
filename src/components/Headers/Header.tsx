import React from 'react';

export interface IHeader extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  variant: string;
}

export const Header = ({ text, variant, ...divProps }: IHeader) => {
  // console.log(variant);
  return (
    <div className={`${variant}`} {...divProps}>
      {text}
    </div>
  );
};
