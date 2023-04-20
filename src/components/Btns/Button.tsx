import '../style.css';

import { ButtonHTMLAttributes } from 'react';

export interface IBtnPrimary extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color: string;
}

export const Button = ({ text, color, disabled, ...btnProps }: IBtnPrimary): JSX.Element => {
  const estiloBtn: string = disabled ? 'icx-btn-disable' : `${color}`;

  return (
    <button className={`${estiloBtn} icx-m-2 icx-px-5 icx-py-2 icx-rounded-xl`} {...btnProps}>
      <span>{text}</span>
    </button>
  );
};
