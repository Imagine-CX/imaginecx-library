import { Close } from 'src/assets/Close';

export interface IAlert extends React.HTMLAttributes<HTMLDivElement> {
  icon: JSX.Element;
  type: 'success' | 'error' | string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: string | JSX.Element | JSX.Element[];
}

const selectStyleAlert = (type: string): string => {
  if (type === 'success') {
    type = `icx-bg-success-100`;
  } else if (type === 'error') {
    type = `icx-bg-error-100`;
  } else {
    type = 'icx-bg-gray-600';
  }

  return type;
};

export const Alert = ({ icon, type, open, setOpen, children }: IAlert): JSX.Element => {
  const styleAlert = selectStyleAlert(type);

  return (
    <>
      {open && (
        <div className={`alert icx-w-full icx-max-w-sm icx-overflow-hidden ${styleAlert} icx-rounded-lg icx-shadow-md`}>
          <div className="icx-container icx-flex icx-items-center icx-justify-between icx-mx-auto icx-px-3 icx-py-5">
            <div className="icx-flex">
              <div className={`icx-flex icx-items-center icx-justify-center icx-w-14 ${styleAlert}`}>{icon}</div>
              <p className="icx-mx-3 icx-pt-1 icx-text-white">{children}</p>
            </div>
            <button
              className="icx-p-1 icx-transition-colors icx-duration-300 icx-transform icx-rounded-md hover:icx-bg-opacity-25 hover:icx-bg-gray-600 focus:icx-outline-none"
              onClick={() => setOpen(false)}
            >
              <Close />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
