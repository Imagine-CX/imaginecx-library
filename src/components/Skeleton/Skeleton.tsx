export interface ISkeleton {
  variant: 'circular' | 'rectangular' | 'rounded' | 'text';
  width?: `${number}px` | `${number}rem` | `${number}em` | `${number}vw` | `${number}%`;
  height?: `${number}px` | `${number}rem` | `${number}em` | `${number}vh` | `${number}%`;
  animation?: boolean;
}

export const Skeleton = ({ variant, width, height, animation }: ISkeleton) => {
  const style = {
    width: `${width}`,
    height: `${height}`,
  };
  const animationStyle = animation ? 'icx-skeleton' : 'icx-bg-slate-400';

  const renderVariant = () => {
    switch (variant) {
      case 'circular':
        return <div style={style} className={`${animationStyle} icx-rounded-full icx-shrink-0 icx-object-cover`}></div>;
      case 'rectangular':
        return <div style={style} className={`${animationStyle} icx-w-full icx-h-full`}></div>;
      case 'rounded':
        return <div style={style} className={`${animationStyle} icx-w-full icx-h-full icx-rounded-lg`}></div>;
      case 'text':
        return <div style={style} className={`${animationStyle} icx-w-full icx-h-3 icx-mb-1 icx-rounded-sm`}></div>;
      default:
        return <div className={`icx-w-full icx-h-full icx-skeleton`}></div>;
    }
  };
  return <>{renderVariant()}</>;
};
