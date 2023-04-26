import '../style.css';

import { InputHTMLAttributes } from 'react';

export interface IRadio extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
}

export const Radio = ({ text, disabled, name, id, ...radioProps }: IRadio): JSX.Element => {
  // const estiloRadio: string = disabled ? 'icx-radio-disabled' : 'icx-radio-active';

  return (
    <>
      <div className="icx-flex icx-items-center icx-gap-x-2 icx-m-1 inline-block align-middle">
        <div className="icx-radio">
          <input name={name} type="radio" id={id} className="icx-hidden" disabled={disabled} {...radioProps} />
          <label
            htmlFor={id}
            className="icx-mt-2 icx-rounded-full icx-border icx-border-orange-400 icx-flex icx-w-4 icx-h-4"
          ></label>
        </div>
        <span className="icx-pt-1">{text}</span>
      </div>
    </>
  );
};
