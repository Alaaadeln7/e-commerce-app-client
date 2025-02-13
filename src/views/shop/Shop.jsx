import React, { Fragment } from 'react'
import './shop.css'
import ShopProduct from '../shopProduct/ShopProduct'

const Shop = () => {
  return (
    <Fragment>
        <div className="shop-head">
            <div className="container">
                <div className="content">
                    <h1>Gift for your skin</h1>
                    <p> Aliquip fugiat ipsum nostrud ex et eu incididunt quis minim dolore excepteur voluptate</p>
                </div>
            </div>
        </div>
        <ShopProduct />
    </Fragment>
  )
}

export default Shop
