import { MouseEventHandler, useRef, useState } from 'react';

import { useOutsideAlerter } from '../hooks/useOutsideAlerter';

export interface ItemsRender {
  id: string;
  value: string;
  click: MouseEventHandler<HTMLAnchorElement>;
}

export interface IDropdown {
  title: string;
  items: ItemsRender[];
  icon?: JSX.Element | null;
  disabled?: boolean;
}

export const Dropdown = ({ title, items, disabled = false, icon = null }: IDropdown): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>('');

  const wrapperRef = useRef<HTMLDivElement>(null);

  useOutsideAlerter({ ref: wrapperRef, active: open, setActive: setOpen });

  const activeDropdown = 'icx-border-primary-500 icx-text-disable-200';
  const disabledDropdown = 'icx-text-disable-200 icx-bg-neutral-200 icx-border-0 icx-cursor-not-allowed';

  const activeSelected =
    'icx-bg-primary-400 icx-text-neutral-100 icx-font-medium hover:icx-bg-primary-400 hover:icx-text-neutral-100';
  const activeIcon = 'icx-bg-primary-500';
  const disabledIcon = 'icx-text-disable-200 icx-bg-neutral-200 icx-cursor-not-allowed';

  const getBackgroundColor = () => {
    if (disabled) {
      return disabledIcon;
    }
    if (open) {
      return activeIcon;
    }
    return 'icx-bg-disable-200';
  };

  const handleOpen: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  const handleClickSelected = (
    value: string,
    callback: MouseEventHandler<HTMLAnchorElement>,
  ): MouseEventHandler<HTMLAnchorElement> => {
    const eventHandler: MouseEventHandler<HTMLAnchorElement> = (event) => {
      setSelected(value);
      callback(event);
    };
    return eventHandler;
  };

  return (
    <div ref={wrapperRef} className="icx-text-left icx-font-imagine icx-text-md icx-w-full icx-min-w-[10rem] icx-flex">
      {icon && (
        <div
          className={`${getBackgroundColor()} icx-inline-block  icx-text-bg-neutral-100 icx-w-12 icx-p-2 icx-rounded-s-lg`}
        >
          {icon}
        </div>
      )}
      <div className="icx-relative icx-w-full icx-min-w-[10rem] icx-inline-block">
        <button
          type="button"
          disabled={disabled}
          onClick={handleOpen}
          className={` icx-text-disable-200 icx-bg-neutral-100 icx-border icx-border-disable-200 icx-rounded-[0.5rem] icx-w-full icx-p-[0.60rem] icx-flex icx-justify-between icx-items-center icx-gap-x-1.5 focus:outline-none ${
            open ? activeDropdown : ''
          } active:icx-border-primary-500 ${disabled ? disabledDropdown : ''} ${icon ? 'icx-rounded-s-none' : ''}`}
        >
          {title}
          <IconDropdown color={open ? '#F3901D' : undefined} />
        </button>
        {open && (
          <div className="icx-absolute icx-right-0 icx-mt-1 icx-z-10 icx-w-full icx-origin-top-right icx-border icx-border-primary-500 icx-rounded-[0.5rem] icx-flex icx-flex-col focus:outline-none icx-animate-fade-in icx-overflow-hidden">
            {items.map((item) => (
              <a
                className={`icx-px-2.5 icx-pb-px icx-pt-1 icx-cursor-pointer hover:icx-bg-neutral-200 ${
                  item.id === selected ? activeSelected : ''
                }`}
                key={item.id}
                onClick={handleClickSelected(item.id, item.click)}
              >
                {item.value}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

interface IIconDropdown {
  color?: string;
}

const IconDropdown = ({ color = '#3F3F3F' }: IIconDropdown): JSX.Element => {
  return (
    <svg
      fill={color}
      width="21px"
      height="21px"
      viewBox="0 0 32.00 32.00"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#3F3F3F"
      strokeWidth="0.00032"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="#CCCCCC"
        strokeWidth="0.064"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {' '}
        <title>dropdown</title>{' '}
        <path d="M18.813 11.406l-7.906 9.906c-0.75 0.906-1.906 0.906-2.625 0l-7.906-9.906c-0.75-0.938-0.375-1.656 0.781-1.656h16.875c1.188 0 1.531 0.719 0.781 1.656z"></path>{' '}
      </g>
    </svg>
  );
};
