import '../style.css';

import { ButtonHTMLAttributes } from 'react';

export interface IBtnPrimary extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color: string;
  animation?: boolean;
  icon?: JSX.Element | null;
}
const selectStyleButton = (type: string | undefined): string => {
  if (type === 'success') {
    return `icx-btn-success`;
  } else if (type === 'error') {
    return `icx-btn-error`;
  } else if (type === 'secondary') {
    return `icx-btn-secondary`;
  } else if (type === 'primary') {
    return `icx-btn-primary`;
  } else if (type === 'alternative') {
    return `icx-btn-alternative`;
  }
  return '';
};
export const Button = ({
  text,
  color,
  animation,
  disabled,
  icon,
  className,
  ...btnProps
}: IBtnPrimary): JSX.Element => {
  let estiloBtn = selectStyleButton(color);

  if (disabled) {
    estiloBtn = 'icx-btn-disable';
  }

  return (
    <>
      <button
        type="button"
        className={`
        ${estiloBtn} 
        ${className}
          icx-flex 
          icx-py-1.5
          icx-rounded-lg
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
