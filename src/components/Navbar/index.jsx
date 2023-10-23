import React from 'react';
import '../../index.css';
import cart from '../../imagens/icons/cart.svg';
import user from '../../imagens/icons/user.svg';
import search from '../../imagens/icons/search.svg'

function NavBar() {
    return (
        <div>
            <header class="bg-grey">
                <h1 class="text-xl font-medium text-slate-500">Finestra Eyewear</h1>
                <a><img width={20} src={search} alt="Icone de Busca" ></img></a>
                <a><img width={20} src={user} alt="Icone do Usuário" ></img></a>
                <a><img width={20} src={cart} alt="Carrinho de Compras" ></img></a>
            </header>
        </div>
    )
}

export default NavBar