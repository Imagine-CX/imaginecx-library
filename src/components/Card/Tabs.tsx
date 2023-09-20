import { ChangeEvent, ReactElement, useState } from 'react';
import { Close } from 'src/assets/Close';

export interface ITabs {
  tabs: (string | null)[];
  content: (ReactElement | null)[];
  navElement?: ReactElement | ReactElement[];
  iconSmScreen?: ReactElement | ReactElement[] | string;
}

export const Tabs = ({ tabs, content, navElement, iconSmScreen }: ITabs): JSX.Element => {
  const [selectedItem, setSelectedItem] = useState(0);

  const filteredTabs = tabs.filter((item) => item !== null);
  const filteredContent = content.filter((item) => item !== null);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selectedIndex = tabs.indexOf(selectedValue);
    setSelectedItem(selectedIndex);
  };

  const [hiddenElement, setHiddenElement] = useState(false);

  return (
    <>
      <div className="icx-bg-white icx-mx-auto element-shadow icx-rounded-lg icx-w-full icx-pb-1">
        <div className="sm:icx-hidden icx-relative icx-w-full icx-mx-auto icx-bg-white icx-rounded">
          <div className="icx-absolute icx-ml-4 icx-my-3 icx-z-0 icx-w-6 icx-h-6">
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M4 6H20M4 12H20M4 18H20"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </div>
          <div className="icx-flex icx-border-b">
            {!hiddenElement ? (
              <div className="icx-w-full icx-flex icx-justify-between">
                <select
                  role="tablist"
                  onChange={handleSelectChange}
                  className="icx-form-select icx-block icx-w-full icx-py-3 icx-rounded icx-appearance-none icx-bg-transparent icx-relative icx-z-10 icx-font-bold icx-pl-12"
                >
                  {filteredTabs.map((item, index) => (
                    <option key={index} className="icx-text-sm icx-text-gray-600">
                      {item}
                    </option>
                  ))}
                </select>
                <button className="icx-mr-4" onClick={() => setHiddenElement(true)}>
                  {iconSmScreen}
                </button>
              </div>
            ) : (
              <div className="icx-w-full icx-flex icx-justify-between icx-pb-1">
                <div className="icx-flex icx-items-center">{navElement}</div>
                <button className="icx-mr-4" onClick={() => setHiddenElement(false)}>
                  <Close className="icx-w-5 icx-h-5 icx-mx-auto icx-text-black" />
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="xl:icx-w-full xl:icx-mx-0 icx-hidden sm:icx-block">
          <ul
            role="tablist"
            className="icx-max-w-screen-xl icx-mx-auto icx-border-b icx-flex icx-items-center icx-gap-x-2 icx-justify-between"
          >
            <div className="icx-flex">
              {filteredTabs.map((item, index) => (
                <li
                  key={index}
                  className={`icx-py-2 icx-border-b-4 ${
                    +selectedItem === index
                      ? 'icx-border-primary-400 icx-font-bold'
                      : 'icx-border-white icx-text-gray-400'
                  }`}
                >
                  <button
                    role="tab"
                    aria-selected={selectedItem === index ? true : false}
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
        </div>
        <div className="icx-max-w-screen-xl icx-mx-auto icx-px-1 icx-py-3">
          {filteredContent.map((item, index) => (
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
    </>
  );
};
