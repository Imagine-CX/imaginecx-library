import { ChangeEventHandler, FocusEventHandler, useEffect, useState } from 'react';

interface ITimePicker {
  initialValue: string;
  setValue: (value: string) => void;
  required?: boolean;
  label?: string;
  idLabel?: string;
  classNameLabel?: string;
}

export const TimePicker = ({
  initialValue,
  setValue,
  label,
  idLabel,
  classNameLabel,
  required = false,
}: ITimePicker) => {
  const [hours, setHours] = useState<string | number>('00');
  const [minutes, setMinutes] = useState<string | number>('00');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (initialValue) {
      const value = initialValue.split(':');
      setHours(String(Math.min(Math.max(parseInt(value[0], 10), 0), 23)).padStart(2, '0'));
      setMinutes(String(Math.min(Math.max(parseInt(value[1], 10), 0), 59)).padStart(2, '0'));
    }
  }, []);

  const handleContainerFocus = () => {
    setIsFocused(true);
  };

  const handleContainerBlur = () => {
    setIsFocused(false);
  };

  const handlerHours: ChangeEventHandler<HTMLInputElement> = (e) => {
    let valueHours = e.target.value;
    if (valueHours.length > 2) {
      valueHours = valueHours.substring(1, 3);
    }
    const newHours = parseInt(valueHours, 10);
    const paddedHours = String(Math.min(Math.max(newHours, 0), 23)).padStart(2, '0');
    setHours(paddedHours);
    setValue(`${paddedHours}:${String(minutes).padStart(2, '0')}`);
  };

  const handlerMinutes: ChangeEventHandler<HTMLInputElement> = (e) => {
    let valueminutes = e.target.value;
    if (valueminutes.length > 2) {
      valueminutes = valueminutes.substring(1, 3);
    }
    const newMinutes = parseInt(valueminutes, 10);
    const paddedMinutes = String(Math.min(Math.max(newMinutes, 0), 59)).padStart(2, '0');
    setMinutes(paddedMinutes);
    setValue(`${String(hours).padStart(2, '0')}:${paddedMinutes}`);
  };

  const handleFocusInput: FocusEventHandler<HTMLInputElement> = (e) => {
    e.target.select();
  };

  return (
    <div className="icx-flex icx-flex-col icx-gap-1 icx-relative">
      <label className={`icx-w-fit ${classNameLabel}`} htmlFor={idLabel}>
        {label} {required ? <span>*</span> : ''}
      </label>
      <div
        className={`icx-flex icx-items-center icx-border ${
          isFocused ? 'icx-border-primary-300' : 'icx-border-gray-300'
        } icx-px-4 icx-py-1 icx-transition icx-duration-300 icx-text-gray-700 icx-w-full icx-rounded-lg`}
        onFocus={handleContainerFocus}
        onBlur={handleContainerBlur}
      >
        <input
          id={idLabel}
          className="icx-w-1/2 icx-mr-2 icx-text-center icx-outline-none"
          type="number"
          value={hours}
          onChange={handlerHours}
          maxLength={2}
          onFocus={handleFocusInput}
        />
        <span className="text-gray-500">:</span>
        <input
          className="icx-w-1/2 icx-ml-2 icx-text-center icx-outline-none"
          type="number"
          value={minutes}
          onChange={handlerMinutes}
          maxLength={2}
          onFocus={handleFocusInput}
        />
      </div>
    </div>
  );
};
