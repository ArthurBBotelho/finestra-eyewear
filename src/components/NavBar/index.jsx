import React from 'react';
import CartWidget from '../CartWidget';
import SearchWidget from '../SearchWidget';
import UserWidget from '../UserWidget';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div className="w-full bg-black text-white">
            <header className="flex w-full justify-between px-32">
                <div className="flex">
                    <h1 className="m-8 font-bold text-3xl">Finestra Eyewear</h1>
                    <NavLink to="/" className="m-10 font-thin text-xl hover:underline cursor-pointer">Produtos</NavLink>
                    <NavLink to="/Sobre" className="m-10 font-thin text-xl hover:underline cursor-pointer">Sobre</NavLink>
                </div>
                <div className="flex h-32 w-32 items-center justify-around bg-slate-400">
                    <div><SearchWidget /></div>
                    <div><UserWidget /></div>
                    <div><CartWidget /></div>
                </div>
            </header>
        </div>
    )
}

export default Navbar