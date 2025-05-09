import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from '../../StateProvider';
const Navbar = () => {
  const [{basket }] = useStateValue();
  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <Link to={"/"}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo" />
        </Link>

      </div>
        <div className='navbar__search'>
        <input type="text" placeholder='Search...' className='searchinput' />
       <SearchIcon className='searchicon'/>
        </div>
      
      <div className='navbar__links'>
        <Link to={'/login'} className='navbar__link'>
        <div className='navbar__option'>
        <span className='option1'> Hello Niyat</span>
        <span  className='option2'> Sign In </span>
        </div>
        </Link>

        <Link to={'/'}  className='navbar__link'>
        <div className='navbar__option'>
        <span  className='option1'>Returns</span>
        <span  className='option2'>& Orders</span>
        </div>
        </Link>

        <Link to={'/'}  className='navbar__link'>
        <div className='navbar__option'>
        <span  className='option1'>Your</span>
        <span  className='option2'>Prime</span>
        </div>
        </Link>

        <Link to={'/checkout'} className='navbar__link'>
        <div className='navbar__basket'
        >
        <ShoppingCartIcon />
        <span >{basket?.length}</span>

        </div>

        </Link>

        
      </div>

    </div>
  )
}

export default Navbar