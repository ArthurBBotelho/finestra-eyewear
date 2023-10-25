import React from 'react';
import '../../index.css';
import CartWidget from '../CartWidget';
import SearchWidget from '../SearchWidget';
import UserWidget from '../UserWidget';

function NavBar() {
    return (
        <div>
            <header class="p-6 grid grid-cols-2 w-auto h-22">
                <div class="flex align-bottom">
                    <h1 class="px-12 font-bold text-3xl ">Finestra Eyewear</h1>
                    <a class="px-12 font-thin text-xl">Produtos</a>
                    <a class="pr-12 font-thin text-xl">Sobre</a>
                </div>
                <div class="flex justify-end">
                    <SearchWidget />
                    <UserWidget />
                    <CartWidget />
                </div>
            </header>
            <div class="w-auto h-0.5 bg-black"></div>
        </div>
    )
}

export default NavBar