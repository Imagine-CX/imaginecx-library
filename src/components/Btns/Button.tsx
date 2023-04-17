import '../style.css';

export interface IBtnPrimary {
  text: string;
  color: string;
  disabled?: boolean;
}

export const Button = ({ text, color, disabled }: IBtnPrimary): JSX.Element => {
  const estiloBtn: string = disabled ? 'icx-btn-disable' : `${color}`;

  return (
    <button className={`${estiloBtn} icx-m-3 icx-px-8 icx-py-2 icx-rounded-full`} disabled={disabled}>
      <span>{text}</span>
    </button>
  );
};
