import '../style.css';

export interface IRadio {
  checked?: boolean;
  disabled?: boolean;
  id?: number;
  text: string;
  name?: string;
  handleChange?: () => void;
}

export const Radio = ({ text, disabled, id, checked, handleChange, name = 'icx' }: IRadio): JSX.Element => {
  const estiloRadio: string = disabled ? 'icx-radio-disabled' : 'icx-radio-active';

  return (
    <>
      <div className="icx-flex icx-items-center icx-m-2">
        <input
          id={`${id}`}
          type="radio"
          name={`${name}`}
          className={`icx-form-radio ${estiloRadio}`}
          disabled={disabled}
          checked={checked}
          onChange={handleChange}
        />
        <label className="icx-ml-2">{text}</label>
      </div>
    </>
  );
};
