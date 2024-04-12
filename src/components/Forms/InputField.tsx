import { InputHTMLAttributes, RefObject } from 'react';

export interface IInputField extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element | null;
  title?: string;
  action?: JSX.Element | null;
  labelAction?: JSX.Element | null;
  labelClassName?: string;
  refInput?: RefObject<HTMLInputElement>;
}

export const InputField = ({
  title,
  icon = null,
  action,
  disabled,
  labelAction,
  labelClassName,
  required,
  className,
  refInput,
  ...inputProps
}: IInputField): JSX.Element => {
  const showIcon: JSX.Element = icon ? (
    <div className="icx-text-gray-700 icx-absolute icx-top-1/2 icx--translate-y-1/2 icx-left-4">{icon}</div>
  ) : (
    <></>
  );

  const showAction = action ? (
    <div className="icx-text-gray-700 icx-absolute icx-top-1/2 icx-cursor-pointer icx--translate-y-1/2 icx-right-3 icx-flex icx-justify-end">
      {action}
    </div>
  ) : (
    <></>
  );

  const padding: string = icon ? 'icx-pl-[50px]' : 'icx-pl-4';
  const paddingAction = action ? 'icx-pr-10' : 'icx-pr-4';
  const estiloInput: string = disabled ? 'icx-input-disabled' : 'icx-input-active';
  const estiloTitle = disabled ? 'icx-text-gray-300' : 'icx-text-neutral-500';

  return (
    <div className="icx-flex icx-flex-col icx-gap-8">
      <div className="icx-w-full icx-flex icx-flex-col icx-gap-y-1">
        <label htmlFor={title} className={`${labelClassName} ${estiloTitle} icx-flex icx-items-center icx-gap-1`}>
          {title} {required ? <span className={estiloTitle}>*</span> : ''}{' '}
          {labelAction ? <div className="icx-ml-2">{labelAction}</div> : ''}
        </label>
        <div className="icx-relative icx-text-gray-400">
          {showIcon}
          <div className="ml-5">{showAction}</div>
          <input
            className={`icx-w-full ${padding} ${paddingAction} icx-py-1.5 icx-rounded-lg icx-outline-none ${estiloInput} ${
              className ?? ''
            }`}
            id={title}
            required={required}
            disabled={disabled}
            ref={refInput}
            {...inputProps}
          />
        </div>
      </div>
    </div>
  );
};
