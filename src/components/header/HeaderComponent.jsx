import './header.css'
import {FaShopify} from 'react-icons/fa'

const HeaderComponent = () => {
  return (
    <div className='header'>
        <div className="header-container">
            <img src='assets/logo.jpg' alt='logo' className="header-logo" />
            <div className="header-navbar">
                <span className="header-navbar-item">Home</span>
                <span className="header-navbar-item">Products</span>
                <span className="header-navbar-item">About Us</span>
                <span className="header-navbar-item">Contact</span>
            </div>
            <div className="header-right">
                <span className="cart">
                    <span className="cart-item-count">0</span>
                    <FaShopify fontSize={30} color='#964577'/>
                </span>
                <span className="account">Account</span>
            </div>
        </div>
    </div>
  )
}

export default HeaderComponent