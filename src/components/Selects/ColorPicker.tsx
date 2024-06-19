import { FocusEventHandler, MouseEventHandler, useRef, useState } from 'react';
import { HexColorInput, HexColorPicker } from 'react-colorful';

import { useOutsideAlerter } from '../hooks/useOutsideAlerter';

interface IColorPicker {
  colorPick: string;
  handleChangeColor: (newColor: string) => void;
  required?: boolean;
  idLabel?: string;
  labelClassName?: string;
  label?: string;
}

export const ColorPicker = ({
  colorPick,
  handleChangeColor,
  idLabel,
  labelClassName,
  required,
  label,
}: IColorPicker) => {
  const [openColorPick, setOpenColorPick] = useState<boolean>(false);
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useOutsideAlerter({ ref: wrapperRef, active: openColorPick, setActive: setOpenColorPick });
  useOutsideAlerter({ ref: wrapperRef, active: isFocus, setActive: setIsFocus });

  const handleOpenColorPick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();
    if (!openColorPick) {
      setIsFocus(true);
    } else {
      setIsFocus(false);
    }
    setOpenColorPick(!openColorPick);
  };

  const handleContainerFocus = () => {
    setIsFocus(true);
  };

  const handleContainerBlur = () => {
    setIsFocus(false);
  };

  const handleFocusInput: FocusEventHandler<HTMLInputElement> = (e) => {
    e.target.select();
  };

  return (
    <div>
      <label className={`icx-w-fit ${labelClassName}`} htmlFor={idLabel}>
        {label} {required ? <span>*</span> : ''}
      </label>
      <div
        className={`icx-relative icx-border ${
          isFocus ? 'icx-border-primary-300' : 'icx-border-gray-300'
        } icx-rounded-lg icx-px-4 icx-py-1.5 icx-mt-1`}
        onFocus={handleContainerFocus}
        onBlur={handleContainerBlur}
        ref={wrapperRef}
      >
        <div className="icx-flex icx-w-full icx-h-full">
          <div
            className="icx-w-8 icx-rounded-md icx-border icx-border-disable-400"
            style={{ backgroundColor: colorPick }}
            onClick={handleOpenColorPick}
          ></div>
          <HexColorInput
            className="icx-ml-4 icx-w-full icx-outline-0 icx-rounded-md icx-px-2 icx-border icx-border-disable-400"
            color={colorPick}
            onChange={handleChangeColor}
            id={idLabel}
          />
        </div>
        {openColorPick ? (
          <div className="icx-w-full icx-absolute icx-top-full icx-left-0 icx-mt-2">
            <HexColorPicker
              style={{ width: 'auto' }}
              color={colorPick}
              onChange={handleChangeColor}
              onFocus={handleFocusInput}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};
