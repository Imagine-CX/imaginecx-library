import './style.css';

export interface IHelloWorld {
  text: string;
}

export const Helloworld = ({ text }: IHelloWorld) => {
  return <div className="icx-text-3xl icx-font-bold icx-underline text-red-red">This is test text: {text}</div>;
};
