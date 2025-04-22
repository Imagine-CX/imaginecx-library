import { InputHTMLAttributes, JSX, useEffect, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

interface ISelector extends InputHTMLAttributes<HTMLInputElement> {
  options: Array<{
    id: number;
    name: string;
  }>;
  label?: string;
}

export const Selector = ({ options, label, required, value, disabled, ...props }: ISelector): JSX.Element => {
  const [selected, setSelected] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setSelected((value as string) || '');
  }, [value]);

  const estiloInput: string = disabled ? 'icx-selector-disabled' : 'icx-selector-active';

  return (
    <div className="icx:relative icx:px-1 icx:py-1 icx:flex icx:flex-col icx:gap-8">
      <div className="icx:w-full icx:flex icx:flex-col icx:gap-y-2">
        <label>
          {label} {required ? <span className="icx:text-neutral-500">*</span> : ''}
        </label>
        <fieldset
          onClick={() => setOpen(!open)}
          className={`icx:w-full
                icx:py-2
                icx:px-4
                ${estiloInput}
                icx:transition
                icx:duration-300
                icx:ease-out
                ${!selected && 'icx:text-gray-500'}
                icx:text-gray-700
                icx:border
                icx:flex
                icx:justify-between
                icx:rounded-md
                icx:outline-hidden
                icx:appearance-none
                `}
        >
          <input
            disabled={disabled}
            type="text"
            value={selected}
            readOnly
            className="icx:w-full icx:bg-transparent icx:outline-hidden icx:cursor-pointer"
            {...props}
          />
          <BsChevronDown size={20} className="icx:mt-0.5" />
        </fieldset>
        <ul
          className={`icx:absolute icx:w-full ${
            !label ? 'icx:mt-14' : 'icx:mt-20'
          } icx:z-10 icx:bg-white icx:text-gray-700 icx:overflow-y-auto icx:border icx:rounded-lg ${
            open ? 'icx:block icx:max-h-60' : 'icx:hidden'
          }`}
        >
          {options.map((option) => (
            <li
              key={option.id}
              className={`icx:p-2
                        icx:cursor-pointer 
                        icx:hover:bg-gray-200
                        icx:hover:text-gray-600
                        ${option.name === selected && 'icx:bg-primary-400 icx:text-white'}`}
              onClick={() => {
                setSelected(option.name);
                setOpen(false);
              }}
            >
              {option.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
