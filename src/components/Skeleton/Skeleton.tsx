export interface ISkeleton {
  variant: 'circular' | 'rectangular' | 'rounded' | 'text';
  width?: `${number}px` | `${number}rem` | `${number}em` | `${number}vw` | `${number}%`;
  height?: `${number}px` | `${number}rem` | `${number}em` | `${number}vh` | `${number}%`;
}

export const Skeleton = ({ variant, width, height }: ISkeleton) => {
  const style = {
    width: `${width}`,
    height: `${height}`,
  };

  const renderVariant = () => {
    switch (variant) {
      case 'circular':
        return <div style={style} className={`icx-skeleton icx-rounded-full icx-shrink-0 icx-object-cover`}></div>;
      case 'rectangular':
        return <div style={style} className="icx-w-full icx-h-full icx-skeleton"></div>;
      case 'rounded':
        return <div style={style} className="icx-w-full icx-h-full icx-skeleton icx-rounded-lg"></div>;
      case 'text':
        return <div style={style} className="icx-skeleton icx-w-full icx-h-3 icx-mb-1 icx-rounded-sm"></div>;
      default:
        return <div className={`icx-w-full icx-h-full icx-skeleton`}></div>;
    }
  };
  return <>{renderVariant()}</>;
};
