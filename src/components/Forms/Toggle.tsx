import { InputHTMLAttributes } from 'react';

export interface IToggle extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
}

export const Toggle = ({ text, id = 'toggle', ...toggleProps }: IToggle): JSX.Element => {
  return (
    <>
      <div>
        <div className="icx-relative icx-inline-block icx-w-12 icx-m-1 icx-align-middle icx-select-none">
          <input
            type="checkbox"
            id={id}
            {...toggleProps}
            className="icx-toggle-checkbox icx-absolute icx-block icx-w-7 icx-h-7 icx-rounded-full icx-bg-white icx-border-4 icx-border-disable-200 icx-appearance-none icx-cursor-pointer"
          />
          <label
            htmlFor={id}
            className="icx-toggle-label icx-block icx-overflow-hidden icx-h-7 icx-rounded-full icx-bg-disable-200 icx-cursor-pointer"
          ></label>
        </div>
        <label className="icx-ml-[5px]" htmlFor={id}>
          {text}
        </label>
      </div>
    </>
  );
};
