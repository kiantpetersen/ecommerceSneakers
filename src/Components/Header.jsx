import React, { useState } from 'react';
import userImg from '../images/image-avatar.png'
import productImg1 from '../images/image-product-1.jpg'

function Header(props) {
    const [visibility, setVisibility] = useState(false)
    const [cartItems, setCartItems] = useState([])
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
    function getItem() {
        return <div className='cart-item-container'>
            <div className='cart-img-container'>
                <img src={productImg1} className='cart-item-img' alt='Item_image' />
            </div>
            <div className='cart-item-textbox'>
                <p className='item-name'>Fall Limited Edition Sneackers</p>
                <p className='item-price'>$125.00 x 3 <span className='total-price'>$420.69</span></p>
            </div>
            <div className='cart-delete-icon'>
                <ion-icon name="trash-outline"></ion-icon>
            </div>
        </div>
    }
    function getCartItems() {
        return (
            <div className='cart-item-list'>
                {cartItems.map((item, key) => {
                    return getItem()
                })}

                <button className='cart-checkout-btn'>Checkout</button>
            </div>)

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
                {/* <div className='cart-item-list'>
                    {getCartItems()} */}
                {cartItems.length > 0 ? getCartItems() : <p className='cart-default-text'>your cart is empty</p>}
                {/* <p className='cart-default-text'>your cart is empty</p> */}
                {/* </div> */}

            </div>

        </header>
    );
}

export default Header;