import React from 'react'
import "./Products.css"
const Products = ({id, title, price, rating, image}) => {
  return (
    <div className='product'>
        <div className='product_info'>
        <p>{title}</p>
        <p className='price'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className='product_rating'>
            {Array(rating).fill().map((_) => (
                <p>⭐</p>
            ))}

    </div>
    </div>
    <img src={image} alt="" />
    <button>Add to basket</button>
    
    </div>
  )
}

export default Products