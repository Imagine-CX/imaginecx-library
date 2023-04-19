import { InputHTMLAttributes } from 'react';

export interface ICheckBox extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
}
export const CheckBox = ({ text, disabled, ...inputProps }: ICheckBox) => {
  const estiloCheck: string = disabled ? 'icx-checkbox-disabled' : 'icx-checkbox-active';

  return (
    <div className="icx-flex icx-items-center icx-m-2">
      <input type="checkbox" className={`${estiloCheck}`} {...inputProps} />
      <label className="icx-ml-2">{text}</label>
    </div>
  );
};
