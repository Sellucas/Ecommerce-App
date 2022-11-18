import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { useState } from 'react'
import { SearchItems } from './SearchItems'
import { products } from '../../assets/data/data'

export const Hero = () => {
    const [value, setValue] = useState('')

    const onChange = (e) => {
        setValue(e.target.value)
    }

    const onSearch = (key) => {
        setValue(key)
        console.log('search', key)
    }

    return (
        <>
            <section className='hero'>
                <div className="container">
                    <h1>
                        <label>Mais de <span>6,500</span> Design Planejados</label> <br />
                        <label>Recursos, <span> Gráficos & Website</span> Templates</label>
                    </h1>
                    <p>Temas de design de alta qualidade para uso pessoal ou comercial contém mais de 6 mil itens em 100 categorias.</p>
                    <div className="search">
                        <span>All Categories</span>
                        <hr />
                        <input type="text" placeholder='Pesquisar produtos ...' onChange={onChange} value={value} />
                        <button onClick={() => onSearch(value)}>
                            <BiSearch className='searchIcon heIcon' />
                        </button>
                    </div>
                    <SearchItems product={products} value={value} onSearch={onSearch} />
                    <p>Exemplos: Mockip, PSD, Theme Design, Image...</p>

                </div>
            </section>
        </>
    )
}
