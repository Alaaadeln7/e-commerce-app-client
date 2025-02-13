import { ListFilter, Search } from 'lucide-react'
import React from 'react'
import './shopProduct.css'

const ShopProduct = () => {
  return (
    <div className="shop-product">
        <div className="container">
            <div className="content">
                <div className="head">
                    <div className="left">
                        <button>all product</button>
                        <h2>face</h2>
                        <span></span>
                        <h2>body</h2>
                    </div>
                    <div className="right">
                        <label >
                            <Search className='search'/>
                            <input type="text" name="" placeholder='Search Product'/>
                        </label>
                        <div className="sort">
                            <h3>sort by</h3>
                            <ListFilter className='filter'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShopProduct
