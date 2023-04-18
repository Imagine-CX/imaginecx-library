export interface ICheckBox {
  text: string;
  id?: string;
  name?: string;
  disabled?: boolean;
  checked?: boolean;
  handleChange?: () => void;
}
export const CheckBox = ({ text, disabled, checked, id, name, handleChange }: ICheckBox) => {
  const estiloCheck: string = disabled ? 'icx-checkbox-disabled' : 'icx-checkbox-active';

  return (
    <div className="icx-flex icx-items-center icx-m-2">
      <input
        type="checkbox"
        name={name}
        id={id}
        className={`${estiloCheck}`}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <label className="icx-ml-2">{text}</label>
    </div>
  );
};
