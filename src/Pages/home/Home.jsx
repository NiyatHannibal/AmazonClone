import React from 'react'
import "./Home.css"
import Products from '../../Components/products/Products'
const Home = () => {
  return (
    <div className='home'>
        <img src="https://img.freepik.com/free-psd/black-friday-super-sale-facebook-cover-banner-template_120329-5177.jpg" alt="banner" className='banner_img'/>
        <div className='home_row'>
        <Products 
        className='products'
        id='1'
        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
        price={29.99}
        rating={5}
        image={'https://carmellamarketing.com/wp-content/uploads/2023/05/Screen-Shot-2023-05-09-at-9.50.02-AM-1024x650.png'}
       
        />

    <Products 
    className='products'
        id='2'
        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
        price={29.99}
        rating={5}
        image={'https://carmellamarketing.com/wp-content/uploads/2023/05/Screen-Shot-2023-05-09-at-9.50.02-AM-1024x650.png'}
       
        />
    </div>

    <div className='home_row'>
        <Products 
        className='products'
        id='3'
        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
        price={29.99}
        rating={5}
        image={'https://carmellamarketing.com/wp-content/uploads/2023/05/Screen-Shot-2023-05-09-at-9.50.02-AM-1024x650.png'}
       
        />

    <Products 
    className='products'
        id='4'
        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
        price={29.99}
        rating={5}
        image={'https://carmellamarketing.com/wp-content/uploads/2023/05/Screen-Shot-2023-05-09-at-9.50.02-AM-1024x650.png'}
       
        />

<Products 
    className='products'
        id='5'
        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
        price={29.99}
        rating={5}
        image={'https://carmellamarketing.com/wp-content/uploads/2023/05/Screen-Shot-2023-05-09-at-9.50.02-AM-1024x650.png'}
       
        />
    </div>
    <div className='home_row'>
        <Products 
        className='products'
        id='6'
        title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
        price={29.99}
        rating={5}
        image={'https://carmellamarketing.com/wp-content/uploads/2023/05/Screen-Shot-2023-05-09-at-9.50.02-AM-1024x650.png'}
       
        />

    
    </div>
    </div>
  )
}

export default Home