import { InputHTMLAttributes } from 'react';

export interface ICheckBox extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
}
export const CheckBox = ({ text, disabled, id, ...inputProps }: ICheckBox) => {
  const estiloCheck: string = disabled ? 'icx-checkbox-disabled' : 'icx-checkbox-active';

  return (
    <div className="icx-flex icx-items-center icx-gap-x-2 icx-m-1">
      <input
        type="checkbox"
        id={id}
        disabled={disabled}
        className="icx-checkbox-item icx-peer icx-hidden"
        {...inputProps}
      />
      <label htmlFor={id} className={estiloCheck}></label>
      <span>{text}</span>
    </div>
  );
};
