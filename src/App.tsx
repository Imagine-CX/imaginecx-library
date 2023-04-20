import { BiSearch } from 'react-icons/bi';

import { Button, CheckBox, Header, InputField, Radio, Toggle } from './components';

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
        <CheckBox text="Checkbox" id="check1" />
        <CheckBox text="Checkbox2" id="check2" disabled />
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
              icon={
                <svg
                  fill="#e8af11"
                  width="25px"
                  height="25px"
                  viewBox="0 0 32.00 32.00"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#e8af11"
                  stroke-width="0.00032"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <title>alt-brightness</title>{' '}
                    <path d="M2.016 16q0 0.832 0.576 1.44t1.408 0.576 1.408-0.576 0.608-1.44-0.608-1.408-1.408-0.576-1.408 0.576-0.576 1.408zM5.504 24.512q0 0.8 0.576 1.408t1.44 0.576 1.408-0.576 0.576-1.408-0.576-1.408-1.408-0.608-1.44 0.608-0.576 1.408zM5.504 7.52q0 0.832 0.576 1.408t1.44 0.576 1.408-0.576 0.576-1.408-0.576-1.408-1.408-0.608-1.44 0.608-0.576 1.408zM8 16q0 3.328 2.336 5.664t5.664 2.336 5.664-2.336 2.336-5.664-2.336-5.632-5.664-2.368-5.664 2.368-2.336 5.632zM12 16q0-1.632 1.184-2.816t2.816-1.184 2.816 1.184 1.184 2.816-1.184 2.848-2.816 1.152-2.816-1.152-1.184-2.848zM14.016 28q0 0.832 0.576 1.44t1.408 0.576 1.408-0.576 0.608-1.44-0.608-1.408-1.408-0.576-1.408 0.576-0.576 1.408zM14.016 4q0 0.832 0.576 1.44t1.408 0.576 1.408-0.576 0.608-1.44-0.608-1.408-1.408-0.576-1.408 0.576-0.576 1.408zM22.496 24.512q0 0.8 0.576 1.408t1.408 0.576 1.44-0.576 0.576-1.408-0.576-1.408-1.44-0.608-1.408 0.608-0.576 1.408zM22.496 7.52q0 0.832 0.576 1.408t1.408 0.576 1.44-0.576 0.576-1.408-0.576-1.408-1.44-0.608-1.408 0.608-0.576 1.408zM26.016 16q0 0.832 0.576 1.44t1.408 0.576 1.408-0.576 0.608-1.44-0.608-1.408-1.408-0.576-1.408 0.576-0.576 1.408z"></path>{' '}
                  </g>
                </svg>
              }
              required
            />
          </div>
        </div>
        <Button text="Subir" color="icx-btn-primary" type="submit" />
      </form>
      <div>
        <Toggle text="Toggle" />
      </div>
    </div>
  );
}

export default App;
