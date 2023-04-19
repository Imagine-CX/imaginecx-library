import { BiSearch } from 'react-icons/bi';

export interface IInputField {
  placeholder: string;
  name: string;
  value?: string;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  handleChange?: () => void;
}

export const InputField = ({
  label,
  name,
  value,
  placeholder,
  disabled,
  handleChange,
  required,
}: IInputField): JSX.Element => {
  return (
    <div className="px-4 py-8 flex flex-col md:flex-row md:items-center md:justify-center gap-8">
      <div className="icx-w-full icx-flex icx-flex-col icx-gap-y-2">
        <label>
          {label} {required ? <span className="icx-text-neutral-500">*</span> : ''}
        </label>
        <div className="relative">
          <input
            className="icx-w-full icx-py-2 icx-pl-4 icx-pr-4 icx-rounded-lg icx-outline-none icx-border icx-border-neutral-200 icx-text-gray-600 required:border-red-500 invalid:border-red-500"
            placeholder={placeholder}
            name={name}
            value={value}
            disabled={disabled}
            onChange={handleChange}
            required={required}
          />
        </div>
        <label>
          {label} <span className="icx-text-neutral-500">*</span>
        </label>
        <div className="icx-relative">
          <BiSearch className="icx-text-gray-500 icx-absolute icx-top-1/2 icx--translate-y-1/2 icx-left-4 icx-w-5 icx-h-5" />
          <input
            className="icx-w-full icx-py-2 icx-pl-12 icx-pr-4 icx-rounded-lg icx-outline-none icx-border icx-border-neutral-200 icx-text-gray-600"
            placeholder={placeholder}
            name={name}
            value={value}
            disabled={disabled}
            onChange={handleChange}
            required={required}
          />
        </div>
      </div>
    </div>
  );
};
