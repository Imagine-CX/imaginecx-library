import { JSX } from 'react';
import { Close } from 'src/assets/Close';

import header from '../../assets/SMS-Cards.png';

interface IModal extends React.PropsWithChildren {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({ open, setOpen, children }: IModal): JSX.Element => {
  return (
    <>
      {open && (
        <div className="icx-fixed icx-inset-0 icx-z-50 icx-overflow-y-auto">
          <div
            className="icx-fixed icx-inset-0 icx-w-full icx-h-full icx-bg-white icx-opacity-70"
            onClick={() => setOpen(false)}
          ></div>
          <div className="icx-flex icx-items-center icx-min-h-screen icx-px-4 icx-py-8">
            <div className="icx-relative icx-w-full icx-max-w-lg icx-mx-auto icx-bg-white icx-rounded-lg element-shadow">
              <div
                className="icx-flex icx-items-center icx-justify-end icx-p-3 icx-rounded-lg icx-border-b icx-bg-cover icx-bg-center"
                style={{ backgroundImage: `url(${header})` }}
              >
                <button className="icx-p-2 icx-text-gray-400 icx-rounded-md " onClick={() => setOpen(false)}>
                  <Close className="icx-w-5 icx-h-5 icx-mx-auto icx-text-white" />
                </button>
              </div>
              <div>{children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
