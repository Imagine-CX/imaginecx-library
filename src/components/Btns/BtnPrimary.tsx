export interface IBtnPrimary {
  text: string;
}

export const BtnPrimary = ({ text }: IBtnPrimary) => {
  return (
    <button className="bg-red-500 m-10 p-2 rounded-md">
      <span className="text-white underline">{text}</span>
    </button>
  );
};
