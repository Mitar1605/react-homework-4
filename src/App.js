import './App.css';
import { useState, useEffect } from 'react';
import Products from './components/products/Products';
import Cart from './components/cart/Cart';
import { createContext } from 'react';

export const Context = createContext()

function App() {

  const [inputValue, setInputValue] = useState('')
  const [data, setData] = useState([])
  const [cartData, setCartData] = useState([])
  const [searchResult, setSearchresult] = useState([])

  async function dummyjson () {
      await fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
          setData(data.products)
          setSearchresult(data.products)
      })
  }
  
  useEffect(() => {
      dummyjson()
  }, [])

  useEffect(() => {
      setData(searchResult.filter(item => item.title.toLowerCase().includes(inputValue.toLowerCase())))
  }, [inputValue])


  const addToCart = (item) => {
    if (!cartData.find(el => el.id === item.id)) {
      setCartData([
        ...cartData,
        item
      ])
      console.log(cartData);
    }
  }

  let timeOut;

  return (
    <div className="App">
      <div className='cart_block'>
        <h1>Cart`</h1>
        {
          cartData.length !== 0 ? cartData.map(product => {
            return (
              <div key={product.id}>
                <Cart cartData={cartData} setCartData={setCartData} product={product}/>
              </div>
            )
          }): "Zambyuxy datark e!"
        }
      </div>
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
        <Context.Provider value={{data, setData, addToCart}}>  
          <Products />
        </Context.Provider>
      </div>
    </div>
  );
}

export default App;
