import { InputHTMLAttributes } from 'react';

export interface IToggle extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
}

export const Toggle = ({ text, ...toggleProps }: IToggle): JSX.Element => {
  return (
    <>
      <div className="icx-flex icx-items-center icx-m-2">
        <div className="icx-cursor-pointer icx-my-2 icx-rounded-full icx-bg-gray-200 icx-relative icx-shadow-sm">
          <input
            type="checkbox"
            {...toggleProps}
            className="focus:icx-outline-none icx-checkbox icx-w-6 icx-h-6 icx-rounded-full icx-bg-white icx-absolute icx-shadow-sm icx-appearance-none icx-cursor-pointer icx-border icx-border-transparent icx-top-0 icx-bottom-0 icx-m-auto icx-transition-all"
          />
          <label
            htmlFor="toggle1"
            className="icx-toggle-label dark:icx-bg-gray-700 icx-block icx-w-14 icx-h-7 icx-overflow-hidden icx-rounded-full icx-bg-gray-300 icx-cursor-pointer icx-transition"
          />
        </div>
        <label htmlFor="" className="icx-ml-2">
          {text}
        </label>
        <style>
          {`.icx-checkbox:checked {
                      right: 0;
                  }
                  .icx-checkbox:checked + .icx-toggle-label {
                      background-color: #F3901D;
                  }`}
        </style>
      </div>
    </>
  );
};
