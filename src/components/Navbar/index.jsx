import React from 'react';
import '../../index.css';
import cart from '../../imagens/icons/cart.svg';
import user from '../../imagens/icons/user.svg';
import search from '../../imagens/icons/search.svg'

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
                    <a class="pr-12"><img class="w-6" src={search} alt="Icone de Busca" ></img></a>
                    <a class="pr-12"><img class="w-6" src={user} alt="Icone do Usuário" ></img></a>
                    <a class="pr-24"><img class="w-6" src={cart} alt="Carrinho de Compras" ></img></a>
                </div>
            </header>
            <div class="w-auto h-0.5 bg-black"></div>
        </div>
    )
}

export default NavBar