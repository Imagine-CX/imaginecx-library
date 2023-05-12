export interface IAlert extends React.HTMLAttributes<HTMLDivElement> {
  message: string;
  icon: JSX.Element;
  type: string;
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

export const Alert = ({ message, icon, type }: IAlert): JSX.Element => {
  const validTypes = ['success', 'error'];

  const messageType = validTypes.includes(type) ? message : 'El tipo de alerta ingresado no existe';
  // const styleAlert = validTypes.includes(type) ? `icx-bg-success-100` : 'icx-bg-gray-600';
  const styleAlert = selectStyleAlert(type);

  return (
    <div
      className={`icx-flex icx-w-full icx-py-3 icx-max-w-sm icx-overflow-hidden ${styleAlert} icx-rounded-lg icx-shadow-md`}
    >
      <div className={`icx-flex icx-items-center icx-justify-center icx-w-12 icx-ml-3 ${styleAlert}`}>{icon}</div>

      <div className="icx-px-4 icx-py-2 icx--mx-3">
        <div className="icx-mx-3">
          <p className=" icx-text-white ">{messageType}</p>
        </div>
      </div>
    </div>
  );
};
