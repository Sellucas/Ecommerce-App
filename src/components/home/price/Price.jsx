import React from 'react'
import { price } from '../../assets/data/data'
import { Heading } from '../../common/Heading'

export const Price = () => {
    return (
        <>
            <section className='price'>
                <Heading title='Escolha seu plano' desc='Conheça nossos mais recentes e atualizados modelos do mercado.'/>
                <div className="content">
                    {price.map((item) => (
                        <div className="box">
                            <h3>{item.name}</h3>
                            <h1>
                                <span>$</span>
                                {item.price}
                                <label htmlFor="">/usuário por mês</label>
                            </h1>
                            <p>{item.desc}</p>
                            <button className='button'>ADQUIRA AGORA</button>

                            <ul>
                                {item.list.map((lists) => (
                                    <li>
                                        <i>{lists.icon}</i>
                                        <span>{lists.para}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
