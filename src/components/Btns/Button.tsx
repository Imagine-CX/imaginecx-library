import '../style.css';

import { ButtonHTMLAttributes } from 'react';

export interface IBtnPrimary extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color: string;
  icon?: JSX.Element | null;
}

export const Button = ({ text, color, disabled, icon, ...btnProps }: IBtnPrimary): JSX.Element => {
  const estiloBtn: string = disabled ? 'icx-btn-disable' : `${color}`;

  return (
    <>
      <button
        type="button"
        className={`icx-flex ${estiloBtn} icx-rounded-lg icx-py-2 icx-mb-1 icx-w-full`}
        disabled={disabled}
        {...btnProps}
      >
        <div className="icx-m-auto">
          <div className="icx-flex icx-items-center icx-space-x-2">
            {icon ? <div>{icon}</div> : <div></div>}
            <span>{text}</span>
          </div>
        </div>
      </button>
    </>
  );
};
