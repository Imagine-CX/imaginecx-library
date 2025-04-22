import { InputHTMLAttributes } from 'react';

export interface ICheckBox extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
}
export const CheckBox = ({ text, disabled, checked, id, ...inputProps }: ICheckBox) => {
  let estiloCheck: string;

  if (disabled) {
    if (checked) estiloCheck = 'icx-checked-disabled';
    else estiloCheck = 'icx-unchecked-disabled';
  } else {
    estiloCheck = 'icx-checkbox-active';
  }

  return (
    <div className="icx:flex icx:items-center icx:gap-x-2 icx:m-1">
      <input
        type="checkbox"
        id={id}
        disabled={disabled}
        checked={checked}
        className="icx-checkbox-item icx:peer icx:hidden"
        {...inputProps}
      />
      <label
        htmlFor={id}
        className={`
          icx:relative 
          icx:flex 
          icx:w-6 
          icx:h-6
          icx:rounded-md
          ${estiloCheck}`}
      ></label>
      <span>{text}</span>
    </div>
  );
};
