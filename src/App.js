import './App.css';
import Products from './components/products/Products';

function App() {
  return (
    <div className="App">
      <div className="header-title">
        <h1>Products</h1>
      </div>
      <div className="products-div">
        <Products />
      </div>
    </div>
  );
}

export default App;
