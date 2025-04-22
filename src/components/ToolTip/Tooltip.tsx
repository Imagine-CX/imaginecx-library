import { isValidElement, JSX, ReactNode } from 'react';

export interface ITooltip extends React.PropsWithChildren {
  text: string | ReactNode | string[];
  position?: 'top' | 'bottom' | 'left' | 'right';
  containerClass?: string;
  theme?: 'dark' | 'light';
  listType?: 'ul' | 'ol';
}

export const Tooltip = ({
  text,
  children,
  position = 'right',
  containerClass,
  theme = 'dark',
  listType = 'ul',
}: ITooltip): JSX.Element => {
  const tooltipBaseClasses = 'icx-relative icx-inline-flex';

  const tooltipTextBaseClasses =
    'icx-invisible icx-absolute icx-w-max icx-max-w-56 icx-text-center icx-p-1 icx-rounded-md icx-z-10 icx-opacity-0 icx-transition-opacity icx-duration-300 icx-shadow-md icx-px-2';

  const themeClasses = {
    light: 'icx-bg-white icx-text-gray-800 icx-border icx-border-gray-200',
    dark: 'icx-bg-black icx-text-white',
  };

  const positionClasses = {
    right: 'icx-top-1/2 icx-left-full icx-transform icx--translate-y-1/2 icx-ml-2',
    bottom: 'icx-top-full icx-left-1/2 icx-transform icx--translate-x-1/2 icx-mt-2',
    top: 'icx-bottom-full icx-left-1/2 icx-transform icx--translate-x-1/2 icx-mb-2',
    left: 'icx-top-1/2 icx-right-full icx-transform icx--translate-y-1/2 icx-mr-2',
  };

  const getArrowElement = () => {
    let arrowClasses = 'icx-absolute icx-w-0 icx-h-0 icx-border-solid';

    if (position === 'right') {
      arrowClasses += ' icx-top-1/2 icx-right-full icx-transform icx--translate-y-1/2';
      arrowClasses += ' icx-border-t-8 icx-border-b-8 icx-border-r-8 icx-border-l-0';
      arrowClasses += ' icx-border-t-transparent icx-border-b-transparent';
      arrowClasses += theme === 'light' ? ' icx-border-r-white' : ' icx-border-r-black';
    } else if (position === 'bottom') {
      arrowClasses += ' icx-bottom-full icx-left-1/2 icx-transform icx--translate-x-1/2';
      arrowClasses += ' icx-border-l-8 icx-border-r-8 icx-border-b-8 icx-border-t-0';
      arrowClasses += ' icx-border-l-transparent icx-border-r-transparent';
      arrowClasses += theme === 'light' ? ' icx-border-b-white' : ' icx-border-b-black';
    } else if (position === 'top') {
      arrowClasses += ' icx-top-full icx-left-1/2 icx-transform icx--translate-x-1/2';
      arrowClasses += ' icx-border-l-8 icx-border-r-8 icx-border-t-8 icx-border-b-0';
      arrowClasses += ' icx-border-l-transparent icx-border-r-transparent';
      arrowClasses += theme === 'light' ? ' icx-border-t-white' : ' icx-border-t-black';
    } else if (position === 'left') {
      arrowClasses += ' icx-top-1/2 icx-left-full icx-transform icx--translate-y-1/2';
      arrowClasses += ' icx-border-t-8 icx-border-b-8 icx-border-l-8 icx-border-r-0';
      arrowClasses += ' icx-border-t-transparent icx-border-b-transparent';
      arrowClasses += theme === 'light' ? ' icx-border-l-white' : ' icx-border-l-black';
    }

    return <div className={arrowClasses}></div>;
  };

  const renderTooltipContent = () => {
    if (isValidElement(text)) {
      return text;
    }

    if (Array.isArray(text)) {
      const ListComponent = listType === 'ul' ? 'ul' : 'ol';
      return (
        <ListComponent className={`icx-text-left icx-pl-5 ${listType === 'ul' ? 'icx-list-disc' : 'icx-list-decimal'}`}>
          {text.map((item, index) => (
            <li key={index} className="icx-py-1">
              {item}
            </li>
          ))}
        </ListComponent>
      );
    }
    return text;
  };

  return (
    <>
      <div className="icx:flex-col icx:w-fit">
        <div className="icx:relative" onMouseEnter={() => setTooltipStatus(3)} onMouseLeave={() => setTooltipStatus(0)}>
          <div className="icx:mr-2 icx:cursor-pointer">{children}</div>
          {tooltipStatus === 3 && (
            <div
              role="tooltip"
              className="icx:z-20 icx:-mt-12 icx:w-64 icx:absolute icx:transition icx:duration-150 icx:ease-in-out icx:left-0 icx:ml-12 icx:shadow-lg icx:bg-black icx:p-3 icx:rounded"
            >
              <svg
                className="icx:absolute icx:left-0 icx:-ml-2 icx:bottom-0 icx:top-0 icx:h-full"
                width="9px"
                height="16px"
                viewBox="0 0 9 16"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <g id="Tooltips-" transform="translate(-874.000000, -1029.000000)" fill="#000000">
                    <g id="Group-3-Copy-16" transform="translate(850.000000, 975.000000)">
                      <g id="Group-2" transform="translate(24.000000, 0.000000)">
                        <polygon
                          id="Triangle"
                          transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) "
                          points="4.5 57.5 12.5 66.5 -3.5 66.5"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
              <p className="icx:text-xs icx:leading-4 icx:text-white">{text}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
