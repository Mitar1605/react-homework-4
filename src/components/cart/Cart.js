import React, {useState} from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsFillTrashFill} from 'react-icons/bs'
import '../products/Products.css'

export default function Cart({setCount, cartData, setCartData, product}) {
    const {id, title, price, thumbnail} = product

    const [countCart, setCountCart] = useState(1)

    const countCartMinus = () => {
        if (countCart - 1 > 0) setCountCart(() => countCart - 1)
        else setCartData(cartData.filter((el) => el.id !== product.id))
    }

    const countCartPlus = () => {
        setCountCart(() => countCart + 1)
    }

  return (
      <div>
          <div className='product'>
              <div className="product-descr">
                  <div className="product-title">
                      <p>{title}</p>
                  </div>
                  <div className="product-price">
                      <p>{price}</p>
                  </div>
              </div>
              <div className="product-btns">
                  <button><AiOutlineHeart /></button>
                  <div className='cart-add'>
                    <button onClick={countCartMinus}>-</button>
                    <span>{countCart}</span>
                    <button onClick={countCartPlus}>+</button>
                  </div>
                  <button onClick={() => setCartData(cartData.filter((el) => el.id !==product.id))}><BsFillTrashFill /></button>
              </div>
              <div className="product-img">
                  <img src={thumbnail} alt="prduct-img" />
              </div>
          </div>
      </div>
  )
}
