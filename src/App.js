import './App.css';
import { useState } from 'react';
import Products from './components/products/Products';

function App() {

  const [inputValue, setInputValue] = useState('')

  let timeOut;

  return (
    <div className="App">
      <div className="header-title">
        <h1>Products</h1>
      </div>
      <div className='search-box'>
        <input type="text" placeholder='Search...' onChange={(evt) => {
          if (timeOut !== undefined) clearTimeout(timeOut)
          
          timeOut = setTimeout(() => {
            setInputValue(evt.target.value)
          }, 1000)
          
        }}/>
      </div>
      <div className="products-div">
        <Products inputValue={inputValue} />
      </div>
    </div>
  );
}

export default App;
