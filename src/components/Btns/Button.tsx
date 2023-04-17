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
      className={`${estiloBtn} icx-m-3 icx-px-8 icx-py-2 icx-rounded-full`}
      disabled={disabled}
      onClick={handleClick}
    >
      <span>{text}</span>
    </button>
  );
};
