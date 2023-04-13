import './style.css';

export interface IHelloWorld {
  text: string;
}

export const Helloworld = ({ text }: IHelloWorld) => {
  return <div className="text-3xl font-bold underline text-red-red">This is test text: {text}</div>;
};
