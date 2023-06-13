import { useState } from 'react';

export interface ITooltip extends React.PropsWithChildren {
  text: string;
}

export const Tooltip = ({ text, children }: ITooltip): JSX.Element => {
  const [tooltipStatus, setTooltipStatus] = useState(0);
  return (
    <>
      <div className="icx-flex-col">
        <div className="icx-relative" onMouseEnter={() => setTooltipStatus(3)} onMouseLeave={() => setTooltipStatus(0)}>
          <div className="icx-mr-2 icx-cursor-pointer">{children}</div>
          {tooltipStatus == 3 && (
            <div
              role="tooltip"
              className="icx-z-20 icx--mt-12 icx-w-64 icx-absolute icx-transition icx-duration-150 icx-ease-in-out icx-left-0 icx-ml-12 icx-shadow-lg icx-bg-black icx-p-3 icx-rounded"
            >
              <svg
                className="icx-absolute icx-left-0 icx--ml-2 icx-bottom-0 icx-top-0 icx-h-full"
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
              <p className="icx-text-xs icx-leading-4 icx-text-white">{text}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
