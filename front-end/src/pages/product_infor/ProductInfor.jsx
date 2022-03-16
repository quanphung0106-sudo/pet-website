import React from 'react'
import "./productInfor.css"
import AboutProduct from './aboutProduct/AboutProduct'
import Details from './details/Details'
import SimilarProduct from './similarProduct/SimilarProduct'

export default function ProductInfor() {
  return (
    <div>
      <div className="left">
        <AboutProduct />
        <Details />
      </div>
      <div className="right">
        <SimilarProduct />
      </div>
      
    </div>
    
  )
}
