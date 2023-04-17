import '../style.css';

export interface IRadio {
  text: string;
  id?: number;
  disabled?: boolean;
}

export const Radio = ({ text, disabled, id }: IRadio): JSX.Element => {
  const estiloRadio: string = disabled ? 'icx-radio-disabled' : 'icx-radio-active';

  return (
    <>
      <div className="icx-flex icx-items-center icx-m-2">
        <input
          id={`${id}`}
          type="radio"
          name="icx-radio"
          className={`icx-form-radio ${estiloRadio}`}
          disabled={disabled}
        />
        <label className="icx-ml-2">{text}</label>
      </div>
    </>
  );
};
