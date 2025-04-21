import { ForwardedRef, forwardRef, InputHTMLAttributes, JSX } from 'react';

export interface IRadio extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
  classNameLabel?: string;
}

export const Radio = forwardRef(
  (
    { text, classNameLabel, disabled, name, id, ...radioProps }: IRadio,
    ref: ForwardedRef<HTMLInputElement>,
  ): JSX.Element => {
    // const estiloRadio: string = disabled ? 'icx-radio-disabled' : 'icx-radio-active';

    return (
      <>
        <div className="icx-radio icx-flex icx-items-center icx-gap-x-2 icx-m-0.5">
          <input
            name={name}
            type="radio"
            id={id}
            className="icx-hidden"
            disabled={disabled}
            ref={ref}
            {...radioProps}
          />
          <label
            htmlFor={id}
            className="icx-mt-2 icx-rounded-full icx-border icx-border-orange-400 icx-flex icx-w-4 icx-h-4"
          ></label>
          <span className={`icx-font-imagine icx-pt-1 ${classNameLabel ?? ''}`}>{text}</span>
        </div>
      </>
    );
  },
);
