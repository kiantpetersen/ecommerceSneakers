import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import productImg1 from '../images/image-product-1.jpg'
import productImg2 from '../images/image-product-2.jpg'
import productImg3 from '../images/image-product-3.jpg'
import productImg4 from '../images/image-product-4.jpg'
import productImg5 from '../images/image-product-1.jpg'

function ProductView(props) {
    const [value, setValue] = useState(1)
    const [mainImg, setImg] = useState(productImg1)

    function handleClick(e) {
        e.preventDefault()

        const name = document.querySelector('.product-name').innerHTML
        const price = document.querySelector('.product-price').dataset.price
        const img = document.querySelector('.primary-product-img').src


        props.addCart({ id: uuidv4(), name: name, price: price, amount: value, img: img })
        setValue(1)

    }

    function handleNav(e) {
        const selectorContainer = document.querySelector('.images-selector-container')
        const children = Array.from(selectorContainer.childNodes)
        const target = e.target.closest('.overlay-nav').dataset.nav
        let newFocus
        children.forEach((child, index) => {
            if (child.classList.contains('viewing') && target === 'next') {
                index === 0 ? newFocus = 3 : newFocus = index - 1
                child.classList.remove('viewing')

            }
            else if (child.classList.contains('viewing') && target === 'prev') {
                index === 3 ? newFocus = 0 : newFocus = index + 1
                child.classList.remove('viewing')
            }
        })
        children[newFocus].classList.add('viewing')
        setImg(children[newFocus].querySelector('img').src)
        console.log('Node: ', children[newFocus].querySelector('img').src)

    }
    function handleFocus(e) {
        const imageContainer = e.target.closest('.secondary-img-container')
        const imagesHolder = e.target.closest('.images-selector-container')
        const children = Array.from(imagesHolder.children)
        children.forEach(child => {
            child.classList.remove('viewing')
        })

        setImg(e.target.src)
        imageContainer.classList.add('viewing')
    }


    return (
        <div className='product-section'>
            <div className='grid grid-2--cols'>
                <div className='col'>
                    <div onClick={props.viewOverlay} className='primary-product-img-container'>
                        <div onClick={handleNav} data-nav='next' className='overlay-nav  mobile-prev mobile-product'><ion-icon name="chevron-back-outline"></ion-icon></div>
                        <img className='primary-product-img' src={mainImg} alt='primary_produc_img' />
                        <div onClick={handleNav} data-nav='prev' className='overlay-nav  mobile-next mobile-product'><ion-icon name="chevron-forward-outline"></ion-icon></div>

                    </div>
                    <div className='images-selector-container '>
                        <div onClick={handleFocus} className='secondary-img-container viewing'>
                            <img src={productImg1} alt='secondary_img' className='secondary-img' />
                        </div>
                        <div onClick={handleFocus} className='secondary-img-container'>
                            <img src={productImg2} alt='secondary_img' className='secondary-img' />
                        </div>
                        <div onClick={handleFocus} className='secondary-img-container'>
                            <img src={productImg3} alt='secondary_img' className='secondary-img' />
                        </div>
                        <div onClick={handleFocus} className='secondary-img-container'>
                            <img src={productImg4} alt='secondary_img' className='secondary-img' />
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div className='product-container'>

                        <p className='company-name'>SNEAKER COMPANY</p>
                        <h2 className='product-name'>Fall Limited Edition Sneakers</h2>
                        <p className='product-description'>I have brought peace freedom justice and security to my new Empire. Your new Empire? Anikan my allegiance is the the Republic, to Democracy. Don't make me kill you. Only a sith deals in absolutes, I will do what I must. You will try</p>
                        <div className='price-info-container'>
                            <h2 data-price={245.99} className='product-price'>$245.99 <span className='discount-amount'>50%</span></h2>
                            <h4 className='product-full-price'><s>$300.00</s></h4>
                        </div>
                        <div className='product-btn-container'>
                            <div className='product-amount-container'>
                                <button onClick={() => { setValue(prev => prev + 1) }} className='amount-btn'>+</button>
                                <p className='product-amount-value'>{value}</p>
                                <button onClick={() => {
                                    setValue(prev => {
                                        return prev === 0 ? 0 : prev - 1
                                    })
                                }} className='amount-btn'>-</button>
                            </div>
                            <button onClick={handleClick} className='cart-btn'>
                                <ion-icon size="small" name="cart-outline"></ion-icon>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductView;