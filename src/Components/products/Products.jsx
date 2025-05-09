import React from 'react'
import "./Products.css"
import { useStateValue } from '../../StateProvider';
const Products = ({id, title, price, rating, image}) => {
  const [ {}, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating
      }
    })
  }
  return (
    <div className='product' key={id}>
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
    <button onClick={addToBasket}>Add to basket</button>
    
    </div>
  )
}

export default Products