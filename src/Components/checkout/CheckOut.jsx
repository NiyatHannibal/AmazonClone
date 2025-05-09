import React from 'react'
import "./CheckOut.css"
import { useStateValue } from '../../StateProvider';
import CheckoutProduct from '../checkproduct/CheckoutProduct .jsx';
import SubTotal from '../subtotal/SubTotal.jsx';
function CheckOut() {
    const [{basket}] = useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout-left'>
        <img className="checkoutimg" src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/onsite/Apr18/PeX_1242x350._CB1198675309_.jpg" alt="" />
        {basket?.length === 0 ? (
            <div className='checkout_empty' style={{marginLeft: "20px"}}>
                <h2>Your Shopping Basket is empty</h2>
                <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
            </div>
        ) : (
            <div className='checkout_items'>
                <h2 style={{marginLeft: "20px"}}>Your Shopping Basket</h2>
                {basket.map(item => (
                 <CheckoutProduct 
                    id={item.id} 
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}/> 
                ))}
            </div>
        )}
    </div>
    {basket?.length > 0 &&(
        <div className='checkout_right'>
            <SubTotal />
        </div>
    )}
    </div>
  )
}

export default CheckOut