import { InputHTMLAttributes } from 'react';

export interface ITextArea extends InputHTMLAttributes<HTMLTextAreaElement> {
  title?: string;
  content?: string;
}

export const TextArea = ({ title, content, className, disabled, required, ...areaProps }: ITextArea): JSX.Element => {
  const estiloArea: string = disabled ? 'icx-area-disabled' : 'icx-area-active';
  const estiloTitle = disabled ? 'icx-text-gray-300' : 'icx-text-neutral-500';

  return (
    <div className="icx-px-1 icx-py-1 icx-flex icx-flex-col icx-gap-8">
      <div className="icx-w-full icx-flex icx-flex-col icx-gap-y-2">
        {title && (
          <label htmlFor={title} className={estiloTitle}>
            {title} {required ? <span>*</span> : ''}
          </label>
        )}
        <textarea
          className={`icx-w-full
                    icx-placeholder-gray-400/70 
                    icx-rounded-lg 
                    icx-border 
                    icx-border-neutral-200 
                    icx-px-4 
                    icx-h-32 
                    icx-py-2 
                    icx-text-gray-700 
                    ${estiloArea}
                    ${className}
                    `}
          required={required}
          disabled={disabled}
          id={title}
          {...areaProps}
        >
          {content}
        </textarea>
      </div>
    </div>
  );
};
