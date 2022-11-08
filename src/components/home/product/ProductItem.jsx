import React from 'react'
import { FiShoppingBag } from 'react-icons/fi'

export const ProductItem = ({ data }) => {
    return (
        <>
            <div className="product_items">
                {data.map((items) => (
                    <div className="box" key={items.id}>
                        <div className="img">
                            <img src={items.cover} alt="" />
                            <div className="overlay">
                                <button className='button'>
                                    <FiShoppingBag />
                                </button>
                            </div>
                        </div>
                    </div>)
                )}
            </div>
        </>
    )
}
