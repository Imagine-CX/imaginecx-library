import { JSX, ReactNode } from 'react';
import { Close } from 'src/assets/Close';

export interface IAlert extends React.HTMLAttributes<HTMLDivElement> {
  icon: JSX.Element;
  type: 'success' | 'error' | 'warning' | string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  close?: boolean;
  closeCustom?: ReactNode;
}

const selectStyleAlert = (type: string): string => {
  if (type === 'success') {
    type = `icx-bg-success-100`;
  } else if (type === 'error') {
    type = `icx-bg-error-100`;
  } else if (type === 'warning') {
    type = `icx-bg-secondary-400`;
  } else {
    type = 'icx-bg-gray-600';
  }

  return type;
};

export const Alert: React.FC<IAlert> = ({ icon, type, open, setOpen, close, closeCustom, children }): JSX.Element => {
  const styleAlert = selectStyleAlert(type);

  return (
    <>
      {open && (
        <div className="icx-fixed icx-bottom-0 icx-right-0 icx-m-5 icx-max-w-lg icx-z-50">
          <div className={`alert icx-w-full icx-overflow-hidden ${styleAlert} icx-rounded-lg icx-shadow-md`}>
            <div className="icx-container icx-flex icx-items-center icx-justify-between icx-mx-auto icx-px-3 icx-py-5">
              <div className="icx-flex icx-gap-3">
                <div className={`icx-flex icx-items-center icx-justify-center icx-w-14 ${styleAlert}`}>{icon}</div>
                <p className="icx-mr-3 icx-pt-1 icx-text-white">{children}</p>
              </div>
              {close && (
                <button
                  className="icx-p-1 icx-transition-colors icx-duration-300 icx-transform icx-rounded-md hover:icx-bg-opacity-25 hover:icx-bg-gray-600 focus:icx-outline-none"
                  onClick={() => setOpen(false)}
                >
                  <Close className="icx-w-5 icx-h-5 icx-mx-auto icx-text-white" />
                </button>
              )}
              {closeCustom && <>{closeCustom}</>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
