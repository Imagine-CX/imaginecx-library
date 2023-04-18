import { Button, CheckBox, Dropdown, Header, Radio } from './components';
import { Helloworld } from './components/HelloWorld';

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
      <Header text="Imagine CX Library" variant="h1" />
      <Helloworld text={'probando this text'} />
      <Dropdown title="Dropdown">
        <option value="1">Hola</option>
      </Dropdown>
      <div>
        <Header text="Imagine CX Library" variant="h1" />
        <Button text="Button Primary" color="icx-btn-primary" />
        <Button text="Button Secondary" color="icx-btn-secondary" />
        <Button text="Disable" color="icx-btn-secondary" disabled={true} />
        <Button text="Alternative" color="icx-btn-alternative" handleClick={handleClick} />
      </div>
      <div>
        <CheckBox text="Checkbox disable" disabled={true} />
        <CheckBox text="Checkbox2" />
        <CheckBox text="Checkbox checked" checked={true} />
        <Radio text="Radio Button Disable" disabled={true} />
        <Radio text="Radio Button checked" checked={true} />

        {options.map((option) => (
          <div key={option.id}>
            <Radio text={option.label} id={option.id} name="options" />
          </div>
        ))}

        <Radio text="Radio Button onChange" handleChange={handleChange} name="change" />
      </div>
    </div>
  );
}

export default App;
