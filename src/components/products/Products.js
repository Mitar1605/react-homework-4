import React, { useEffect, useState } from 'react'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsFillTrashFill} from 'react-icons/bs'
import './Products.css'

export default function Products() {

    const [data, setData] = useState([])

    async function dummyjson () {
        await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => setData(data.products))
    }

    useEffect(() => {
        dummyjson()
    }, [])

  return (
    <div className='main-products'>
        {
            data.map((product) => {
                const {id, title, price, thumbnail} = product

                return (
                    <div className='product' key={id}>
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
                            <button>Add to cart</button>
                            <button onClick={() => setData(data.filter((el) => el.id !== id))}><BsFillTrashFill /></button>
                        </div>
                        <div className="product-img">
                            <img src={thumbnail} alt="prduct-img" />
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
