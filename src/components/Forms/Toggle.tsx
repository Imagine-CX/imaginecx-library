import { InputHTMLAttributes } from 'react';

export interface IToggle extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
}

export const Toggle = ({ text, id = 'toggle', ...toggleProps }: IToggle): JSX.Element => {
  return (
    <>
      <style>
        {`.icx-toggle-checkbox:checked {
            right: 0;
            border-color: #F3901D;
            }
            .icx-toggle-checkbox:checked + .icx-toggle-label {
            background-color: #F3901D;
            }`}
      </style>

      <div className="icx-relative icx-inline-block icx-w-14 icx-mr-2 icx-align-middle icx-transition-100 icx-select-none">
        <input
          type="checkbox"
          id={id}
          {...toggleProps}
          className="icx-toggle-checkbox icx-absolute icx-block icx-w-8 icx-h-8 icx-rounded-full icx-bg-white icx-border-4 icx-border-gray-700 icx-appearance-none icx-cursor-pointer"
        />
        <label
          htmlFor={id}
          className="icx-toggle-label icx-block icx-overflow-hidden icx-h-8 icx-rounded-full icx-bg-gray-700 icx-cursor-pointer icx-transition-none"
        ></label>
      </div>
      <label htmlFor={id}>{text}</label>
    </>
  );
};
