import React from 'react'
import './similarProduct.css';

function Product(props){
    return (
        <div className='productt'>
            <img className='product_imagee' src={props.image} alt={props.alt} />
            <div className='name'>
                <p className='product_namee'>{props.name}</p>
                <p className='product_pricee'>{props.price}</p>
            </div>
        </div>
    )
}

export default function SimilarProduct() {
  return (
    <div className='similar_product'>
        <h3>Sản phẩm tương tự</h3>
        <Product
            image ='./assets/images/bully.jpg'
            name ='Chó American Bully'
            price = '15,050,000đ'
        />
        <Product
            image ='./assets/images/eskimo.jpg'
            name ='Chó American Eskimo'
            price = '5,050,000đ'
        />
        <Product
            image ='./assets/images/becgie.jpg'
            name ='Chó Becgie'
            price = '5,050,000đ'
        />
        <Product
            image ='./assets/images/golden.jpg'
            name ='Cún con Golden'
            price = '5,050,000đ'
        />
        <Product
            image ='./assets/images/terrier.jpg'
            name ='Chó boston Terrier'
            price = '5,050,000đ'
        />
    </div>
  )
}
