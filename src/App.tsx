import { Button, Dropdown, Header } from './components';
import { Helloworld } from './components/HelloWorld';

function App() {
  return (
    <div className="icx-container icx-w-[100vw] icx-mx-2">
      <h1>Imagine cx library</h1>
      <p>this is for testing</p>
      <Helloworld text={'probando this text'} />
      <Button text="Button Primary" color="icx-btn-primary" />
      <Button text="Button Secondary" color="icx-btn-secondary" />
      <Header text="Headers" variant="h1" />
      <br />
      <Dropdown title="Dropdown">
        <option value="1">Hola</option>
      </Dropdown>
    </div>
  );
}

export default App;
