import { useState } from 'react';

export interface ITabs {
  tabs: string[];
  content: JSX.Element[];
  navElement?: JSX.Element;
}

export const Tabs = ({ tabs, content, navElement }: ITabs): JSX.Element => {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className="icx-bg-white icx-mx-auto icx-shadow-lg icx-border icx-rounded-lg icx-w-full icx-pb-1">
      <ul
        role="tablist"
        className="icx-max-w-screen-xl icx-mx-auto icx-border-b icx-flex icx-items-center icx-gap-x-2 icx-justify-between"
      >
        <div className="icx-flex">
          {tabs.map((item, index) => (
            <li
              key={index}
              className={`icx-py-2 icx-border-b-4 ${
                selectedItem == index ? 'icx-border-primary-400 icx-font-bold' : 'icx-border-white icx-text-gray-400'
              }`}
            >
              <button
                role="tab"
                aria-selected={selectedItem == index ? true : false}
                aria-controls={`tabpanel-${index + 1}`}
                className="icx-py-1 icx-px-4 icx-rounded-lg icx-duration-150"
                onClick={() => setSelectedItem(index)}
              >
                {item}
              </button>
            </li>
          ))}
        </div>
        <div className="icx-flex icx-items-center">{navElement}</div>
      </ul>
      <div className="icx-max-w-screen-xl icx-mx-auto icx-px-1 icx-py-3">
        {content.map((item, index) => (
          <div
            key={index}
            id={`tabpanel-${index + 1}`}
            role="tabpanel"
            aria-labelledby={`tab-${index + 1}`}
            className={`${selectedItem === index ? 'icx-block' : 'icx-hidden'}`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
