import React, { useState } from 'react';
import userImg from '../images/image-avatar.png'
import productImg1 from '../images/image-product-1.jpg'

function Header(props) {
    const [visibility, setVisibility] = useState(false)
    const cartItems = props.cartItems

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

    function getItem(item) {
        return <div key={item.id} className='cart-item-container'>
            <div className='cart-img-container'>
                <img src={item.img} className='cart-item-img' alt='Item_image' />
            </div>
            <div className='cart-item-textbox'>
                <p className='item-name'>{item.name}</p>
                <p className='item-price'>${item.price} x {item.amount} <span className='total-price'>${item.price * item.amount}</span></p>
            </div>
            <div onClick={() => { props.deleteItem(item) }} className='cart-delete-icon'>
                <ion-icon name="trash-outline"></ion-icon>
            </div>
        </div>
    }
    function getCartItems() {
        return (
            <div className='cart-item-list'>
                {cartItems.map((item, key) => {
                    return getItem(item)
                })}

                <button className='cart-checkout-btn'>Checkout</button>
            </div>)

    }
    function viewMobileNav() {
        const mobileNav = document.querySelector('.mobile-nav')
        const mobileOverlay = document.querySelector('.mobile-overlay')
        console.log('Target: ', mobileNav)
        mobileNav.style.display = 'block';
        mobileNav.style.width = '200px'
        mobileOverlay.style.display = 'block';
        mobileOverlay.style.width = '100%'
    }

    function exitMobileNav() {
        const mobileNav = document.querySelector('.mobile-nav')
        const mobileOverlay = document.querySelector('.mobile-overlay')


        console.log('Target: ', mobileNav)
        mobileNav.style.display = 'none';
        mobileNav.style.width = '000px'

        mobileOverlay.style.display = 'none';
        mobileOverlay.style.width = '00'

    }
    return (
        <header className='sneaker-nav'>
            <div className='nav-container'>
                <div onClick={viewMobileNav} className='nav-menu-icon'>
                    <ion-icon name="menu-outline"></ion-icon>
                </div>
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
                    <ion-icon name="cart-outline"></ion-icon>
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
            <div onClick={exitMobileNav} className='mobile-overlay'></div>
            <div className='mobile-nav'>
                <div onClick={exitMobileNav} className='mobile-exit-icon'><ion-icon size="large" name="close-outline"></ion-icon> </div>
                <ul className='mobile-nav-list'>
                    <li className='mobile-nav-list-item'><a className='mobile-nav-link' href='/'>Collections</a></li>
                    <li className='mobile-nav-list-item'><a className='mobile-nav-link' href='/'>Men</a></li>
                    <li className='mobile-nav-list-item'><a className='mobile-nav-link' href='/'>Women</a></li>
                    <li className='mobile-nav-list-item'><a className='mobile-nav-link' href='/'>About</a></li>
                    <li className='mobile-nav-list-item'><a className='mobile-nav-link' href='/'>Contact</a></li>
                </ul>
            </div>

        </header>
    );
}

export default Header;