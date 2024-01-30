import { ForwardedRef, forwardRef, InputHTMLAttributes } from 'react';

interface ISelectorTest extends InputHTMLAttributes<HTMLSelectElement> {
  labelClassName?: string;
  title?: string;
  options: Array<{
    value: number | string;
    label: string;
    hidden?: boolean;
  }>;
}

export const Select = forwardRef(
  (
    { title, options, className, labelClassName, disabled, required, ...props }: ISelectorTest,
    ref: ForwardedRef<HTMLSelectElement>,
  ) => {
    const estiloSelect: string = disabled ? 'icx-selector-disabled' : 'icx-selector-active';
    const estiloTitle = disabled ? 'icx-text-gray-300' : 'icx-text-neutral-500';

    return (
      <div className="icx-px-1 icx-py-1 icx-flex icx-flex-col icx-gap-8">
        <div className="icx-w-full icx-flex icx-flex-col icx-gap-y-2">
          <label className={`${labelClassName}  ${estiloTitle}`} htmlFor={title}>
            {title} {required ? <span>*</span> : ''}
          </label>
          <select
            disabled={disabled}
            id={title}
            ref={ref}
            className={`icx-w-full icx-border icx-px-2 icx-py-1.5 icx-rounded-lg ${estiloSelect} ${className}`}
            required
            {...props}
          >
            {options.map((option) => (
              <option
                className="hover:icx-bg-neutral-200 icx-rounded-lg"
                key={option.value}
                value={option.hidden ? '' : option.value}
                hidden={option.hidden}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  },
);
