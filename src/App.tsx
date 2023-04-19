import { BiCalendarX, BiSearch } from 'react-icons/bi';

import { Button, CheckBox, Header, InputField, Radio } from './components';

const handleClick = () => {
  // console.log("Haz hecho clic en el botón");
};

const handleChange = () => {
  // console.log("Radio button checked");
};

const options = [
  { id: 1, value: 'option1', label: 'Option 1' },
  { id: 2, value: 'option2', label: 'Option 2' },
  { id: 3, value: 'option3', label: 'Option 3' },
];

function App() {
  return (
    <div className="icx-container icx-w-[100vw] icx-mx-2">
      <div>
        <Header text="Imagine CX Library" variant="h1" />
      </div>
      <div>
        <Button text="Button Primary" color="icx-btn-primary" />
        <Button text="Button Secondary" color="icx-btn-secondary" />
        <Button text="Disable" color="icx-btn-secondary" disabled />
        <Button text="Alternative" color="icx-btn-alternative" />
      </div>
      <div>
        <CheckBox text="Checkbox disable" disabled />
        <CheckBox text="Checkbox2" />
        <CheckBox text="Checkbox checked" checked />
        <Radio text="Radio Button Disable" disabled />
        <Radio text="Radio Button checked" checked />

        {options.map((option) => (
          <div key={option.id}>
            <Radio text={option.label} id={`${option.id}`} name="options" />
          </div>
        ))}
      </div>
      <form action="">
        <div className="icx-grid icx-grid-cols-2 icx-gap-4">
          <div>
            <InputField
              placeholder="Nombre"
              label="Nombre"
              name="nombre"
              required
              icon={<BiSearch className="icx-w-5 icx-h-5" />}
            />
          </div>
          <div>
            <InputField
              placeholder="Apellido"
              name="apellido"
              label="Apellido"
              disabled
              icon={<BiCalendarX className="icx-w-5 icx-h-5" />}
              required
            />
          </div>
        </div>
        <Button text="Subir" color="icx-btn-primary" type="submit" />
      </form>
    </div>
  );
}

export default App;
