import React from 'react'
import { Link } from 'react-router-dom'

const Categoris = ({ title, products = [], amount }) => {
    const list = products.filter((_, i ) => i < amount)
  return (
  <section>
    <h2>{title}</h2>
  <div className='map'>
    {list.map(({id, name, images}) => (
        <Link to={`/categori/${id}`} key={id}>
            <div className='image'>
            <img src={images} alt={title} />
             </div>           
            <h3>{name}</h3>
        </Link>
    ))}
  </div>
  </section>
  )
}

export default Categoris