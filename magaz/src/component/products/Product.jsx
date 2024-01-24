import React from 'react'
import './product.css'
import {Link} from "react-router-dom"

const Product = ({ title, products = [], amount }) => {
 const list = products.filter((_, i ) => i < amount)
  return (
    <div className='content'>
      {title && <h1>{title}</h1>}
      <div className='grid'>
  {list.map(({id, images, title, price }) =>(
    <Link to={`/products${id}`} key={id}>
      <div className='image'>
        <img src={images} alt={title} />
        <div>
        <div className='main'>
          <h1>{title}</h1>
          <h2>{price}</h2>
        </div>
        
        </div>
      </div>
    </Link>
  ))}
   </div>
  </div>
);
}

export default Product