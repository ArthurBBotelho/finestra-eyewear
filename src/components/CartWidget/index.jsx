import React from "react";
import cart from '../../imagens/icons/cart.svg';

function CartWidget() {
    return (
        <div class="flex">
            <a class="pr-24"><img class="w-6" src={cart} alt="Carrinho de Compras"></img><ItemListContainer /></a>
        </div>
    )
}

function ItemListContainer () {
    return (
        <div class="w-2">
            
        </div>
    )
}

export default CartWidget