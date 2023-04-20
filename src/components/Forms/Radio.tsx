import '../style.css';

import { InputHTMLAttributes } from 'react';

export interface IRadio extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
}

export const Radio = ({ text, disabled, ...radioProps }: IRadio): JSX.Element => {
  const estiloRadio: string = disabled ? 'icx-radio-disabled' : 'icx-radio-active';

  return (
    <>
      <div className="icx-flex icx-items-center icx-m-2">
        <input type="radio" className={`${estiloRadio}`} disabled={disabled} {...radioProps} />
        <label className="icx-ml-2">{text}</label>
      </div>
    </>
  );
};
