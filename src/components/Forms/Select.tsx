import { InputHTMLAttributes } from 'react';

interface ISelectorTest extends InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: Array<{
    value: number;
    label: string;
  }>;
}

export const Select = ({ label, options, disabled, required, ...props }: ISelectorTest) => {
  const estiloSelect: string = disabled ? 'icx-selector-disabled' : 'icx-selector-active';
  return (
    <div className="icx-px-1 icx-py-1 icx-flex icx-flex-col icx-gap-8">
      <div className="icx-w-full icx-flex icx-flex-col icx-gap-y-2">
        <label>
          {label} {required ? <span className="icx-text-neutral-500">*</span> : ''}
        </label>
        <select
          disabled={disabled}
          required={required}
          className={`icx-w-full icx-p-2 icx-border icx-rounded-lg ${estiloSelect}`}
          {...props}
        >
          {options.map((option) => (
            <option className="hover:icx-bg-neutral-200 icx-rounded-lg" key={option.value} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
