import { ButtonHTMLAttributes, ForwardedRef, forwardRef, JSX, ReactNode } from 'react';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: 'success' | 'error' | 'secondary' | 'primary' | 'alternative' | 'neutral';
  animation?: boolean;
  icon?: ReactNode;
  children: string | JSX.Element | JSX.Element[];
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
  } else if (type === 'neutral') {
    return `icx-btn-neutral`;
  }
  return '';
};
export const Button = forwardRef(
  (
    { color, animation, disabled, icon, children, className, ...btnProps }: Props,
    ref: ForwardedRef<HTMLButtonElement>,
  ): JSX.Element => {
    let estiloBtn = selectStyleButton(color);

    if (disabled) {
      estiloBtn = 'icx-btn-disable';
    }

    const iconSpace = icon ? 'icx-space-x-2' : '';

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
          ref={ref}
          {...btnProps}
        >
          <div className="icx-m-auto">
            <div className={`icx-flex icx-items-center ${iconSpace}`}>
              {icon ? <div>{icon}</div> : <div></div>}
              <span>{children}</span>
            </div>
          </div>
        </button>
      </>
    );
  },
);
