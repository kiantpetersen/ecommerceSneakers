import React, { useState } from 'react';
import productImg1 from '../images/image-product-1.jpg'
import productImg2 from '../images/image-product-2.jpg'
import productImg3 from '../images/image-product-3.jpg'
import productImg4 from '../images/image-product-4.jpg'
import productImg5 from '../images/image-product-1.jpg'

function ProductView(props) {
    const [value, setValue] = useState(1)
    const [mainImg, setImg] = useState(productImg1)
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
    function handleChange(e) {
        e.target.style.border = 'solid 5px red'
    }
    return (
        <div className='product-section'>
            <div className='grid grid-2--cols'>
                <div className='col'>
                    <div className='primary-product-img-container'>
                        <img onChange={handleChange} className='primary-product-img' src={mainImg} alt='primary_produc_img' />
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
                        <h2 className='product-price'>$245.99</h2>
                        <h4 className='product-full-price'>$300.00</h4>
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
                            <button className='cart-btn'>
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