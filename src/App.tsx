import { BtnPrimary } from './components/Btns';
import { Helloworld } from './components/HelloWorld';

function App() {
  return (
    <div className="container w-[100vw] mx-2">
      <h1>Imagine cx library</h1>
      <p>this is for testing</p>
      <Helloworld text={'probando this text'} />
      <BtnPrimary text="esto es un btn" />
    </div>
  );
}

export default App;
