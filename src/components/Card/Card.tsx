interface ICard extends React.PropsWithChildren {
  title?: string;
  color?: string;
}

export const Card = ({ title, color, children }: ICard): JSX.Element => {
  const estiloCard: string = !color ? 'icx-justify-start' : `${color} icx-justify-center icx-text-white`;

  return (
    <div className="icx-bg-white icx-mx-auto icx-shadow-lg icx-rounded-lg icx-w-full icx-pb-2">
      <div className={`icx-flex icx-rounded-t-lg icx-items-center icx-px-5 icx-py-3 ${estiloCard}`}>
        <p className="icx-font-bold">{title}</p>
      </div>
      <hr />
      <div className="icx-flex icx-flex-col icx-gap-2 icx-m-4">{children}</div>
    </div>
  );
};
