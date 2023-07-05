import { InputHTMLAttributes } from 'react';

interface ISelectorTest extends InputHTMLAttributes<HTMLSelectElement> {
  title?: string;
  options: Array<{
    value: number;
    label: string;
    hidden?: boolean;
  }>;
}

export const Select = ({ title, options, className, disabled, required, ...props }: ISelectorTest) => {
  const estiloSelect: string = disabled ? 'icx-selector-disabled' : 'icx-selector-active';
  const estiloTitle = disabled ? 'icx-text-gray-300' : 'icx-text-neutral-500';

  return (
    <div className="icx-px-1 icx-py-1 icx-flex icx-flex-col icx-gap-8">
      <div className="icx-w-full icx-flex icx-flex-col icx-gap-y-2">
        <label className={estiloTitle} htmlFor={title}>
          {title} {required ? <span>*</span> : ''}
        </label>
        <select
          disabled={disabled}
          required={required}
          id={title}
          className={`icx-w-full icx-border icx-px-2 icx-py-1.5 icx-rounded-lg ${estiloSelect} ${className}`}
          {...props}
        >
          {options.map((option) => (
            <option
              className="hover:icx-bg-neutral-200 icx-rounded-lg"
              key={option.value}
              value={option.label}
              hidden={option.hidden}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
