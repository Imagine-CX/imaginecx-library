interface ICard extends React.PropsWithChildren {
  title?: string;
  type?: string;
}

const selectStyleCard = (type: string | undefined): string => {
  if (type === 'success') {
    return `icx-card-success icx-justify-center icx-text-white`;
  } else if (type === 'error') {
    return `icx-card-error icx-justify-center icx-text-white`;
  } else if (type === 'finish') {
    return `icx-card-finish icx-justify-center icx-text-white`;
  } else if (type === 'pending') {
    return `icx-card-pending icx-justify-center icx-text-white`;
  } else if (type === 'primary') {
    return `icx-card-primary icx-justify-center icx-text-white`;
  } else if (type === 'inactive') {
    return `icx-card-inactive icx-justify-center icx-text-white`;
  } else if (!type) {
    return `icx-justify-start`;
  }
  return '';
};

export const Card = ({ title, type, children }: ICard): JSX.Element => {
  // const estiloCard: string = !color ? 'icx-justify-start' : `${color} icx-justify-center icx-text-white`;
  const estiloCard = selectStyleCard(type);

  return (
    <div className="icx-mx-auto icx-shadow-lg icx-border-t-2 icx-rounded-lg icx-w-full icx-pb-2">
      <div className={`icx-flex icx-rounded-t-lg icx-items-center icx-px-5 icx-py-3 ${estiloCard}`}>
        <p className="icx-font-bold">{title}</p>
      </div>
      <hr />
      <div className="icx-flex icx-flex-col icx-gap-2 icx-m-4">{children}</div>
    </div>
  );
};
