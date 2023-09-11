import React from 'react';
import productImg1 from '../images/image-product-1.jpg'
import productImg2 from '../images/image-product-1.jpg'
import productImg3 from '../images/image-product-1.jpg'
import productImg4 from '../images/image-product-1.jpg'
import productImg5 from '../images/image-product-1.jpg'

function ProductView(props) {
    return (
        <div className='product-section'>
            <div className='grid grid-2--cols'>
                <div className='col'>
                    <div className='primary-product-img-container'>
                        <img className='primary-product-img' src={productImg1} alt='primary_produc_img' />
                    </div>
                    <div className='images-selector-container'>
                        <div className='secondary-img-container'>
                            <img src={productImg1} alt='secondary_img' className='secondary-img' />
                        </div>
                        <div className='secondary-img-container'>
                            <img src={productImg1} alt='secondary_img' className='secondary-img' />
                        </div>
                        <div className='secondary-img-container'>
                            <img src={productImg1} alt='secondary_img' className='secondary-img' />
                        </div>
                        <div className='secondary-img-container'>
                            <img src={productImg1} alt='secondary_img' className='secondary-img' />
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
                                <button className='amount-btn'>+</button>
                                <p className='product-amount-value'>3</p>
                                <button className='amount-btn'>-</button>
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