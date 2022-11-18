import React from 'react'
import { useState } from 'react';
import { products } from '../../assets/data/data';
import { Heading } from '../../common/Heading';
import { ProductItem } from './ProductItem';

export const Product = () => {
    const [data, setData] = useState(products);
    console.log(setData)

    return (
        <>
            <section className='product'>
                <div className="container">
                    <Heading title='Trendings Products' desc='Confira os designs mais quentes da semana. Essas estrelas em ascensão merecem sua atenção.' />

                    <ProductItem data={data} />
                </div>
            </section>
        </>
    )
}
