export const Alert = () => {
  return (
    <>
      <div className="icx-flex icx-bg-white icx-shadow-lg icx-rounded-lg icx-border icx-border-gray-300">
        <div className="icon icx-bg-green-600 icx-flex icx-justify-center icx-items-center icx-py-4 icx-px-6 icx-rounded-tr-3xl icx-rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icx-h-8 icx-w-8 icx-bg-white icx-rounded-full icx-text-green-600 icx-p-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="icx-flex icx-flex-col icx-p-4 icx-rounded-tr-lg icx-rounded-br-lg">
          <h2 className="icx-font-semibold icx-text-green-600">Éxito</h2>
          <p className="icx-text-gray-700">Alerta</p>
        </div>
      </div>
    </>
  );
};
