import React from "react";
import cart from '../../imagens/icons/cart.svg';

function CartWidget() {
    return (
        <div>
            <a class="pr-24"><img class="w-6" src={cart} alt="Carrinho de Compras" ></img></a>
        </div>
    )
}

export default CartWidget