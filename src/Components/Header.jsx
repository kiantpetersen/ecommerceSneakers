import React, { useState } from 'react';
import userImg from '../images/image-avatar.png'
function Header(props) {
    const [visibility, setVisibility] = useState(false)
    function handleClick(e) {
        const cartContainer = document.querySelector('.cart-container')

        if (!visibility) {

            cartContainer.style.visibility = 'visible'
            setVisibility(true)
        } else {
            cartContainer.style.visibility = 'hidden'
            setVisibility(false)

        }
    }
    return (
        <header className='sneaker-nav'>
            <div className='nav-container'>

                <h2 className='sneaker-nav-heading'>sneakers</h2>
                <ul className='sneaker-nav-list'>
                    <li className='sneaker-nav-item'><a href='/' className='sneaker-nav-link'>Collections</a></li>
                    <li className='sneaker-nav-item'><a href='/' className='sneaker-nav-link'>Men</a></li>
                    <li className='sneaker-nav-item'><a href='/' className='sneaker-nav-link'>Women</a></li>
                    <li className='sneaker-nav-item'><a href='/' className='sneaker-nav-link'>About</a></li>
                    <li className='sneaker-nav-item'><a href='/' className='sneaker-nav-link'>Contact</a></li>
                </ul>
            </div>
            <div className='nav-container'>
                <div onClick={handleClick} className='nav-icon-container'>
                    <ion-icon size="large" name="cart-outline"></ion-icon>
                </div>
                <div className='nav-user-img-container'>
                    <img className='nav-user-img' src={userImg} alt='nav_user_img' />
                </div>
            </div>
            <div className='cart-container'>
                <h2 className='cart-heading'>Cart</h2>
                <div className='cart-item-list'>
                    <p className='cart-default-text'>your cart is empty</p>
                </div>

            </div>

        </header>
    );
}

export default Header;