import header from '../../assets/SMS-Cards.png';

interface IModal extends React.PropsWithChildren {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({ open, setOpen, children }: IModal): JSX.Element => {
  return (
    <>
      {open && (
        <div className="icx-fixed icx-inset-0 icx-z-10 icx-overflow-y-auto">
          <div
            className="icx-fixed icx-inset-0 icx-w-full icx-h-full icx-bg-black icx-opacity-40"
            onClick={() => setOpen(false)}
          ></div>
          <div className="icx-flex icx-items-center icx-min-h-screen icx-px-4 icx-py-8">
            <div className="icx-relative icx-w-full icx-max-w-lg icx-mx-auto icx-bg-white icx-rounded-lg icx-shadow-lg">
              <div
                className="icx-flex icx-items-center icx-justify-end icx-p-4 icx-rounded-t-lg icx-border-b icx-bg-cover icx-bg-center"
                style={{ backgroundImage: `url(${header})` }}
              >
                <button className="icx-p-2 icx-text-gray-400 icx-rounded-md " onClick={() => setOpen(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icx-w-6 icx-h-6 icx-mx-auto icx-text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
