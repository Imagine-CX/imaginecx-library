import { Header, Button } from './components';
import { Helloworld } from './components/HelloWorld';

function App() {
  return (
    <div className="container w-[100vw] mx-2">
      <h1>Imagine cx library</h1>
      <p>this is for testing</p>
      <Helloworld text={'probando this text'} />
      <Button text="Button Primary" color='btn-primary'/>
      <Header text='Headers' variant='h3'/>
    </div>
  );
}

export default App;
