
import './App.css';
import Greeting from './component/Greeting';
import Counter from './component/Counter';
import Timer from './component/Timer';
import { StrictMode } from 'react';
import Cart from './component/Cart';
import Whether from './component/Whether';
import { Routes, Route } from "react-router-dom";
import DashBoard from './Dashboard';
import Error from './component/Error';
import CurrencyConverter from './component/CurrencyConverter';

function App() {
  return (
  <StrictMode>
    <div className='App'>
    <div className="new-form">
    <div className='fieldset'>
    <Routes>
       <Route path ="/"element={<DashBoard/>} />
        <Route path="/currency" element={ <Greeting/> } />
        <Route path="counter" element={ <Counter/> } />
        <Route path="timer" element={ <Timer/> } />
        <Route path="cart" element={ <Cart/> } />
        <Route path="whether" element={ <Whether/> } />
        <Route path="currency" element={ <CurrencyConverter /> } />
        <Route  element={ <Error/> } />
      </Routes>
    </div>
    </div>
  </div>
  </StrictMode>
  );
}

export default App;
