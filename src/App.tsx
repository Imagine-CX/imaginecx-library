import { Button, CheckBox, Header } from './components';
import { Helloworld } from './components/HelloWorld';

function App() {
  return (
    <div className="icx-container icx-w-[100vw] icx-mx-2">
      <div>
        <Header text="Imagine CX Library" variant="h1" />
        <Helloworld text={'probando this text'} />
        <Button text="Button Primary" color="icx-btn-primary" />
        <Button text="Button Secondary" color="icx-btn-secondary" />
        <Button text="Disable" color="icx-btn-secondary" disabled={true} />
        <Button text="Alternative" color="icx-btn-alternative" />
      </div>
      <div>
        <CheckBox text="Checkbox" disabled={true} />
        <CheckBox text="Checkbox2" />
      </div>
    </div>
  );
}

export default App;
