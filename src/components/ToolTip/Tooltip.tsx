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
  const tooltipBaseClasses = 'icx:relative icx:inline-flex';

  const tooltipTextBaseClasses =
    'icx:invisible icx:absolute icx:w-max icx:max-w-56 icx:text-center icx:p-1 icx:rounded-md icx:z-10 icx:opacity-0 icx:transition-opacity icx:duration-300 icx:shadow-md icx:px-2';

  const themeClasses = {
    light: 'icx:bg-white icx:text-gray-800 icx:border icx:border-gray-200',
    dark: 'icx:bg-black icx:text-white',
  };

  const positionClasses = {
    right: 'icx:top-1/2 icx:left-full icx:transform icx:-translate-y-1/2 icx:ml-2',
    bottom: 'icx:top-full icx:left-1/2 icx:transform icx:-translate-x-1/2 icx:mt-2',
    top: 'icx:bottom-full icx:left-1/2 icx:transform icx:-translate-x-1/2 icx:mb-2',
    left: 'icx:top-1/2 icx:right-full icx:transform icx:-translate-y-1/2 icx:mr-2',
  };

  const getArrowElement = () => {
    let arrowClasses = 'icx:absolute icx:w-0 icx:h-0 icx:border-solid';

    if (position === 'right') {
      arrowClasses += ' icx:top-1/2 icx:right-full icx:transform icx:-translate-y-1/2';
      arrowClasses += ' icx:border-t-8 icx:border-b-8 icx:border-r-8 icx:border-l-0';
      arrowClasses += ' icx:border-t-transparent icx:border-b-transparent';
      arrowClasses += theme === 'light' ? ' icx:border-r-white' : ' icx:border-r-black';
    } else if (position === 'bottom') {
      arrowClasses += ' icx:bottom-full icx:left-1/2 icx:transform icx:-translate-x-1/2';
      arrowClasses += ' icx:border-l-8 icx:border-r-8 icx:border-b-8 icx:border-t-0';
      arrowClasses += ' icx:border-l-transparent icx:border-r-transparent';
      arrowClasses += theme === 'light' ? ' icx:border-b-white' : ' icx:border-b-black';
    } else if (position === 'top') {
      arrowClasses += ' icx:top-full icx:left-1/2 icx:transform icx:-translate-x-1/2';
      arrowClasses += ' icx:border-l-8 icx:border-r-8 icx:border-t-8 icx:border-b-0';
      arrowClasses += ' icx:border-l-transparent icx:border-r-transparent';
      arrowClasses += theme === 'light' ? ' icx:border-t-white' : ' icx:border-t-black';
    } else if (position === 'left') {
      arrowClasses += ' icx:top-1/2 icx:left-full icx:transform icx:-translate-y-1/2';
      arrowClasses += ' icx:border-t-8 icx:border-b-8 icx:border-l-8 icx:border-r-0';
      arrowClasses += ' icx:border-t-transparent icx:border-b-transparent';
      arrowClasses += theme === 'light' ? ' icx:border-l-white' : ' icx:border-l-black';
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
        <ListComponent className={`icx:text-left icx:pl-5 ${listType === 'ul' ? 'icx:list-disc' : 'icx:list-decimal'}`}>
          {text.map((item, index) => (
            <li key={index} className="icx:py-1">
              {item}
            </li>
          ))}
        </ListComponent>
      );
    }
    return text;
  };

  return (
    <div className={`icx-tooltip ${tooltipBaseClasses} ${containerClass || ''} group`}>
      {children}
      <div
        className={`icx-tooltiptext ${tooltipTextBaseClasses} ${themeClasses[theme]} ${positionClasses[position]} group-hover:icx:visible group-hover:icx:opacity-100`}
      >
        {renderTooltipContent()}
        {getArrowElement()}
      </div>
    </div>
  );
};
