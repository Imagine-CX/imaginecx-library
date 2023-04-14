import '../style.css';

export interface IBtnPrimary {
  text: string;
  color: string;
}

export const Button = ({ text, color }: IBtnPrimary) => {
  return (
    <button className={`${color} icx-m-3 icx-px-8 icx-py-2 icx-rounded-full`}>
      <span>{text}</span>
    </button>
  );
};
