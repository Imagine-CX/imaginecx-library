export interface ICheckBox {
  text: string;
  disabled?: boolean;
}
export const CheckBox = ({ text, disabled }: ICheckBox) => {
  return (
    <div className="icx-flex icx-items-center icx-m-2">
      <input
        disabled={disabled}
        type="checkbox"
        className="icx-w-6 icx-h-6 icx-text-primary-500 icx-bg-gray-100 icx-border-gray-300 icx-rounded-lg icx-focus:icx-ring-primary-500 icx-dark:icx-focus:ring-primary-400 icx-dark:ring-offset-primary-400 icx-focus:icx-ring-2 icx-dark:icx-bg-gray-700 icx-dark:icx-border-gray-600"
      />
      <label className="icx-ml-2 icx-text-gray-900 icx-dark:text-gray-300">{text}</label>
    </div>
  );
};
