import { HTMLProps, useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

interface ISelector extends HTMLProps<HTMLUListElement> {
  options: Array<{
    id: number;
    name: string;
  }>;
}

export const Selector = ({ options, ...props }: ISelector): JSX.Element => {
  const [selected, setSelected] = useState('');
  const [open, setOpen] = useState(false);

  return (
    <div className="icx-relative icx-px-1 icx-py-1 icx-flex icx-flex-col icx-gap-8">
      <div className="icx-w-full icx-flex icx-flex-col icx-gap-y-2">
        <label>
          {/* {label} {required ? <span className="icx-text-neutral-500">*</span> : ''} */}
          Label
        </label>
        <div
          onClick={() => setOpen(!open)}
          className={`icx-w-full
                icx-py-2
                icx-px-4
                focus:icx-border-primary-400
                icx-transition
                icx-duration-300
                icx-ease-out
                ${!selected && 'icx-text-gray-500'}
                icx-bg-white
                icx-text-gray-700
                icx-border
                icx-flex
                icx-justify-between
                icx-rounded-md
                icx-shadow-sm
                icx-outline-none
                icx-appearance-none
                icx-cursor-pointer`}
        >
          {selected ? (selected?.length > 30 ? selected?.substring(0.3) + '...' : selected) : 'Seleccione...'}
          <BsChevronDown size={20} className="icx-mt-0.5" />
        </div>
        <ul
          className={`icx-absolute icx-w-full icx-mt-20 icx-z-10 icx-bg-white icx-text-gray-700 icx-overflow-y-auto icx-border icx-rounded-lg ${
            open ? 'icx-block icx-max-h-60' : 'icx-hidden'
          }`}
          {...props}
        >
          {options.map((option) => (
            <li
              key={option.id}
              className={`icx-p-2
                        icx-cursor-pointer 
                        hover:icx-bg-gray-200
                        hover:icx-text-gray-600
                        ${option.name === selected && 'icx-bg-primary-400 icx-text-white'}`}
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
