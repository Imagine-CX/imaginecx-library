import { useState } from 'react';

export interface ITabs {
  tabs: string[];
  content: JSX.Element[];
}

export const Tabs = ({ tabs, content }: ITabs): JSX.Element => {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className="icx-bg-white icx-mx-auto icx-shadow-lg icx-border icx-rounded-lg icx-w-full icx-pb-2">
      <ul
        role="tablist"
        className="icx-max-w-screen-xl icx-mx-auto icx-border-b icx-flex icx-items-center icx-gap-x-2 "
      >
        {tabs.map((item, idx) => (
          <li
            key={idx}
            className={`icx-py-2 icx-border-b-4 ${
              selectedItem == idx ? 'icx-border-primary-400 icx-font-bold' : 'icx-border-white icx-text-gray-400'
            }`}
          >
            <button
              role="tab"
              aria-selected={selectedItem == idx ? true : false}
              aria-controls={`tabpanel-${idx + 1}`}
              className="icx-py-1 icx-px-4 icx-rounded-lg icx-duration-150"
              onClick={() => setSelectedItem(idx)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      <div className="icx-max-w-screen-xl icx-mx-auto icx-px-1 icx-py-3">
        {content.map((item, idx) => (
          <div
            key={idx}
            id={`tabpanel-${idx + 1}`}
            role="tabpanel"
            aria-labelledby={`tab-${idx + 1}`}
            className={`${selectedItem === idx ? 'icx-block' : 'icx-hidden'}`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
