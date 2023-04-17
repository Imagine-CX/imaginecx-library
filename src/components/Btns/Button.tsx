import '../style.css';

export interface IBtnPrimary {
  text: string;
  color: string;
  disabled?: boolean;
  handleClick?: () => void;
}

export const Button = ({ text, color, disabled, handleClick }: IBtnPrimary): JSX.Element => {
  const estiloBtn: string = disabled ? 'icx-btn-disable' : `${color}`;

  return (
    <button
      className={`${estiloBtn} icx-m-2 icx-px-5 icx-py-2 icx-rounded-xl`}
      disabled={disabled}
      onClick={handleClick}
    >
      <span>{text}</span>
    </button>
  );
};
