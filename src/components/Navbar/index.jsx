import React from 'react';
import '../../index.css';
import cart from '../../imagens/icons/cart.svg';
import user from '../../imagens/icons/user.svg';
import search from '../../imagens/icons/search.svg'

function NavBar() {
    return (
        <div>
            <header class="flex">
                <h1 class="text-3xl font-bold bg-slate-600">Finestra Eyewear</h1>
                <a><img width={20} src={search} alt="Icone de Busca" ></img></a>
                <a><img width={20} src={user} alt="Icone do Usuário" ></img></a>
                <a><img width={20} src={cart} alt="Carrinho de Compras" ></img></a>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nihil, alias ab adipisci a eveniet, numquam animi unde repudiandae facilis doloribus sit expedita error ratione, quis quam quibusdam perspiciatis. Similique.</p>
        </div>
    )
}

export default NavBar