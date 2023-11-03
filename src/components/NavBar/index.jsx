import React from 'react';
import CartWidget from '../CartWidget';
import SearchWidget from '../SearchWidget';
import UserWidget from '../UserWidget';
import { NavLink } from 'react-router-dom';
import "./style.css"

function Navbar() {
    return (
        <div className="w-full bg-black text-white h-18 sticky index-navBar">
            <header className="flex w-full justify-between px-32">
                <div className="flex">
                    <NavLink to="/" className="m-4 font-bold text-3xl">FINESTRA EYEWEAR</NavLink>
                    <NavLink to="/produtos" className="m-6 font-thin text-xl hover:underline cursor-pointer">Produtos</NavLink>
                    <NavLink to="/sobre" className="m-6 font-thin text-xl hover:underline cursor-pointer">Sobre</NavLink>
                </div>
                <div className="flex h-18 w-18 mr-6 items-center justify-around">
                    <div className="cursor-pointer mr-6"><SearchWidget /></div>
                    <div className="cursor-pointer mr-6"><UserWidget /></div>
                    <div className="cursor-pointer mr-6"><CartWidget /></div>
                </div>
            </header>
        </div>
    )
}

export default Navbar