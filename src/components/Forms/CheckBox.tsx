export interface ICheckBox {
  text: string;
  disabled?: boolean;
}
export const CheckBox = ({ text, disabled }: ICheckBox) => {
  const estiloCheck: string = disabled ? 'icx-checkbox-disabled' : 'icx-checkbox-active';

  return (
    <div className="icx-flex icx-items-center icx-m-2">
      <input disabled={disabled} type="checkbox" className={`${estiloCheck}`} />
      <label className="icx-ml-2 icx-text-gray-900 icx-dark:text-gray-300">{text}</label>
    </div>
  );
};
