import '../style.css';

export interface IBtnPrimary {
  text: string;
  color: string
}

export const Button = ({ text, color }: IBtnPrimary) => {

  return (
    <button className={`${ color } m-10 px-8 py-3 rounded-full`}>
      <span className="text-white">{text}</span>
    </button>
  );
};
