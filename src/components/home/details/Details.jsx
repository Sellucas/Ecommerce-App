import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { MdStarRate } from 'react-icons/md';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { ADD, DELETE, REMOVE_INT } from '../../../controller/action';

export const Details = () => {
    const [data, setData] = useState([])
    const getdata = useSelector((state) => state.cartReducer.carts)
    const { id } = useParams()

    const compare = () => {
        let compareData = getdata.filter((e) => {
            return e.id == id
        })
        setData(compareData)
    }

    useEffect(() => {
        compare()
    }, [id])

    const dispatch = useDispatch()
    const increment = (e) => {
        dispatch(ADD(e))
    }

    const decrement = (item) => {
        dispatch(REMOVE_INT(item))
    }

    const history = useHistory()
    const deletes = (id) => {
        dispatch(DELETE(id))
        history.push('/')
    }

    return (
        <>
            <article>
                <section className='details'>
                    <h2 className='details_title'>Product Details pages</h2>
                    {data.map((item) => (
                        <div className="details_content">
                            <div className="details_content_img">
                                <img src={item.cover} alt="" />
                            </div>
                            <div className="details_content_detail">
                                <h1>{item.title}</h1>
                                <div className="rating">
                                    <MdStarRate />
                                    <MdStarRate />
                                    <MdStarRate />
                                    <MdStarRate />
                                    <MdStarRate />
                                    <label htmlFor="">(1 costumer review)</label>
                                </div>
                                <h3>${item.price * item.qty}</h3>
                                <p>{item.author}</p>
                                <div className="qty">
                                    <div className="count">
                                        <button onClick={() => increment(item)}>
                                            <AiOutlinePlus />
                                        </button>
                                        <span>{item.qty}</span>
                                        <button onClick={item.qty <= 1 ? () => deletes(item.id) : () => decrement(item)}>
                                            <AiOutlineMinus />
                                        </button>
                                    </div>
                                    <button className='button'>Add to Cart</button>
                                </div>
                                <div className="desc">
                                    <h4>PRODUCT DESCRIPTION</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, saepe placeat dolorem minus consequuntur ut voluptatibus dolores adipisci cum accusamus sit minima laborum rerum nulla. Totam aut sit explicabo repellat!</p>
                                    <h4>PRODUCT DETAILS</h4>
                                    <ul>
                                        <li><p>Material: Plastic, Wood</p></li>
                                        <li><p>Legs: dolor sit amet consectetur adipisicing elit</p></li>
                                        <li><p>Dimensions and Weight: Height: 80Cm, Weight: 5.3kg</p></li>
                                        <li><p>Length: 48 Cm</p></li>
                                        <li><p>Depth: 52 Cm</p></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </article>
        </>
    )
}
