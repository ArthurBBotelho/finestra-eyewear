import React from "react";
import cart from '../../imagens/icons/cart.svg';

function CartWidget() {
    
    return (
        <div className="flex">
            <a><img className="w-8 h-8" src={cart} alt="Carrinho de Compras"></img></a>
        </div>
    )
}

export default CartWidget