import { ReactNode } from 'react';

export interface ILoader {
  children: ReactNode;
  className?: string;
}

export const Loader = ({ children, className }: ILoader) => {
  return (
    <div className={`icx:fixed icx:inset-0 icx:z-40 icx:overflow-y-auto ${className}`}>
      <div className="icx:fixed icx:inset-0 icx:w-full icx:h-full icx:bg-white icx:opacity-70"></div>
      <div className="icx:flex icx:items-center icx:min-h-screen icx:px-4 icx:py-8">
        <div className="icx:relative icx:w-full icx:max-w-lg icx:mx-auto icx:text-center">
          <div className="icx-loader">{children}</div>
        </div>
      </div>
    </div>
  );
};
