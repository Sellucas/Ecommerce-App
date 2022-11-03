import React from 'react'
import { BiSearch } from 'react-icons/bi';
import { navlist } from '../assets/data/data';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <div className="toggle">
                            <button>menu</button>
                        </div>
                        <div className="left">
                            <p className='logo'>Logo</p>
                        </div>
                        <div className="center">
                            <ul className='menu'>
                                {navlist.map((nav) => (
                                    <li key={nav.id}>
                                        <Link to={nav.path}>{nav.text}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}
