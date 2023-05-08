import '../style.css';

import { ButtonHTMLAttributes } from 'react';

export interface IBtnPrimary extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color: string;
  animation?: boolean;
  icon?: JSX.Element | null;
}

export const Button = ({ text, color, animation, disabled, icon, ...btnProps }: IBtnPrimary): JSX.Element => {
  const estiloBtn: string = disabled ? 'icx-btn-disable' : `${color}`;

  return (
    <>
      <button
        type="button"
        className={`
        ${estiloBtn} 
          icx-flex 
          icx-rounded-lg 
          icx-py-2 
          icx-mb-1 
          icx-w-full
          ${animation ? 'hover:icx-scale-[1.02]' : ''}
          icx-transition-all
          icx-duration-150
          icx-ease-in-out
        `}
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
