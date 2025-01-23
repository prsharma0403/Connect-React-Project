import logo from './logo.svg';
import './App.css';
import Greeting from './component/Greeting';
import Counter from './component/Counter';
import Timer from './component/Timer';
import { StrictMode } from 'react';
import Cart from './component/Cart';
import Whether from './component/Whether';
import Assignment from"./component/Assignnment";

function App() {
  return (
  <StrictMode>
  <div className="new-form">
   
    <div className='fieldset'>
    <Greeting />
    <Counter />
    <Timer />
  <Cart />
  <Whether/>
   
    </div>
  </div>
  </StrictMode>
  );
}

export default App;
