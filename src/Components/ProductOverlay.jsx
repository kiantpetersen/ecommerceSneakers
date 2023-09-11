import React, { useState } from 'react';
import productImg1 from '../images/image-product-1.jpg'
import productImg2 from '../images/image-product-2.jpg'
import productImg3 from '../images/image-product-3.jpg'
import productImg4 from '../images/image-product-4.jpg'
import productImg5 from '../images/image-product-1.jpg'

function ProductOverlay(props) {
    const [mainImg, setImg] = useState(productImg2)

    function handleClick(e) {
        const selectorContainer = document.querySelector('.overlay-selector')
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
        children.forEach((child) => {
            child.classList.remove('viewing')
        })

        setImg(e.target.src)
        imageContainer.classList.add('viewing')
    }
    return (
        <div className='product-overlay'>
            <div className='overlay-container'>
                <div onClick={props.viewOverlay} className='overlay-exit'><ion-icon size="large" name="close-outline"></ion-icon></div>
                <div className='overlay-img-container'>
                    <div onClick={handleClick} data-nav='prev' className='overlay-nav overlay-next'><ion-icon name="chevron-forward-outline"></ion-icon></div>
                    <img src={mainImg} className='overlay-primary-img' />
                    <div onClick={handleClick} data-nav='next' className='overlay-nav overlay-prev'><ion-icon name="chevron-back-outline"></ion-icon></div>

                </div>
                <div className='images-selector-container overlay-selector '>
                    <div onClick={handleFocus} className='secondary-img-container '>
                        <img src={productImg1} alt='secondary_img' className='secondary-img' />
                    </div>
                    <div onClick={handleFocus} className='secondary-img-container viewing'>
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

        </div>
    );
}

export default ProductOverlay;