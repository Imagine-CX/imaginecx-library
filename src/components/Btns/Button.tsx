import '../style.css';

export interface IBtnPrimary {
  text: string;
  color: string;
}

export const Button = ({ text, color }: IBtnPrimary) => {
  return (
    <button className={`${color} icx-m-10 icx-px-8 icx-py-3 icx-rounded-full`}>
      <span className="icx-text-white">{text}</span>
    </button>
  );
};
