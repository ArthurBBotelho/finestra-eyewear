import React from 'react';
import '../../index.css';
import cart from '../../imagens/icons/cart.svg';
import user from '../../imagens/icons/user.svg';
import search from '../../imagens/icons/search.svg'

function NavBar() {
    return (
        <div>
            <header class="p-6 grid grid-cols-2 w-auto h-20 bg-slate-200">
                <h1 class="pl-12 font-bold text-2xl">Finestra Eyewear</h1>
                <div class="flex justify-end">
                    <a class="pr-12"><img class="w-6" src={search} alt="Icone de Busca" ></img></a>
                    <a class="pr-12"><img class="w-6" src={user} alt="Icone do Usuário" ></img></a>
                    <a class="pr-20"><img class="w-6" src={cart} alt="Carrinho de Compras" ></img></a>
                </div>
            </header>
        </div>
    )
}

export default NavBar