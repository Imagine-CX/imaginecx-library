interface ICard extends React.PropsWithChildren {
  title?: string;
  type?: 'success' | 'success-light' | 'error' | 'info' | 'warning' | 'primary' | 'inactive' | string;
}

enum TYPES_CARD {
  SUCCESS = 'success',
  'SUCCESS-LIGHT' = 'success-light',
  ERROR = 'error',
  INFO = 'info',
  WARNING = 'warning',
  PRIMARY = 'primary',
  INACTIVE = 'inactive',
}

const selectStyleCard = (type: string | undefined): string => {
  if (type === TYPES_CARD.SUCCESS) {
    return `icx-card-success icx-justify-center icx-text-white`;
  } else if (type === TYPES_CARD['SUCCESS-LIGHT']) {
    return `icx-card-success-light icx-justify-center icx-text-white`;
  } else if (type === TYPES_CARD.ERROR) {
    return `icx-card-error icx-justify-center icx-text-white`;
  } else if (type === TYPES_CARD.INFO) {
    return `icx-card-info icx-justify-center icx-text-white`;
  } else if (type === TYPES_CARD.WARNING) {
    return `icx-card-warning icx-justify-center icx-text-white`;
  } else if (type === TYPES_CARD.PRIMARY) {
    return `icx-card-primary icx-justify-center icx-text-white`;
  } else if (type === TYPES_CARD.INACTIVE) {
    return `icx-card-inactive icx-justify-center icx-text-white`;
  } else if (!type) {
    return `icx-justify-start`;
  }
  return '';
};

export const Card = ({ title, type, children }: ICard): JSX.Element => {
  const estiloCard = selectStyleCard(type);

  return (
    <div className="icx-mx-auto element-shadow icx-border-t-2 icx-rounded-lg icx-w-full icx-pb-2">
      <div className={`icx-flex icx-rounded-t-lg icx-items-center icx-px-5 icx-py-3 ${estiloCard}`}>
        <p className="icx-font-bold">{title}</p>
      </div>
      <hr />
      <div className="icx-flex icx-flex-col icx-gap-2 icx-m-4">{children}</div>
    </div>
  );
};
