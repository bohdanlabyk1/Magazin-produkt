import React from 'react'
import {useSelector} from 'react-redux'
import Product from '../products/Product'


const Home = () => {
  const { products} = useSelector((state) => state)
  return (
    <>
    <div className="App">
  
      <Product products={products.list} amount={21} title="Trenging" />
    
    </div>
    </>
  )
}

export default Home