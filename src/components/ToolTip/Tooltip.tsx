import { useState } from 'react';

export interface ITooltip {
  text: string;
}

export const Tooltip = ({ text }: ITooltip): JSX.Element => {
  const [tooltipStatus, setTooltipStatus] = useState(0);
  return (
    <>
      <div className="icx-flex-col">
        <div className="icx-relative" onMouseEnter={() => setTooltipStatus(3)} onMouseLeave={() => setTooltipStatus(0)}>
          <div className="icx-mr-2 icx-cursor-pointer">
            <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M12 17V16.9929M12 14.8571C12 11.6429 15 12.3571 15 9.85714C15 8.27919 13.6568 7 12 7C10.6567 7 9.51961 7.84083 9.13733 9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="#1a1b1c"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </svg>
          </div>
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
