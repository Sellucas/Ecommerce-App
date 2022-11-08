import React from 'react'
import { Card } from './hero/Card'
import { Hero } from './hero/Hero'
import { Product } from './product/Product'

export const Home = () => {
    return (
        <>
            <Hero />
            <Card />
            <Product />
        </>
    )
}
