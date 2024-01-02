import { ChangeEventHandler, useEffect, useState } from 'react';

interface ITimePicker {
  initialValue: string;
  setValue: (value: string) => void;
}

export const TimePicker = ({ initialValue, setValue }: ITimePicker) => {
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
    const newHours = parseInt(e.target.value, 10);
    const paddedHours = String(Math.min(Math.max(newHours, 0), 23)).padStart(2, '0');
    setHours(paddedHours);
    setValue(`${paddedHours}:${String(minutes).padStart(2, '0')}`);
  };

  const handlerMinutes: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newMinutes = parseInt(e.target.value, 10);
    const paddedMinutes = String(Math.min(Math.max(newMinutes, 0), 59)).padStart(2, '0');
    setMinutes(paddedMinutes);
    setValue(`${paddedMinutes}:${String(minutes).padStart(2, '0')}`);
  };

  return (
    <div className="icx-flex icx-flex-col icx-gap-8 icx-relative">
      <div
        className={`icx-flex icx-items-center icx-border ${
          isFocused ? 'icx-border-primary-300' : 'icx-border-gray-300'
        } icx-px-4 icx-py-1 icx-transition icx-duration-300 icx-text-gray-700 icx-w-full icx-rounded-lg`}
        onFocus={handleContainerFocus}
        onBlur={handleContainerBlur}
      >
        <input
          className="icx-w-1/2 icx-mr-2 icx-text-center icx-outline-none"
          type="number"
          value={hours}
          onChange={handlerHours}
          maxLength={2}
        />
        <span className="text-gray-500">:</span>
        <input
          className="icx-w-1/2 icx-ml-2 icx-text-center icx-outline-none"
          type="number"
          value={minutes}
          onChange={handlerMinutes}
          maxLength={2}
        />
      </div>
    </div>
  );
};
