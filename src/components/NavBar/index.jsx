import React from 'react';
import CartWidget from '../CartWidget';
import SearchWidget from '../SearchWidget';
import UserWidget from '../UserWidget';

function Navbar() {
    return (
        <div className="w-auto bg-black text-white">
            <header className="flex ">
                <div className="flex ml-32">
                    <h1 className="m-8 font-bold text-3xl">Finestra Eyewear</h1>
                    <a className="m-10 font-thin text-xl hover:underline cursor-pointer">Produtos</a>
                    <a className="m-10 font-thin text-xl hover:underline cursor-pointer">Sobre</a>
                </div>
                <div className="flex mt-10 ml-24 bg-slate-400">
                    <div><SearchWidget /></div>
                    <div><UserWidget /></div>
                    <div><CartWidget /></div>
                </div>
            </header>
            <div ></div>
        </div>
    )
}

export default Navbar