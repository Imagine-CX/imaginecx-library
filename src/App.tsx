import { Button, Dropdown, Header } from './components';
import { Helloworld } from './components/HelloWorld';

function App() {
  return (
    <div className="icx-container icx-w-[100vw] icx-mx-2">
      <Header text="Imagine CX Library" variant="h1" />
      <Helloworld text={'probando this text'} />
      <Button text="Button Primary" color="icx-btn-primary" />
      <Button text="Button Secondary" color="icx-btn-secondary" />
      <Header text="Headers" variant="h1" />
      <br />
      <Dropdown title="Dropdown">
        <option value="1">Hola</option>
      </Dropdown>
      <Button text="Disable" color="icx-btn-disable" />
      <Button text="Alternative" color="icx-btn-alternative" />
    </div>
  );
}

export default App;
