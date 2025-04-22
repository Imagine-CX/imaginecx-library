import { ForwardedRef, forwardRef, InputHTMLAttributes, JSX } from 'react';

export interface IToggle extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  labelTrackClassName?: string;
  containerClassName?: string;
  wholeContainerClassName?: string;
  small?: boolean;
  stop?: boolean;
}

export const Toggle = forwardRef(
  (
    {
      text,
      className,
      containerClassName,
      wholeContainerClassName,
      labelTrackClassName,
      small,
      stop = false,
      id = 'toggle',
      ...toggleProps
    }: IToggle,
    ref: ForwardedRef<HTMLInputElement>,
  ): JSX.Element => {
    const sizeTogglepoint = small ? 'icx:w-6 icx:h-6' : 'icx:w-7 icx:h-7';
    const sizeToggleTrack = small ? 'icx:h-6' : 'icx:h-7';

    return (
      <div className={`${wholeContainerClassName}`} onClick={(e) => (stop ? e.stopPropagation() : undefined)}>
        <div
          className={`${containerClassName} icx:relative icx:inline-block icx:w-12 icx:m-1 icx:align-middle icx:select-none`}
        >
          <input
            type="checkbox"
            id={id}
            ref={ref}
            className={`${className} icx-toggle-checkbox icx:absolute ${sizeTogglepoint} icx:block icx:rounded-full icx:bg-white icx:border-4 icx:border-disable-200 icx:appearance-none icx:cursor-pointer`}
            {...toggleProps}
          />
          <label
            htmlFor={id}
            className={`${labelTrackClassName} icx-toggle-label icx:block icx:overflow-hidden ${sizeToggleTrack} icx:rounded-full icx:bg-disable-200 icx:cursor-pointer`}
          ></label>
        </div>
        <label className="icx:ml-[5px]" htmlFor={id}>
          {text}
        </label>
      </div>
    );
  },
);
