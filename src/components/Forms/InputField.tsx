import { InputHTMLAttributes } from 'react';

export interface IInputField extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element | null;
  label?: string;
}

export const InputField = ({ label, icon = null, disabled, required, ...inputProps }: IInputField): JSX.Element => {
  const showIcon: JSX.Element = icon ? (
    <div className="icx-text-gray-700 icx-absolute icx-top-1/2 icx--translate-y-1/2 icx-left-4">{icon}</div>
  ) : (
    <div></div>
  );
  const padding: string = icon ? 'icx-pl-12' : 'icx-pl-4';
  const estiloInput: string = disabled ? 'icx-input-disabled' : 'icx-input-active';

  return (
    <div className="px-4 py-8 flex flex-col md:flex-row md:items-center md:justify-center gap-8">
      <div className="icx-w-full icx-flex icx-flex-col icx-gap-y-2">
        <label>
          {label} {required ? <span className="icx-text-neutral-500">*</span> : ''}
        </label>
        <div className="icx-relative">
          {showIcon}
          <input
            className={`icx-w-full icx-py-2 ${padding} icx-pr-4 icx-rounded-lg icx-outline-none ${estiloInput}`}
            required={required}
            disabled={disabled}
            {...inputProps}
          />
        </div>
      </div>
    </div>
  );
};
