import React from 'react'
import './product.css'
import {Link} from "react-router-dom"

const Product = ({title, list = [] }) => {
  return (
    <div className='content'>
      {title && <h1>{title}</h1>}
    <div className='grid'>
  {list.map(({id, images, title, categori:{name:cat}, prise }) =>(
    <Link t0={`/products ${id}`} key={id}>
      <div className='image'>
        <img src={images} alt={title} />
        <div className='main'>
          <h2>{cat}</h2>
          <h1>{prise}</h1>
        </div>
      </div>
    </Link>
  ))}
  </div>
</div>
);
}

export default Product